export function sum(a, b) {
    return a + b;
  }

export function definePrime(num) {
    let isPrime, result;
    isPrime = true;

    if (num > 1 && num <= 1000) {
        for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
        }
        }
        result = isPrime
        ? `Число ${num} - простое число`
        : `Число ${num} - составное число`;
    } else if (num > 1000 || num <= 1) {
        result = "Данные неверны";
    }
    return result;
}

export function revertString(str) {
    if (typeof(str) !== 'string')
        return "not string";

    let revertedStr = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      revertedStr += str[i];
    }
    return revertedStr;
  }