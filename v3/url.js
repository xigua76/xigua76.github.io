function getRandomArrayElements(arr, count) {
    var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
}
var items = [
'vod.xg0077.com:9999',
'vod.xg0099.com:9999',
'vod.xg1155.com:9999',
'vod.xg1177.com:9999',
'vod.xg2233.com:9999',
'vod.xg2299.com:9999',
'www.xg0077.com','www.xg0099.com','www.xg1155.com','www.xg1177.com','www.xg2233.com','www.xg2299.com'
];
var item=getRandomArrayElements(items, 3);
var djgk = ['点击观看'];
document.write('<a href="http://' + item[0] + '" target="_blank" class="list-group-item"><p class="list-group-item-text">' + item[0] + '<em class="pull-right">' + djgk[0] +'</em></p></a>');
document.write('<a href="http://' + item[1] + '" target="_blank" class="list-group-item"><p class="list-group-item-text">' + item[1] + '<em class="pull-right">' + djgk[0] +'</em></p></a>');
document.write('<a href="http://' + item[2] + '" target="_blank" class="list-group-item"><p class="list-group-item-text">' + item[2] + '<em class="pull-right">' + djgk[0] +'</em></p></a>');


