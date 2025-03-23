var userObj = {
    firstName: 'Ivanna',
    lastName: 'Kuchma',
    age: 24,
};

console.log(userObj);

var userObj = {
   firstName: 'Ivanna',
   lastName: 'Kuchma',
   age: 24,

   fullName(){
        return `${this.firstName} ${this.lastName}`;
   }
} 
console.log(userObj.fullName());

function defUpperStr( text) {
    return (text || 'Default text').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());


function evenFn(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(evenFn(10));
console.log(evenFn(15));
console.log(evenFn(20));

function weekFn(day) {
    var str = '';
    switch (day) {
        case 1:
            str = 'Понедельник';
            break;
        case 2:
            str = 'Вторник';
            break;
        case 3:
            str = 'Среда';
            break;
        case 4:
            str = 'Четверг';
            break;
        case 5:
            str = 'Пятница';
            break;
        case 6:
            str = 'Суббота';
            break;
        case 7:
            str = 'Воскресенье';
            break;
        default:
            str = null;
    }
    return str;
}
console.log(weekFn(1));
console.log(weekFn(3));
console.log(weekFn(7));
console.log(weekFn(9));
console.log(weekFn(1.5));
console.log(weekFn('2'));

function ageClassification(num) {
    return num > 0
        ? num > 24
            ? num > 44
                ? num > 65
                    ? num > 75
                        ? num > 90
                            ? num > 122
                                ? null
                                : 'долгожители'
                            : 'старческий возраст'
                        : 'пожилой возраст'
                    : 'средний возраст'
                : 'молодой возраст'
            : 'детский возраст'
        : null;
}
console.log(ageClassification(5));
console.log(ageClassification(34));
console.log(ageClassification(50));
console.log(ageClassification(70));
console.log(ageClassification(80));
console.log(ageClassification(110));
console.log(ageClassification(130));
console.log(ageClassification(0));

function oddFn(n) {
    var arr = [];
    var i = 0;
    while (i++ < n) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(oddFn(10));
console.log(oddFn(15));
console.log(oddFn(20));

function mainFunc(a, b, cb) {
    if (cb && typeof cb === 'function') return cb(a, b);
    return false;
}

function cbRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbSum(a, b) {
    return a + b;
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

console.log(mainFunc(2, 5, cbRandom));

console.log(mainFunc(10, 30, cbSum));

console.log(mainFunc(2, 5, cbPow));

console.log(mainFunc(2, 5, 'not a func'));

