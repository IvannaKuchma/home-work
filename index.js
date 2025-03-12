var myNum = 10;
var myStr = 'some sting';
var myBool = true;
var myArr = [1,2,3,4,5];
var myObj ={first: 'First Name', last:'Last Name'};

var decima12 = myNum.toFixed(2);
console.log(decima12);

var i = 5;
var y = ++i;
console.log(i);

var i = 10;
var x = --i;
console.log(i);

var myTest = 20;
myTest += "10";
console.log(myTest);

var myTest = 20;
myTest -= "8";
console.log(myTest);

var myTest = 20;
myTest *= "25";
console.log(myTest);

var myTest = 20;
myTest /= "4";
console.log(myTest);

var myTest = 20;
myTest %= "5";
console.log(myTest);

var Pi = "myPi";
console.log(Pi);

var myRound = Math.round(89.279);
console.log(myRound);

var myRandom = Math.random (10);
console.log(myRandom);

var myPow = Math.pow (3,5);
console.log(myPow);

var strObj ={
    "str" : "Мама мыла раму, рама мыла маму",
    "length" : "Мама мыла раму, рама мыла маму". length
};
console.log(strObj);

var strObj ={
    "str" : "Мама мыла раму, рама мыла маму",
    "length" : "Мама мыла раму, рама мыла маму". length
};
var isRamaPos = strObj.str.indexOf('paмa');
var isRama = isRamaPos !== 1;
console.log(isRamaPos);
console.log(isRama);

var strReplace = strObj.str.replace('мыла', 'моет').replace('рама', 'Рама').replace('мыла', 'держит');
console.log(strReplace);

var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
console.log(upperStr);

var someStr = 'some STRING';
var lowerStr = someStr.toLowerCase();
console.log(lowerStr);



