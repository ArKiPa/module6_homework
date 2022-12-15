//Напишите функцию, которая принимает два числа.Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.Используйте setInterval.

function NumberInterval(Start, End) {
    if ((typeof (Start) || typeof (End)) != "number") {
        console.log("Параметры функции должны быть числами");
        return;
    };
    if (Start > End) {
        console.log("Значение второго параметра должно быть выше значения первого");
    };
    const IntervalId = setInterval(function () {
        setTimeout(function () {
            clearInterval(IntervalId);
        }, (End - Start) * 1000);
        console.log(Start);
        Start = Start + 1;
    }, 1000)
};
NumberInterval(-5, 5);
