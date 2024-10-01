const cats = ["Milo", "Otis", "Garfield"]
function Arrayfunctions (){
    cats.length = 0;
    cats.push('Milo', 'Otis', 'Garfield');
}
function destructivelyAppendCat (){
    cats.push ('Ralph')
    console.log(cats)
    
}
function destructivelyPrependCat( ){
    cats.unshift ('Bob')
    
}
function destructivelyRemoveLastCat() {
    cats.pop()   
}
function destructivelyRemoveFirstCat() {
    cats.shift() 
}
function appendCat(name) {
    return [...cats,name]  
}
// console.log(appendCat('broom'));
function prependCat(name) {
    return [name,...cats]
}
function removeLastCat() {
     return cats.slice(0,-1)
}
function removeFirstCat() {
    return cats.slice(1)
}
