'use strict';

var PHOTO_COUNT= 25;//число генерируемых объектов
var PHOTO_DESCRIPTION = ['#fun', '#party', '#cool', '#young', '#тай', '#отдых'];

// Тут делаешь такую штуку, если у тебя есть значения которые выполняют по сути одну и ту же функцию просто одно минимальное второе максимальное объеденях их вот так
var LIKES = {
  MIN: 15,
  MAX: 200
};
// var MIN_LIKES= 15;//минимальное количество лайков
// var MAX_LIKES = 200;//максимальное количество лайков

var COMMENTS_ARRAY = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];//массив комментариев
var COMMENTS_COUNT = 2;//делаем комментарий из двух

// Тут будет так же урл на аватарку автора коментария, посмотри в проекте в папке с картинками будет типа avatar-1 и т.д. генеришь рандомом число и контантинируешь в урл
// Если не поняла о чем я сделай все остальное потом вернемся
var AVATAR_OF_AUTHORS = '';//вот тут хз...
var NAME_OF_AUTHORS = ['Андрей', 'Иван', 'Геннадий', 'Владимир', 'Илья', 'Евгений'];

//находим шаблон, который нужно отрисовать
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

//находим элемент, в который будем вставлять аналогичные данные
var pictureElement = document.querySelector('.pictures');

//создаем функцию, которая генерирует случайный номер
var getRandomNumber = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

/*создаем функцию.
тут нужно создать функцию, которая выбирает из нашего массива 2! комментария
и склеивает их в один коммент. как это сделать?*/

/*и далее создать объект, состоящий из аватарки, самого комментария и имени.*/

var getRandomComment = function () {
  var сomments = '';

  for (var i = 0; i <= COMMENTS_COUNT; i++) {//тут ставим сколько итераций нам нужно сделать, то есть сколько коментов мы хотим получить
    сomments = сomments + COMMENTS_ARRAY[getRandomNumber(0, COMMENTS_ARRAY.length)];
  }

  return сomments;
};

//создаем объект с нужными полями
var getPhotoObject = function () {
  var photoSetup = [];
  // а вот объявляем тут сверху, нах нам на каждой итерации создавать новую переменную
  var tempObject = {};

  for (var i = 0; i < PHOTO_COUNT; i++) {
    // обнуляем в начале да и все
    tempObject = {};
    tempObject.url = 'photos/' + (i + 1) + '.jpg';
    //tempObject.description = 'PHOTO_DESCRIPTION'; как прописать описание?
    tempObject.likes = getRandomNumber(minLikes, maxLikes);
    tempObject.comments = getRandomComment(); //
    // Ты то объект создала но куда ты его деваешь?
    // Нужно пушить его в массив
    photoSetup.push(tempObject);
  }
  return photoSetup;
};

var getPhotoTemplate = function (photo) {
  var photoElement = pictureTemplate.cloneNode(true);

  photoElement.querySelector('.picture__img').src = photo.url;
  photoElement.querySelector('вот тут что должно быть?').textConten = photo.description;
  photoElement.querySelector('.picture__likes').textContent = photo.likes;
  photoElement.querySelector('.picture__comments').textContent = photo.comments;

  return photoElement;
};

//и что сделать со всем этим чтобы заработало? как вывести фотографии?
