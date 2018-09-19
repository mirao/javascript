/**
 * "Set" implementation
 */
class Group {
    constructor() {
        this.members = [];
    }

    [Symbol.iterator]() {
        return new GroupIterator(this.members);
    }
        
    add(element) {
        if (!this.has(element)) {
            this.members.push(element);
        }
    }

    delete(element) {
        const id = this.members.indexOf(element);
        if (id >= 0) {
            this.members.splice(id, 1);
            return true;
        } else {
            return false;
        }
    }

    has(element) {
        return this.members.includes(element);
    }

    static from(elements) {
        const group = new Group;
        elements.forEach(element => {
            group.add(element);
        });
        return group;
    }
}

class GroupIterator {
    constructor(members) {
        this.members = members;
        this.index = 0;
    }

    next() {
        if (this.index == this.members.length) {
            return {done: true}
        }

        return {value: this.members[this.index++], done: false};
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

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}
  // → a
  // → b
  // → c