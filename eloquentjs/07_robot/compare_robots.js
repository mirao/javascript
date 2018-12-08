const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin",
    "Alice's House-Post Office", "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop", "Marketplace-Farm",
    "Marketplace-Post Office", "Marketplace-Shop",
    "Marketplace-Town Hall", "Shop-Town Hall"
];


function buildGraph(edges) {
    let graph = Object.create(null);
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

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

function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
        if (state.parcels.length == 0) {
            return turn;
        }

        let action = robot(state, memory);
        state = state.move(action.direction);
        memory = action.memory;
    }
}

function randomPick(array) {
    let choice = Math.floor(Math.random() * array.length);
    return array[choice];
}

function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
}

VillageState.random = function (parcelCount = 5) {
    let parcels = [];
    for (let i = 0; i < parcelCount; i++) {
        let address = randomPick(Object.keys(roadGraph));
        let place;
        do {
            place = randomPick(Object.keys(roadGraph));
        } while (place == address);
        parcels.push({ place, address });
    }
    return new VillageState("Post Office", parcels);
};

const mailRoute = [
    "Alice's House", "Cabin", "Alice's House", "Bob's House",
    "Town Hall", "Daria's House", "Ernie's House",
    "Grete's House", "Shop", "Grete's House", "Farm",
    "Marketplace", "Post Office"
];

function routeRobot(state, memory) {
    if (memory.length == 0) {
        memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
}

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


function myRobot({ place, parcels }, route) {
    function findShortestRoute(graph, path, to) {
        for (const dest of graph[path[path.length - 1]]) {
            if (dest == to) { // Destination found
                routes.push(path.concat(to));
                return;
            }
            if (!path.includes(dest)) {
                findShortestRoute(graph, path.concat(dest), to);
            };
        }
    }

    let routes = [];
    if (route.length == 0) {
        parcels.filter(parcel => parcel.place != place).forEach(parcel => {
            findShortestRoute(roadGraph, [place], parcel.place);
        });
        parcels.filter(parcel => parcel.place == place).forEach(parcel => {
            findShortestRoute(roadGraph, [place], parcel.address);
        });
        route = routes.reduce((a, b) => a.length < b.length ? a : b);
    }
    return { direction: route[0], memory: route.slice(1) };
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

function lazyRobot({ place, parcels }, route) {
    if (route.length == 0) {
        // Describe a route for every parcel
        let routes = parcels.map(parcel => {
            if (parcel.place != place) {
                return {
                    route: findRoute(roadGraph, place, parcel.place),
                    pickUp: true
                };
            } else {
                return {
                    route: findRoute(roadGraph, place, parcel.address),
                    pickUp: false
                };
            }
        });

        // This determines the precedence a route gets when choosing.
        // Route length counts negatively, routes that pick up a package
        // get a small bonus.
        function score({ route, pickUp }) {
            return (pickUp ? 0.5 : 0) - route.length;
        }
        route = routes.reduce((a, b) => score(a) > score(b) ? a : b).route;
    }

    return { direction: route[0], memory: route.slice(1) };
}


function compareRobots(robot1, memory1, robot2, memory2, robot3, memory3, robot4, memory4, robot5, memory5) {
    const tasksCnt = 100;
    let sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0;
    for (let i = 0; i < tasksCnt; i++) {
        const state = VillageState.random();
        sum1 += runRobot(state, robot1, memory1);
        sum2 += runRobot(state, robot2, memory2);
        sum3 += runRobot(state, robot3, memory3);
        sum4 += runRobot(state, robot4, memory4);
        sum5 += runRobot(state, robot5, memory5);
    }
    console.log(`${robot1.name}: Average ${sum1 / tasksCnt} steps per task`);
    console.log(`${robot2.name}: Average ${sum2 / tasksCnt} steps per task`);
    console.log(`${robot3.name}: Average ${sum3 / tasksCnt} steps per task`);
    console.log(`${robot4.name}: Average ${sum4 / tasksCnt} steps per task`);
    console.log(`${robot5.name}: Average ${sum5 / tasksCnt} steps per task`);
}

compareRobots(randomRobot, [], routeRobot, [], goalOrientedRobot, [], myRobot, [], lazyRobot, []);