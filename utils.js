const PI_DATA = 3.141592653589793;

function add(a, b) {
    console.log(a + b);
}

export {PI_DATA as PI, add};

export function minus(a, b) {
    console.log(a - b);
};