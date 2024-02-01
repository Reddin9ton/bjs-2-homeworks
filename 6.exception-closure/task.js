function parseCount(count) {
    parse = Number.parseFloat(count);
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
    constructor(sideOne,sideTwo,sideThree) {
        this.sideOne = sideOne;
        this.sideTwo = sideTwo;
        this.sideThree = sideThree;
        this.perimeter = 0;
        this._perimeter = 0;
        this.area = 0;
        this._area = 0;

        if (sideOne > (sideTwo + sideThree) || sideTwo > (sideOne + sideThree) || sideThree > (sideOne + sideTwo)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
 }

 set perimeter(perimeter) {
    perimeter = this.sideOne + this.sideTwo + this.sideThree;
    this._perimeter = perimeter;
 }
 get perimeter() {
    return this._perimeter;
 }
 set area(area) {
    const p = this._perimeter / 2;
    area = Number(Math.sqrt(p * (p - this.sideOne) * (p - this.sideTwo) * (p - this.sideThree)).toFixed(3));
    this._area = area;
 }
 get area() {
    return this._area;
}
}

function getTriangle(sideOne,sideTwo,sideThree) {
    try {
        const myObject = new Triangle(sideOne,sideTwo,sideThree);
        return myObject;
    } catch (error) {
        return {
        perimeter: () => "Ошибка! Треугольник не существует",
        area: () => "Ошибка! Треугольник не существует",
    }
    }
}