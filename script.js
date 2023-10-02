"use strict"

let lang = "ru"
let arr = []

// задание 1.a
if (lang == "ru")
    arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
else
    arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
console.log(arr)

// задание 1.b
switch (true) {
    case lang == "ru": arr = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']; break
    case lang == "en": arr = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']; break
}
console.log(arr)

// задание 1.c
let arr2 = []
arr2['ru'] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
arr2['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
console.log(arr2[lang])

// задание 2
let namePerson = "Александр"
namePerson == "Артем" ? console.log("директор") : namePerson == "Александр" ? console.log("преподаватель") : console.log("студент")