

let container = document.getElementById("container");
let cells = container.children;
console.log(cells)

function winner() {

    //horizontal
    for (let row = 0; row < 4; row++) {
        if (cells[row * 4].firstElementChild.innerHTML == cells[row * 4 + 1].firstElementChild.innerHTML &&
            cells[row * 4 + 1].firstElementChild.innerHTML == cells[row * 4 + 2].firstElementChild.innerHTML &&
            cells[row * 4 + 2].firstElementChild.innerHTML == cells[row * 4 + 3].firstElementChild.innerHTML) {
            return cells[row * 4].firstElementChild.innerHTML;
        }
    }

    //vertical
    for (let collum = 0; collum < 4; collum++) {
        if (cells[collum].firstElementChild.innerHTML == cells[collum + 4].firstElementChild.innerHTML &&
            cells[collum + 4].firstElementChild.innerHTML == cells[collum + 4 * 2].firstElementChild.innerHTML &&
            cells[collum + 4].firstElementChild.innerHTML == cells[collum + 4 * 3].firstElementChild.innerHTML) {
            return cells[collum].firstElementChild.innerHTML;
        }
    }

    //diagonal
    if (cells[0 * 4 + 0].firstElementChild.innerHTML == cells[1 * 4 + 1].firstElementChild.innerHTML &&
        cells[0 * 4 + 0].firstElementChild.innerHTML == cells[2 * 4 + 2].firstElementChild.innerHTML &&
        cells[0 * 4 + 0].firstElementChild.innerHTML == cells[3 * 4 + 3].firstElementChild.innerHTML) {
        return cells[0 * 4 + 0].firstElementChild.innerHTML;
    }

    if (cells[3 * 4 + 0].firstElementChild.innerHTML == cells[2 * 4 + 1].firstElementChild.innerHTML &&
        cells[3 * 4 + 0].firstElementChild.innerHTML == cells[1 * 4 + 2].firstElementChild.innerHTML &&
        cells[3 * 4 + 0].firstElementChild.innerHTML == cells[0 * 4 + 3].firstElementChild.innerHTML) {
        return cells[3 * 4 + 0].firstElementChild.innerHTML;
    }
    return ''
}


//index of cell
function onmouseclick(index) {
    let clicked_cell = cells[index];
    let clicked_inner = clicked_cell.firstElementChild
    if (clicked_inner.innerHTML != '') {
        return;

    }
    clicked_inner.innerHTML = 'X'

    if (winner() == 'X') {
        setTimeout(() => alert("you won?"), 100)
    }

    let enemy_Choises = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    while (enemy_Choises.length > 0) {
        let enemy_cell = Math.floor(Math.random() * enemy_Choises.length);
        let enemy_Choises2 = enemy_Choises.splice(enemy_cell, 1);

        let enemy_clicked_cell = cells[enemy_Choises2];
        let enemy_clicked_inner = enemy_clicked_cell.firstElementChild
        if (enemy_clicked_inner.innerHTML != '') {
            continue;

        }
        enemy_clicked_inner.innerHTML = 'O'

        if (winner() == 'O') {
            alert("you lost :(")
        }
        return;
    }

}