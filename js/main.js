'use strict';

var PHOTO_GENERATE= 25;//число генерируемых объектов
var PHOTO_DESCRIPTION = '';//описание фотографии
var MIN_LIKES= 15;//минимальное количество лайков
var MAX_LIKES = 200;//максимальное количество лайков
var COMMENTS_ARRAY = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];//массив комментариев
var COMMENTS_COUNT = 2;//делаем комментарий из двух
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

var getRandomComment = function (commentsArray, commentsCount) {
  var сomments = '';

  for (var i = 0; i <= getRandomNumber(вот тут как?); i++) {//как правильно вычислить комменты
    сomments = сomments + commentsArray[getRandomNumber(и тут)];
  }
  return сomments;
};

//создаем объект с нужными полями
var getPhotoObject = function (minLikes, maxLikes, commentsArray, commentsCount, photoGenerate) {
  var photoSetup = [];

  for (var i = 0; i < photoGenerate; i++) {
    var tempObject = {};
    tempObject.url = 'photos/' + (i + 1) + '.jpg';
    //tempObject.description = 'PHOTO_DESCRIPTION'; как прописать описание?
    tempObject.likes = getRandomNumber(minLikes, maxLikes);
    tempObject.comments = getRandomComment(commentsArray, commentsCount);
    tempObject = {};
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
