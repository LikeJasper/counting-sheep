$(function () {
  'use strict';
  var i = 1;
  var anotherSheepPlease = function () {
    var sheeptml = '<img src="img/sheep.gif" alt="sheep' + i + '" class="new">',
      sheepDimensions = [260, 179],
      $elem = $(sheeptml).appendTo('.container');

    $elem
      .width('10vw')
      .css('top', (Math.floor((i-1) / 10) * (sheepDimensions[1] / sheepDimensions[0]) * 10).toString() + 'vw')
      .css('left', (((i-1) % 10) * 10).toString() + 'vw');
    i++;
    setTimeout(anotherSheepPlease, 1000);
  };
  anotherSheepPlease();
});
