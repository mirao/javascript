const my = 6;


go();
function go() {
    console.log('Go!');
}


const go2 = function(suffix = "yeah") {
    console.log('Go2!' + suffix);
    {
        var my = 3;
        console.log(my);
    }
    console.log(my);
};

const outer = function(go2) {
    go2("No");
    go2();
};

const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
      result *= base;
    }
    return result;
};

outer(go2);
go2(`outside`);
console.log(my);
console.log(power(2, 5));
// Show if character is lower or upper
((chr) => {
    const status = chr == chr.toUpperCase() ? "upper" : "lower";
    console.log(`${chr} is ` + status);
})('Ř');