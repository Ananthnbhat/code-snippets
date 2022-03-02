function closestEnemyII(inputArray) {
    // variables to store position of "1"
    let hi = 0;
    let hj = 0;
    // array to store positions of enemies "2"
    let enemies = [];
    // find the position of '1' and positions of all '2'
    for (let i = 0; i < inputArray.length; i++) {
        let innerAr = inputArray[i].split('');
        for (let j = 0; j < innerAr.length; j++) {
            if (innerAr[j] == '1') {
                hi = i;
                hj = j;
            }
            if (innerAr[j] == '2') {
                enemies.push(i, j);
            }
        }
    }
    // array to store no of steps taken to reach 2's positions from 1's position
    let steps = []
    /** find no of steps taken to reach all the 2s
     * 1. if 1 and 2 are in same row
     * 2. if 1 & 2 are in same row but wrapping gives shorter distance
     * 3. if 1 & 2 are in different columns
     */
    for (let k = 0; k < enemies.length - 1; k += 2) {
        let sameRow = Math.abs(hi - enemies[k]) + Math.abs(hj - enemies[k + 1]);
        let diffRow = Math.abs(hi - (enemies[k] - inputArray.length)) + Math.abs(hj - enemies[k + 1]);
        let diffCol = Math.abs(hi - enemies[k]) + Math.abs(hj - (enemies[k + 1] - inputArray.length));
        steps.push(Math.min(sameRow, diffCol, diffRow));
    }
    return steps.length > 0 ? Math.min(...steps) : 0;

}
console.log(closestEnemyII(["000", "100", "200"])); // 1
console.log(closestEnemyII(["0000", "2010", "0000", "2002"])); // 2
