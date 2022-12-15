//Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.Иначе говоря, умножает x на себя n раз и возвращает результат.

const NumberExponentiation = (Base, Power) => {
    if ((typeof (Base) || typeof (Power)) != "number") {
        console.log("Параметры функции должны быть числами");
        return;
    };
    if ((Number.isInteger(Base) && Number.isInteger(Power)) !== true) {
        console.log("Параметры функции должны быть целыми числами");
        return;
    };
    if (Power === 0) {
        Result = 1;
        return (Result);
    };
    if (Power > 0) {
        Result = Base;
        for (let i = 1; (i < Power); i++) {
            Result = Result * Base;
        };
    };
    if (Power < 0) {
        Result = 1;
        for (let i = 0; (i > Power); i--) {
            Result = Result / Base;
        };
    };
    return (Result);
}
console.log("Результат возведения в степень равен " + NumberExponentiation(4, -2));