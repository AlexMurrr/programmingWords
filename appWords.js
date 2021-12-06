const words = {
  referense: 'ссылка, справка',
  sample: 'образец, пример, проба',
  separate: 'разделять, разъединять',
  supply: 'поставка, снабжение, питание',
  hoisting: 'всплытие, поднятие',
  update: 'обновление, модификация, новая версия',
  resolve: 'разрешить, решить',
  reject: 'отклонять, отвергать',
  consumer: 'потребитель, клиент',
  invoke: 'вызывать, применять',
  handler: 'обработчик',
  fluent: 'беглый, текучий, гладкий',
  template: 'шаблон',
  contain: 'содержать, включать в себя',
  bottom: 'дно, нижняя часть',
  conventional: 'стандартный, общепринятый, обычный',
};

function arrChoiceElRnd(obj) {
// получаем массив из 5 случайных и уникальных слов

  const arrWordsKeys = Object.keys(obj);
  let arr = [];
  const setWords = new Set();
  for (let i = 0; i < arrWordsKeys.length; i++) {
    arr[i] = arrWordsKeys[(Math.floor(Math.random() * (arrWordsKeys.length)))];
    setWords.add(arr[i]);
    arr = Array.from(setWords);
    if (arr.length >= 5) break;
  }
  return arr;
}

const arrWordsRnd = arrChoiceElRnd(words);

// получаем массив слов с переводом
const wordsWithTransfer = arrWordsRnd.map((item) => `${item} - ${words[item]} `);

// делаем список из глаголов с переводом
const div = document.createElement('div');
div.classList.add('wrapper');

const { body } = document;
body.appendChild(div);
body.style.background = 'rgb(175, 201, 204';

const ulWodsWithTrans = document.createElement('ul');
div.appendChild(ulWodsWithTrans);

function createUlFromArr(arr) {
  arr.forEach((item) => {
    const liElement = document.createElement('li');
    liElement.classList.add('liWord');
    liElement.textContent = item;
    ulWodsWithTrans.appendChild(liElement);
  });
}

createUlFromArr(wordsWithTransfer);

const divResAll = document.createElement('div');
body.appendChild(divResAll);
divResAll.classList.add('allDivTranslate');

const btnStart = document.createElement('button');
btnStart.innerHTML = 'НАЧАТЬ';
btnStart.classList = 'btnStart';
btnStart.addEventListener('click', () => startTranslate(arrWordsRnd));
body.appendChild(btnStart);

const btnShowResult = document.createElement('button');
btnShowResult.innerHTML = 'ПОКАЗАТЬ РЕЗУЛЬТАТ';
btnShowResult.classList = 'btnShow';
btnShowResult.addEventListener('click', showResultTranslate);

const btnStartAgain1 = document.createElement('button');
btnStartAgain1.innerHTML = 'НАЧАТЬ ЗАНОВО';
btnStartAgain1.classList = 'btnShow';
btnStartAgain1.addEventListener('click', () => location.reload());

const btnStartAgain = document.createElement('button');
btnStartAgain.innerHTML = 'ЕЩЕ РАЗ';
btnStart.classList = 'btnStart';
btnStartAgain.addEventListener('click', () => location.reload());

const divContainButton = document.createElement('div');
divContainButton.classList = 'divContainButton';
divContainButton.appendChild(btnShowResult);
divContainButton.appendChild(btnStartAgain1);

// проверяем перевод и получаем объект с массивами результатами перевода

const wordsResultTranslate = {};

function startTranslate(arr) {
  const arrResultTranslate = [];
  const arrWordsInput = [];
  div.remove();
  btnStart.remove();

  for (let i = 0; i < arr.length; i++) {
    const a = prompt(`Переведите на английский: ${words[arr[i]].toUpperCase()}`, 'перевод');
    if (arr[i] === a) {
      arrResultTranslate[i] = true;
      arrWordsInput[i] = a;
      alert('Правильный перевод');
    } else if (a === null) {
      break;
    } else {
      arrResultTranslate[i] = false;
      arrWordsInput[i] = a;
      alert(`Вы ошиблись, правильный перевод: ${arr[i].toUpperCase()}`);
    }
  }
  wordsResultTranslate.key1 = arrResultTranslate;
  wordsResultTranslate.key2 = arrWordsInput;
  body.appendChild(divContainButton);
  // body.appendChild(divContainButton);
}

function showResultTranslate() {
  btnShowResult.remove();
  btnStartAgain1.remove();
  body.appendChild(btnStartAgain);

  for (let i = 0; i < wordsResultTranslate.key1.length; i++) {
    const divRes = document.createElement('div');
    divRes.classList = 'translate';

    if (wordsResultTranslate.key1[i] === false) {
      divRes.innerHTML = ` Вы ответили - ${wordsResultTranslate.key2[i]} <br>
                             правильно - ${arrWordsRnd[i]}`;
      divRes.style.border = '2px outset red';
    } else {
      divRes.textContent = ' Верно';
      divRes.style.border = '2px outset green';
    }

    divResAll.appendChild(divRes);
  }
}
