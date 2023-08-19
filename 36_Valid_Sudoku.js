var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        let count1 = {};
        let count2 = {};
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (count1[board[i][j]]) return false;
                else count1[board[i][j]] = 1;
            }
            if (board[j][i] !== ".") {
                if (count2[board[j][i]]) return false;
                else count2[board[j][i]] = 1;
            }
        }
    }
    let indexes = [[0, 2], [3, 5], [6, 8]];
    let indexes2 = [[0, 2], [3, 5], [6, 8]];
    for (indexSet of indexes) {
        for (indexSet2 of indexes2) {
            let count = {};
            for (let i = indexSet[0]; i <= indexSet[1]; i++) {
                for (let j = indexSet2[0]; j <= indexSet2[1]; j++) {
                    if (board[i][j] !== ".") {
                        if (count[board[i][j]]) return false;
                        else count[[board[i][j]]] = 1;
                    }
                }
            }
        }
    }
    return true;
}

const board1 = [
    [".", ".", ".", ".", "5", ".", ".", "1", "."],
    [".", "4", ".", "3", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "3", ".", ".", "1"],
    ["8", ".", ".", ".", ".", ".", ".", "2", "."],
    [".", ".", "2", ".", "7", ".", ".", ".", "."],
    [".", "1", "5", ".", ".", ".", ".", ".", "."],
    [".", ".", ".", ".", ".", "2", ".", ".", "."],
    [".", "2", ".", "9", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", ".", "."]
]