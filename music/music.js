const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mini: true,
    autoplay: true,
    order: 'random',
    preload: 'auto',
    mutex: true,
    audio: [
      {
        name: '感谢你曾来过',
        artist: '阿涵&Ayo97',
        url: 'http://www.ytmp3.cn/down/56632.mp3',
        cover: 'http://img.ytmp3.cn/image/43.jpg',
      },
      {
        name: "Something Just Like This",
        artist: 'The Chainsmokers&Coldplay',
        url: 'http://www.ytmp3.cn/down/50463.mp3',
        cover: 'http://img.ytmp3.cn/image/90.jpg',
      },
      {
        name: "你一定要幸福",
        artist: '简弘亦',
        url: 'http://www.ytmp3.cn/down/51689.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: 'The Rose',
        artist: 'Westlife',
        url: 'http://www.ytmp3.cn/down/56694.mp3',
        cover: 'http://img.ytmp3.cn/image/51.jpg',
      },
	  {
        name: 'In The Eyes',
        artist: '江映东',
        url: 'http://www.ytmp3.cn/down/53053.mp3',
        cover: 'http://img.ytmp3.cn/image/10.jpg',
      }
    ]
});