$(function () {
  'use strict';
  var i = 1;
  var anotherSheepPlease = function () {
    var sheeptml = '<img src="img/sheep.gif" alt="sheep' + i + '" class="new">',
      sheepDimensions = [260, 179],
      smallWidth = 10,
      $elem = $(sheeptml).appendTo('.container');

    $elem
      .width(smallWidth.toString() + 'vw')
      .css('top', (Math.floor((i-1) / (100/smallWidth)) * (sheepDimensions[1] / sheepDimensions[0]) * smallWidth).toString() + 'vw')
      .css('left', (((i-1) % (100/smallWidth)) * smallWidth).toString() + 'vw');
    i++;
    setTimeout(anotherSheepPlease, 1000);
  };
  anotherSheepPlease();
});
