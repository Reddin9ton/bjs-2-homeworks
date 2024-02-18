function parseCount(count) {
    let parse = Number.parseFloat(count);
    if (isNaN(parse)) {
        throw new Error("Невалидное значение");
    } else {
        return parse;
    }
}

function validateCount(count) {
    try {
        return parseCount(count);
    } catch (error) {
        return error;
    }

}

class Triangle {
    constructor(sideOne, sideTwo, sideThree) {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;

        if (sideOne >= (sideTwo + sideThree) || sideTwo >= (sideOne + sideThree) || sideThree >= (sideOne + sideTwo)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }

    }

    get perimeter() {
        return this.sideOne + this.sideTwo + this.sideThree;;
    }

    get area() {
        const perimeter = this.perimeter;
        const p = perimeter / 2;
        return Number(Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree)).toFixed(3));
    }
}

function getTriangle(sideOne, sideTwo, sideThree) {
    try {
        const myObject = new Triangle(sideOne, sideTwo, sideThree);
        return myObject;
    } catch (e) {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        }
    }
}