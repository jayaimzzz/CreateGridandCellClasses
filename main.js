let dest = document.getElementById('mainWrapper');
class Grid {
    constructor(options) {
        let gridArray = [];
        this.gridArray = gridArray;
        this.name = options.name || 'grid';
        this.numberOfColumns = options.numberOfColumns;
        this.numberOfRows = options.numberOfRows;
        // this.borderColor = options.borderColor || 'black';
        // this.borderThickness = options.borderThickness || '1px';
        let wrapper = document.createElement('div');
        wrapper.id = options.name + 'Div';
        wrapper.className = 'grid';
        for (let c = 0; c < options.numberOfColumns; c++) {
            let column = [];
            let columnDiv = document.createElement('div');
            columnDiv.id = `column${c}`;
            columnDiv.class = 'column';
            for (let r = 0; r < options.numberOfRows; r++) {
                const cell = new Cell(c, r);
                let cellDiv = cell.createCellDiv();
                cell.addEventListner(hello)
                column.push(cell);
                columnDiv.appendChild(cellDiv)
            }
            gridArray.push(column);
            wrapper.appendChild(columnDiv);
        }
        dest.appendChild(wrapper);
    }
    searchForCell(columnNumber, rowNumber) {
        return this.gridArray[columnNumber][rowNumber];
    }

    findNeighbors(cell){
        let neighbors = [];
        neighbors.push(this.gridArray[cell.columnNumber - 1][cell.rowNumber])
        neighbors.push(this.gridArray[cell.columnNumber][cell.rowNumber + 1])
        neighbors.push(this.gridArray[cell.columnNumber + 1][cell.rowNumber])
        neighbors.push(this.gridArray[cell.columnNumber][cell.rowNumber - 1])
        return neighbors.filter(cell => cell !== undefined)
    }
    forEachCell(callBackFunction){
            for (let c = 0; c < this.numberOfColumns; c++) {

                for (let r = 0; r < this.numberOfRows; r++) {
                    callBackFunction(this.gridArray[c][r]);
                }
            }
    }
}

class Cell {
    constructor(columnNumber, rowNumber) {
        this.columnNumber = columnNumber;
        this.rowNumber = rowNumber;
        this.divID = `cellAtColumn${columnNumber}Row${rowNumber}`;
        this.clicked = false;
    }
    createCellDiv() {
        let cell = document.createElement('div');
        cell.dataset.columnIndex = this.columnNumber;
        cell.dataset.rowIndex = this.rowNumber;
        cell.id = this.divID;
        cell.className = 'cell';
        this.cellDiv = cell;
        return cell;
    }
    setAsClicked(){
        this.clicked = true;
    }
    addEventListner(callBackFunction) {
        this.cellDiv.addEventListener('click', callBackFunction);

    }
    removeEventListner(callBackFunction) {
        this.cellDiv.removeEventListener('click', callBackFunction);
    }

}

const grid1 = new Grid({
    numberOfColumns: 3,
    numberOfRows: 4,
    name: 'superSweetGrid'
})

function hello(event) {
    console.log(event.target)
}


let cellTest = grid1.searchForCell(1,3);
console.log('searchForCell at col 1 row 3 and set it as clicked',grid1.searchForCell(1,3).setAsClicked)
console.log('neightbors',grid1.findNeighbors(cellTest))

