/**
 * Set of values
 */
class PGroup {

    constructor(set) {
        this.set = set;
    }

    /**
     * Add value to set, return new set
     * @param {any} value 
     */
    add(value) {
        if (this.has(value)) return this;
        return new PGroup(this.set.concat(value)); 
    }
    
    /**
     * Delete value from set, return new set
     * @param {any} value 
     */
    delete(value) {
        if (!this.has(value)) return this;
        return new PGroup(this.set.filter(x => x != value));
    }

    has(value) {
        return this.set.includes(value);
    }
 
}

PGroup.empty = new PGroup([]);

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
