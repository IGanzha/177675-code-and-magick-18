'use srtrict';

var STAT_HEIGHT = 150;
var COLUMN_WIDTH = 40;
var HORIZONTAL_GAP = 50;
var VERTICAL_GAP = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var PADDING_LEFT = 40;
var PADDING_VERT = 20;
var CLOUD_X = 100;
var CLOUD_Y = 20;
var SHADOW_GAP = 10;
var LINES_HEIGHT = 20;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + SHADOW_GAP, CLOUD_Y + SHADOW_GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

  ctx.fillStyle = 'black';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING_LEFT, CLOUD_Y + PADDING_VERT);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING_LEFT, CLOUD_Y + PADDING_VERT + LINES_HEIGHT);

  var maxResult = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > maxResult) {
      maxResult = times[i];
    }
  }

  for (i = 0; i < names.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
    }

    var playerResult = Math.round(times[i]);
    ctx.fillRect(CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + HORIZONTAL_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING_VERT - LINES_HEIGHT - VERTICAL_GAP, COLUMN_WIDTH, (-1) * STAT_HEIGHT * times[i] / maxResult);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + HORIZONTAL_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING_VERT);
    ctx.fillText(playerResult, CLOUD_X + PADDING_LEFT + (COLUMN_WIDTH + HORIZONTAL_GAP) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING_VERT - LINES_HEIGHT - (2 * VERTICAL_GAP) - STAT_HEIGHT * times[i] / maxResult);
  }
};
