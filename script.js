let num = 266219  // исходное число
let dig           // очередная цифра
let res = 1       // результат умножения цифр
let s             // результат в виде строки

while (num > 0) {
    dig = num % 10
    res *= dig
    num = Math.trunc(num / 10)
}
console.log("Результат умножения = " + res)
res = res ** 3
s = "" + res
console.log("Первые две цифры результата в степени 3 = " + s.substring(0, 2))