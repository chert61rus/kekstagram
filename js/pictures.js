'use strict';

var comments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

var getRandomNumber = function (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

var getUserPhotos = function (number, comment, i) {
  return {url: 'photos/' + i + '.jpg', likes: number, comments: comment};
};
var commentsLenght = comments.length;
for (var i = 0; i < commentsLenght; i++) {
  var randomNumber = getRandomNumber(15, 200);
  var userComment = comments[getRandomNumber(0, 7)];
  console.log(getUserPhotos(randomNumber, userComment, i));
}
