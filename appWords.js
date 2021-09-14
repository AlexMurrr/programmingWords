let words = {
    referense: 'ссылка, справка',
    sample: 'образец, пример, проба',
    separate: 'разделять, разъединять',
    supply: 'поставка, снабжение, питание',
    hoisting: 'всплытие, поднятие',
    update: 'обновление, модификация, новая версия',
    resolve: 'разрешить, решить',
    reject: 'отклонять, отвергать',
    consumer:'потребитель, клиент',
    invoke: 'вызывать, применять',
    handler: 'обработчик',
    fluent: 'беглый, текучий, гладкий',
    template: 'шаблон',
}


function arrChoiceElRnd(obj){
//получаем массив из 5 случайных и уникальных слов

    let arrWordsKeys = Object.keys(obj);
    let arr = [];
    let setWords = new Set();
        for (let i = 0; i<arrWordsKeys.length; i++){
            arr[i] = arrWordsKeys[(Math.floor(Math.random() *(arrWordsKeys.length)))];
                setWords.add(arr[i]);
                arr =Array.from(setWords);
                    if(arr.length>=5)
                        break;
        }
    return arr;
}

let arrWordsRnd = arrChoiceElRnd(words);

//получаем массив слов с переводом
let wordsWithTransfer = arrWordsRnd.map(item =>item + ' - ' + words[item] + ' ');

//делаем список из глаголов с переводом
const div = document.createElement('div');
div.classList.add('wrapper');

const body = document.body;
body.appendChild(div);
body.style.background = 'rgb(175, 201, 204';

const ulWodsWithTrans = document.createElement('ul');
div.appendChild(ulWodsWithTrans);

function createUlFromArr (arr){

    arr.forEach(item => {
        let liElement = document.createElement('li');
        liElement.classList.add('liWord');
        liElement.textContent = item;
        ulWodsWithTrans.appendChild(liElement);
    });
}

createUlFromArr(wordsWithTransfer);

//проверяем перевод и получаем объект с массивами результатами перевода
let wordsResultTranslate = {};

function startTranslate (arr){

    let arrResultTranslate = [];
    let arrWordsInput = [];
    div.remove();
    btnStart.remove();

    for(let i=0; i<arr.length; i++){
        let a = prompt('Переведите на английский: ' + words[arr[i]].toUpperCase(), 'перевод');
        if(arr[i] === a){
            arrResultTranslate[i]= true;
            arrWordsInput[i] = a;
            alert( 'Правильный перевод' );
            }else if (a===null){
                break;}
            else{
                arrResultTranslate[i]= false;
                arrWordsInput[i] = a;
                alert( `Вы ошиблись, правильный перевод: ${arr[i].toUpperCase()}`  );
            }
    }
    wordsResultTranslate.key1 = arrResultTranslate;
    wordsResultTranslate.key2 = arrWordsInput;
    body.appendChild(btnShowResult);
}

let divResAll = document.createElement('div');
body.appendChild(divResAll);
divResAll.classList.add('allDivTranslate');

const btnStart = document.createElement('button');
btnStart.innerHTML = 'НАЧАТЬ';
btnStart.addEventListener('click', () => startTranslate(arrWordsRnd));
body.appendChild(btnStart);

const btnShowResult = document.createElement('button');
btnShowResult.innerHTML = 'ПОКАЗАТЬ РЕЗУЛЬТАТ';
btnShowResult.classList = 'btnShow';
btnShowResult.addEventListener('click', showResultTranslate);

const btnStartAgain = document.createElement('button');
btnStartAgain.innerHTML = 'ЕЩЕ РАЗ';
btnStartAgain.addEventListener('click', () => location.reload());


function showResultTranslate(){

    btnShowResult.remove();
    body.appendChild(btnStartAgain);

    for (let i=0; i<wordsResultTranslate.key1.length; i++){

        let divRes = document.createElement('div');
        divRes.classList = 'translate';

    if(wordsResultTranslate.key1[i] === false){

        divRes.textContent = `Вы ответили - ${wordsResultTranslate.key2[i]}
                            правильно - ${arrWordsRnd[i]}`;
        divRes.style.border = '2px outset red';
    } else{ divRes.textContent = 'Верно';
            divRes.style.border = '2px outset green';
          }

    divResAll.appendChild(divRes);
    }
}


























