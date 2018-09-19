/**
 * "Set" implementation
 */
class Group {
    constructor() {
        this.group = [];
    }
    
    add(element) {
        if (!this.has(element)) {
            this.group.push(element);
        }
    }

    delete(element) {
        const id = this.group.indexOf(element);
        if (id >= 0) {
            this.group.splice(id, 1);
            return true;
        } else {
            return false;
        } 
    }

    has(element) {
        return this.group.includes(element);
    }

    static from(elements) {
        const group = new Group;
        elements.forEach(element => {
            group.add(element);
        });
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group.delete(10));
// → true
console.log(group.delete(5));
// → false
console.log(group.has(10));
// → false
