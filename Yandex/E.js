/* Счастливые числа
  Число называется счастливым, если цифры расположены в неубывающем порядке и сумма значений цифр равна n.

  Нужно написать функцию, которая на вход получает два числа:

  n - сумма значений цифр
  k - количество цифр в числе от 3 до 20
  А возвращает массив с тремя значениями:

  общее количество счастливых чисел
  минимальное подходящее число приведенное к строке
  максимальное подходящее число приведенное к строке
  Если подходящих чисел нет, то нужно вернуть массив c одним элементом 0

  Примечание
  Исходный код нужно оформить следующим образом:

  module.exports = function (n, k) {  
      // ваше решение
  }
  Пример использования:

  const findAll = require('..');
  findAll(10, 3); // [8, 118, 334]
  findAll(27, 3); // [1, 999, 999]
  findAll(28, 3); // [0]
  Ограничение памяти
  64.0 Мб
  Ограничение времени
  1 с
  Ввод
  стандартный ввод или input.txt
  Вывод
  стандартный вывод или output.txt */

let findAll = (n, k) => {
  if (k < 3 || k > 20) {
    return "Разрядность должна быть в диапозоне от 3 до 20";
  }

  // Находим какая минимальная и максимальная сумма цифр может быть в заданном разряде (к) числа
  let start = k * 1;
  let end = k * 9;

  // Если заданное число не в ходит в диапозон возможных чисел выводим [0]
  if (n < start || n > end) {
    return [0];
  }

  let min = "1".repeat(k);
  let max = "9".repeat(k);

  // Выводим крайние числа из диапозона (если их ввели), которые не нуждаются в переборе такие, как например: N = 3 (111) и N = 27 (999) при К=3
  if (n === start) {
    return [1, min, min];
  }

  if (n === end) {
    return [1, max, max];
  }

  let combinations = n - k;
  min = findMin();
  max = findMax();

  return [combinations, min, max];

  function findMin() {
    let nines = Math.floor((n - k) / 9);
    let index = k - nines;
    let iteration = n - index - nines * 9;
    let maxNines = "9".repeat(nines);
    let number = "1".repeat(index).split("");
    let possition = number.length - 1;

    while (iteration--)
      number[possition] < 9 ? number[possition]++ : number[--possition]++;

    return number.join("") + maxNines;
  }

  function findMax() {
    let iteration = n % k;
    let max = Math.floor(n / k)
      .toString()
      .repeat(k)
      .split("");

    let possition = max.length - 1;

    while (iteration--) max[possition--]++;

    return max.join("");
  }

  function findCombinations() {
    return;
  }
};

let startTime = performance.now();
// for (let i = 3; i < 28; i++) {
console.log(15, findAll(15, 4));
// }
let endTime = performance.now();
console.log(
  `Время выполнения скрипта заняло: ${(endTime - startTime) / 1000} секунд.`
);
