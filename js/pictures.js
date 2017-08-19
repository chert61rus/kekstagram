'use strict';

var similarPictureElement = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture-template').content;
var CLASS_HIDDEN = 'hidden';

var croppingForm = document.querySelector('.upload-overlay');

var galleryOverlay = document.querySelector('.gallery-overlay');

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

var getRandomNumberComments = function () {
  var temporaryComments = [];
  var commentsNumber = getRandomNumber(0, 50);
  for (var i = 0; i < commentsNumber; i++) {
    temporaryComments[i] = comments[getRandomNumber(0, 5)];
  }
  return temporaryComments;
};
var getUserPhotos = function (number) {
  return {
    url: 'photos/' + number + '.jpg',
    likes: getRandomNumber(15, 200),
    comments: getRandomNumberComments()
  };
};

var getArrayPictures = function () {
  var photoGallery = [];
  for (var i = 0; i <= 25; i++) {
    photoGallery[i] = getUserPhotos(i + 1);
  }
  return photoGallery;
};

var photoGallery = getArrayPictures();

var getRenderPhotos = function () {
  var photoLength = photoGallery.length;
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < photoLength; i++) {
    fragment.appendChild(getRenderPictures(photoGallery[i]));
  }
  return fragment;
};


var getRenderPictures = function (photo) {
  var photoElement = pictureTemplate.cloneNode(true);
  photoElement.querySelector('img').src = photo.url;
  photoElement.querySelector('.picture-comments').textContent = photo.comments;
  photoElement.querySelector('.picture-likes').textContent = photo.likes;
  return photoElement;
};

var showPhoto = function (number) {

  galleryOverlay.querySelector('.gallery-overlay-image').src = photoGallery[number].url;
  galleryOverlay.querySelector('.likes-count').textContent = photoGallery[number].likes;
  galleryOverlay.querySelector('.comments-count').textContent = photoGallery[number].comments.length;
};
croppingForm.classList.add(CLASS_HIDDEN);
similarPictureElement.appendChild(getRenderPhotos());
galleryOverlay.classList.remove(CLASS_HIDDEN);
showPhoto(0);
