

let numbers = [2, 4, 9, 10, 45, 67, 8, 90];

let juftSonlar = [];
let toqSonlar = [];


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      juftSonlar.push(numbers[i]);
    } else {
      toqSonlar.push(numbers[i],);
    }
  }
  console.log(numbers,'Boshlanishidagi sonlar');
  console.log(juftSonlar, 'Juft sonlar');
  console.log(toqSonlar,'toq sonlar');