function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


const numbers = [1, 2, 3, 4, 5];
const sum = sumArray(numbers);
console.log(sum); 
function doubleArrayElements(numbers) {
    return numbers.map(number => number * 2);
}
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = doubleArrayElements(originalArray);
console.log(doubledArray);


class SkillsManager {
    constructor() {
      this.skills = [];
    }
    addSkill(skill) {
      if (typeof skill === 'string' && skill.trim().length >= 2) {
        const trimmedSkill = skill.trim();
        this.skills.push(trimmedSkill);
        return trimmedSkill;
      }
      return null;
    }
    getAllSkills() {
      return [...this.skills];
    }
  }
  
  
  function DateCalculator(initialDate) {
    this.date = new Date(initialDate)
  
    this.addDays = function(days) {
      this.date.setDate(this.date.getDate() + days)
    }
  
    this.subtractDays = function(days) {
      this.date.setDate(this.date.getDate() - days)
    }
  
    this.getResult = function() {
      const year = this.date.getFullYear()
      const month = String(this.date.getMonth() + 1).padStart(2, '0')
      const day = String(this.date.getDate()).padStart(2, '0')
      return `${year}-${month}-${day}`
    }
  }
  const dateCalculator = new DateCalculator('2023-01-01')
  dateCalculator.addDays(5)
  console.log(dateCalculator.getResult()) 
  dateCalculator.subtractDays(3)
  console.log(dateCalculator.getResult())