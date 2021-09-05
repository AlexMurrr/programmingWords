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



///////////////////////////////////

//делаем список из глаголов с переводом

const div = document.createElement('div');
div.classList.add('wrapper');
//div.style.background ='rgb(214, 240, 238)';

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



//////////////////////////////////////////

//получаем объект с массивами результатами перевода


function resultOfTranslate (arr){

    let wordsResultTranslate = {};
    let arrWordsResultTranslate = [];
    let arrResultError = [];


    for(let i=0; i<arr.length; i++){

        let a = prompt('Переведите на английский: ' + words[arr[i]].toUpperCase(), 'перевод');
        if(arr[i] === a){
            arrWordsResultTranslate[i]= arr[i] + '1';
            arrResultError[i] = a;
            alert( 'Правильный перевод' );
        }
            else if (a===null) break;

            else{
                arrWordsResultTranslate[i]= arr[i] + '0';
                arrResultError[i] = a;
                alert( `Вы ошиблись, правильный перевод: ${arr[i].toUpperCase()}`  );
            }
    }

    wordsResultTranslate.key1 = arrWordsResultTranslate;
    wordsResultTranslate.key2 = arrResultError;

    return wordsResultTranslate;
}

let resTrans = resultOfTranslate(arrWordsRnd);




let divResAll = document.createElement('div');
body.appendChild(divResAll);
divResAll.classList.add('allDivTranslate');



for (let i=0; i<resTrans.key1.length; i++){

    let divRes = document.createElement('div');
    divRes.classList = 'translate';

    if(resTrans.key1[i].substr(resTrans.key1[i].length-1) === '0'){
        divRes.textContent = 'Ошибка';
        divRes.textContent = `Вы ответили ${resTrans.key2[i]}
                                правильно ${resTrans.key1[i]}`
        divRes.style.border = '4px outset red';
    } else divRes.textContent = 'Верно';

    divResAll.appendChild(divRes);

}





















































