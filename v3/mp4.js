var items = [
    '1.mp4',
    '2.mp4',
    '3.mp4',
    '4.mp4',
    '5.mp4',
    '6.mp4'
];
var item = items[Math.floor(Math.random()*items.length)];
var ua = navigator.userAgent;
if(ua.indexOf("Windows NT")>-1){//>-1 Not FOUND
    //this is pc
    document.write('<video id="v1" autoplay loop muted preload="auto" x-webkit-airplay="allow" webkit-playsinline playsinline x5-video-player-type="h5" x5-video-player-fullscreen="true"><source src="/v3/mp4/' + item + '" type="video/mp4"  /></video>');
}else{
	//this is mobile
	document.write('<style type="text/css">body{background-image: url("/v3/poster.jpg");background-repeat: no-repeat;background-position: center;background-size: cover;min-height: 100%;min-width: 100%;}</style>');
}