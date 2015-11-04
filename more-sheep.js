var anotherSheepPlease;

$(function () {
  'use strict';
  anotherSheepPlease = function () {
    var elem = '<img src="sheep.gif" alt="sheep">';
    $('.container').append(elem);
    console.log("Here you go");
    setTimeout(anotherSheepPlease, 1000);
  };
  anotherSheepPlease();
});