class Grid {
    constructor(options){
        let arrayOfColumns = []
        this.numberOfColumns = options.numberOfColumns;
        this.numberOfRows = options.numberOfRows;
        this.borderColor = options.borderColor || 'black';
        this.borderThickness = options.borderThickness || '1px';
        for (let c = 0; c < options.numberOfColumns; c++){
            let column = [];
            for (let r = 0; r < options.numberOfRows; r++){
                const cell = new Cell(c,r);
                column.push(cell);
            }
            arrayOfColumns.push(column);
        }
        return arrayOfColumns;
    }
}

class Cell {
    constructor(columnNumber, rowNumber){
        this.columnNumber = columnNumber;
        this.rowNumber = rowNumber;
        this.divID = `cellAtColumn${columnNumber}Row${rowNumber}`;
        let cell = document.createElement('div');
        cell.id = this.divID;
        cell.className = 'cell';
        return cell;
    }
}

const grid1 = new Grid ({
    numberOfColumns: 3,
    numberOfRows: 4
})

console.log(grid1);