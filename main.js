let dest = document.getElementById('mainWrapper');



const grid1 = new Grid({
    numberOfColumns: 3,
    numberOfRows: 4,
    name: 'superSweetGrid'
})

function hello(event) {
    console.log(event.target)

}


console.log('searchForCell at col 1 row 3 and set it as clicked', grid1.searchForCell(1, 2).setAsClicked)
console.log('neightbors to cell at col 1 row 1', grid1.findNeighbors(grid1.searchForCell(1, 1)));