// Write your solution here!
const cats = ["Milo","Otis","Garfield",];

    function destructivelyAppendCat(catName) {
        cats.push(catName);
    }
    
    function destructivelyPrependCat(catName) {
        cats.unshift(catName);
    }

    function destructivelyRemoveLastCat() {
        cats.pop();
    }

    function destructivelyRemoveFirstCat() {
        cats.shift()
    }

    function appendCat(newCat) {
        const copyCats = cats.slice()
        copyCats.push(newCat)
        return copyCats
    }

    function prependCat(newCatFront) {
        const copyCats = cats.slice()
        copyCats.unshift(newCatFront)
        return copyCats
    }

    function removeLastCat() {
        const copyCats = cats.slice(0, cats.length - 1)
        return copyCats
    }
    
    function removeFirstCat() {
        const copyCats = cats.slice(1)
        return copyCats
      }
