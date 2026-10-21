const sumAll = function(minValue,maxValue) {
    if (!(minValue >= 0 && maxValue >= 0)) {
        return "ERROR";
    }
    if (minValue > maxValue) {
        [minValue,maxValue] = [maxValue, minValue];
    }

    let sum = 0;

    for (let i = minValue;i <= maxValue; i++){
        sum += i;
    }

    return sum;
};

console.log(sumAll(123,1));