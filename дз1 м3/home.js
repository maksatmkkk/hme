//2
const text = 'My name is 457 Alex'
const no = text.match(/\D/g)
console.log(`без цифр ${no}`);

//3
const text2 = "Hello\tWorld\nTest"
const yes = text2.match (/\s/g)
console.log(yes);


//доп
function countChar(sim, naiti) {
    let count = 0;
  
    for (let i = 0; i < sim.length; i++) {
      if (sim[i] === naiti) {
        count++;
      }
    }
  
    return count;
  }
  
  const text3 = 'loremipsumdolor';
  const naitii = 'o';
  
  const result = countChar(text3, naitii);
  console.log(result);


  //1
function factorial(b){
    if(b === 0 , b === 1){
        return 1
    } else{
        return b * factorial(b - 1);
    }
}
const number = 7
const answer = factorial(number)
console.log(answer);
