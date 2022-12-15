//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.Выведите в консоль результат.

const x = 2;
const y = 3;
console.log("сумма чисел " + x + " и " + y + " равна " + (SumNumber(x)(y)));
//console.log("сумма чисел равна " + (SumNumber("2")(3)));

function SumNumber(term1) {
    if (typeof (term1) != "number") {
        console.log("Первый параметр не число");
    };
    return function (term2) {
        if (typeof (term2) != "number") {
            console.log("Второй параметр не число");
        };
        return term1 + term2;
    };
};