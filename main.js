let dest = document.getElementById('mainWrapper');
class Grid {
    constructor(options) {
        let gridArray = [];
        this.gridArray = gridArray;
        this.name = options.name || 'grid';
        this.numberOfColumns = options.numberOfColumns;
        this.numberOfRows = options.numberOfRows;
        this.borderColor = options.borderColor || 'black';
        this.borderThickness = options.borderThickness || '1px';
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
                column.push(cell);
                columnDiv.appendChild(cellDiv)
            }
            gridArray.push(column);
            wrapper.appendChild(columnDiv);
        }
        dest.appendChild(wrapper);
        // return arrayOfColumns;
    }
    searchForCell(columnNumber, rowNumber) {
        return this.gridArray[columnNumber][rowNumber];

    }

}

class Cell {
    constructor(columnNumber, rowNumber) {
        this.columnNumber = columnNumber;
        this.rowNumber = rowNumber;
        this.divID = `cellAtColumn${columnNumber}Row${rowNumber}`;
    }
    createCellDiv() {
        let cell = document.createElement('div');
        cell.dataset.columnIndex = this.columnNumber;
        cell.dataset.rowIndex = this.rowNumber;
        cell.id = this.divID;
        cell.className = 'cell';
        return cell;
    }
}

const grid1 = new Grid({
    numberOfColumns: 3,
    numberOfRows: 4,
    name: 'superSweetGrid'
})

console.log(grid1.gridArray);
console.log(grid1.searchForCell(1,2));

// const cell1 = new Cell(1,2);
// console.log(cell1);