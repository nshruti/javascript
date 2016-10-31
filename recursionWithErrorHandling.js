function sum(n) {
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1
    } else if (n <= 1) {
        return "positive numbers only";
    } else if ((n !== parseInt(n))) {
        return "integers only"
    } else {
        return n + sum(n - 1);
    }
}

console.log(sum(10));    //55
console.log(sum(0));     //0
console.log(sum(-1));    //positive numbers only
console.log(sum('abc')); //integers only
