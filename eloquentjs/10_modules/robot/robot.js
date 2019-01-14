const {roadGraph} = require("./roads");

console.log(JSON.stringify(roadGraph, null, "\t"));

const {find_path} = require("dijkstrajs");

// Convert graph to graph intended for Dijkstra’s algorithm
let graph = {};
for (let node of Object.keys(roadGraph)) {
    let edges = graph[node] = {};
    for (let dest of roadGraph[node]) {
        edges[dest] = 1;
    }
}

// Find the shortest path using Dijkstra’s algorithm
console.log(find_path(graph, "Post Office", "Cabin"));
// → ["Post Office", "Alice's House", "Cabin"]

class VillageState {
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    /**
     * Move robot to destination
     * @param {string} destination 
     */
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, address: p.address };
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}

// let first = new VillageState(
//     "Post Office",
//     [{ place: "Post Office", address: "Alice's House" }]
// );
// let next = first.move("Alice's House");

// console.log(next.place);
// // → Alice's House
// console.log(next.parcels);
// // → []
// console.log(first.place);
// // → Post Office

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            console.log(`Done in ${turn} turns`);
            break;
        }
        console.log("Current state:", state.place);
        console.log("Parcels:", state.parcels);

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
        console.log(`Moved to ${action.direction}`);
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        // let address = "Alice's House";
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
            // place = "Post Office";
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
};

function findRoute(graph, from, to) {
    let work = [{ at: from, route: [] }];
    for (let i = 0; i < work.length; i++) {
        let { at, route } = work[i];
        for (let place of graph[at]) {
            if (place == to) return route.concat(place);
            if (!work.some(w => w.at == place)) {
                work.push({ at: place, route: route.concat(place) });
            }
        }
    }
}

function goalOrientedRobot({ place, parcels }, route) {
    if (route.length == 0) {
        let parcel = parcels[0];
        if (parcel.place != place) {
            route = findRoute(roadGraph, place, parcel.place);
        } else {
            route = findRoute(roadGraph, place, parcel.address);
        }
    }
    return { direction: route[0], memory: route.slice(1) };
}

runRobot(VillageState.random(), goalOrientedRobot, []);