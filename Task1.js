//Дан массив.Нужно вывести в консоль количество чётных и нечётных элементов в массиве.Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно.

let y = [1, 5, 7, 3, true, 0, "1", 2, 6, 3];
sort_by_2(y);
function sort_by_2(x) {
    let NumberEven = 0;
    let NumberOdd = 0;
    let Number0 = 0;
    let NumberOther = 0;
    for (let i = 0; i <= x.length - 1; i++) {
        if (typeof (x[i]) == "number") {
            if (x[i] === 0) {
                Number0 = Number0 + 1;
            } else {
                if (x[i] % 2 == 1) {
                    NumberOdd = NumberOdd + 1;
                } else {
                    NumberEven = NumberEven + 1;
                };
            };
        } else {
            NumberOther = NumberOther + 1;
        };
    };
    console.log(x);
    console.log("Количество нулевых элементов = " + Number0);
    console.log("Количество четных элементов = " + NumberEven);
    console.log("Количество нечетных элементов = " + NumberOdd);
    console.log("Количество нечисловых элементов = " + NumberOther);
};