function truncate(str, n) {
    let pattern = /,/g
    str = str.replaceAll(pattern, "")
    str = str.slice(0, n - 1);
    str = str.padEnd(14, '.');
    return str;
}

console.log(truncate(",Lemon and Raspberry Classic", 14))
console.log(truncate(",Lemon Classic", 14))
console.log(truncate(",Fresh Mango Juice", 14))
console.log(truncate(",Orange Juice", 14))
