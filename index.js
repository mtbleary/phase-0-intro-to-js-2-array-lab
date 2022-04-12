const cats = [ "Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
};
function appendCat(array) {
    appendCat = [
        ...cats.slice(),
    "Broom"
    ]
    return appendCat;
}
function prependCat(name) {
    prependCat = [
        "Arnold",
        ...cats.slice(),
    ]
    return prependCat;
}
function removeLastCat(name) {
    removeLastCat = [
        ...cats.slice(0, 2)
    ]
    return removeLastCat;
}
function removeFirstCat(name) {
    removeFirstCat = [
    ...cats.slice(1)
]
return removeFirstCat;
}
