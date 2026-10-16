// Define the unique types of water drops
const DROP_TYPES = {
    STANDARD: 'standard',
    STRIPED_HORIZONTAL: 'striped_h',
    STRIPED_VERTICAL: 'striped_v',
    WRAPPED: 'wrapped'
};

// Example of a Grid Item structure
class WaterDrop {
    constructor(row, col, color) {
        this.row = row;
        this.col = col;
        this.color = color; // e.g., 'blue', 'cyan', 'teal'
        this.type = DROP_TYPES.STANDARD; 
    }

    // Triggered when matched
    onMatch(grid) {
        if (this.type === DROP_TYPES.STRIPED_HORIZONTAL) {
            this.clearRow(grid, this.row);
        } else if (this.type === DROP_TYPES.WRAPPED) {
            this.explodeSplash(grid, this.row, this.col);
        }
        // Proceed with standard score addition and removal
    }

    clearRow(grid, rowIndex) {
        // Code to clear all tiles across the specified row index
    }

    explodeSplash(grid, r, c) {
        // Code to clear a 3x3 radius around coordinates r, c
    }
}