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