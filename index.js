const counter = (function() {
    let count = 0; 
    return function(n) {
      if (n !== undefined) {
        count = n;  
      }
      return count++; 
  };
    })();

  console.log(counter());
  console.log(counter()); 
  console.log(counter(100));
  console.log(counter()); 
  console.log(counter());
  console.log(counter(500)); 
  console.log(counter()); 
  console.log(counter());
  console.log(counter(0)); 
  console.log(counter()); 

  const counterFactory = function () {
    let count = 0; 
  
    return {
      value: function (n) {
        if (n !== undefined) { 
          count = n;
        }
        return count; 
      },
      increment: function () {
        count++;
      },
      decrement: function () {
        count--;
      }
    };
  };
  
  const counterFact = counterFactory();
  
  console.log(counterFact.value()); 
  counterFact.increment();
  counterFact.increment();
  counterFact.increment();
  console.log(counterFact.value());
  counterFact.decrement();
  counterFact.decrement();
  console.log(counterFact.value()); 
  console.log(counterFact.value(100));
  counterFact.decrement();
  console.log(counterFact.value()); 
  console.log(counterFact.value(200));
  counterFact.increment();
  console.log(counterFact.value()); 

  const myPrint = (a, b, res) => `${a}^${b}=${res}`;
  const myPow = (a, b, myPrint) => {
    const pow = (a, b) => {
      if (b === 0) {
        return 1;
      } else if (b < 0) {
        return 1 / pow(a, -b);
      } else {
        return a * pow(a, b - 1);
      }
    };
    const res = pow(a, b);
    return myPrint(a, b, res);
  }

  console.log(myPow(3, 4, myPrint));
  console.log(myPow(2, 3, myPrint));
  console.log(myPow(2, 0, myPrint));
  console.log(myPow(2, -2, myPrint));

  const myMax = (arr) => {
    return Math.max.apply(null, arr);
  }

  const list = [12, 23, 100, 34, 56, 9, 233];
  console.log(myMax(list));

  const myMul = (a, b) => a * b;

  const myDouble = (n) => myMul(2, n);
  const myTriple = (n) => myMul(3, n);

  console.log(myDouble(3));
  console.log(myDouble(4));
  console.log(myDouble(5));

  console.log(myTriple(3));
  console.log(myTriple(4));
  console.log(myTriple(5));

  const compose = (a, b) => (data) => a(b(data));
  
