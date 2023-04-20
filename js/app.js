/*Chuyển động danh sách bài hát*/
let pop_song_left = document.getElementById("popular_song_left");
let pop_song_right = document.getElementById("popular_song_right");
let popular_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  popular_song.scrollLeft += 330;
});

pop_song_left.addEventListener("click", () => {
  popular_song.scrollLeft -= 330;
});

/*Chuyển động danh sách nghệ sĩ*/
let pop_artists_left = document.getElementById("popular_artists_left");
let pop_artists_right = document.getElementById("popular_artists_right");
let item = document.getElementsByClassName("item")[0];
pop_artists_right.addEventListener("click", () => {
  item.scrollLeft += 330;
});
pop_artists_left.addEventListener("click", () => {
  item.scrollLeft -= 330;
});

/*===========================================================================*/

/*Bài hát mặc định */
const music = new Audio("audio/1.mp3");

/*Danh sách bài hát*/
const songs = [
  {
    id: 1,
    songName: `
    Cân cả thế giới 
    <br />
    <div class="subtitle">Dương Hoàng Yến</div>
    `,
    poster: "img/1.jpg",
  },
  {
    id: 2,
    songName: `
    Chấp Niệm
    <br />
    <div class="subtitle">Tăng Phúc</div>
    `,
    poster: "img/2.jpg",
  },
  {
    id: 3,
    songName: `
   Sóng cả không ngã tay chèo
    <br />
    <div class="subtitle">TIA,CM1X</div>
    `,
    poster: "img/3.jpg",
  },
  {
    id: 4,
    songName: `
   Say như người điên
    <br />
    <div class="subtitle">UMIE,Droppy,Hổ</div>
    `,
    poster: "img/4.jpg",
  },
  {
    id: 5,
    songName: `
   Bạn ơi
    <br />
    <div class="subtitle">Myra Trần</div>
    `,
    poster: "img/5.jpg",
  },
  {
    id: 6,
    songName: `
   Một mình vẫn vui
    <br />
    <div class="Lê Ngọc Châu Anh</div>
    `,
    poster: "img/6.jpg",
  },
  {
    id: 7,
    songName: `
  Trách duyên trách phận
    <br />
    <div class="subtitle">Đỗ Thành Duy</div>
    `,
    poster: "img/7.jpg",
  },
  {
    id: 8,
    songName: `
  Thật ra em chẳng thương anh vậy đâu
    <br />
    <div class="subtitle">Đăng Tuấn Vũ</div>
    `,
    poster: "img/8.jpg",
  },
  {
    id: 9,
    songName: `
  Tháng năm ấy đâu ngờ
    <br />
    <div class="subtitle">Tú Na,Tiểu Nhi</div>
    `,
    poster: "img/9.jpg",
  },
  {
    id: 10,
    songName: `
  Xin người chớ đừng
    <br />
    <div class="subtitle">Xesi</div>
    `,
    poster: "img/10.jpg",
  },
  {
    id: 11,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/11.jpg",
  },
  {
    id: 12,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/12.jpg",
  },
  {
    id: 13,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/13.jpg",
  },
  {
    id: 14,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/14.jpg",
  },
  {
    id: 15,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/15.jpg",
  },
  {
    id: 16,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/16.jpg",
  },
  {
    id: 17,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/17.jpg",
  },
  {
    id: 18,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/18.jpg",
  },
  {
    id: 19,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/19.jpg",
  },
  {
    id: 20,
    songName: `
 Thà Là
    <br />
    <div class="subtitle">Khải Đăng</div>
    `,
    poster: "img/20.jpg",
  },
];

/*Sử lí hình ảnh và tên của bài hát*/
Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});

/*Danh sách tìm kiếm*/
let search_result = document.querySelector(".search_result");
songs.forEach((element) => {
  const { id, songName, poster } = element;
  let card = document.createElement("a");
  card.classList.add("card");
  card.href = "#" + id;
  card.innerHTML = `
    <img src = "${poster}" alt=""/>
    <div class="content">
      ${songName}
    </div>
  `;
  search_result.appendChild(card);
});

/*Tìm kiếm theo tên bài hát*/
let input = document.getElementsByTagName("input")[0];
input.addEventListener("keyup", () => {
  let input_value = input.value.toUpperCase();
  let items = search_result.getElementsByTagName("a");
  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName("content");
    let text_value = as[0].textContent || as[0].innerHTML;
    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
    } else {
      items[index].style.display = "none";
    }
    if (input.value == 0) {
      search_result.style.display = "none";
    } else {
      search_result.style.display = "";
    }
  }
});

/*Sử lí nút phát nhạc và hiệu ứng âm thanh*/
let masterPlay = document.getElementById("masterPlay");
let playListPlay = document.getElementsByClassName("playListPlay");
let wave = document.getElementById("wave");
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active1");
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
  } else {
    music.pause();
    wave.classList.remove("active1");
    masterPlay.classList.remove("bi-pause-fill");
    masterPlay.classList.add("bi-play-fill");
  }
});

/*Sử lí nút phát nhạc*/
const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.remove("bi-pause-circle-fill");
    el.classList.add("bi-play-circle-fill");
  });
};
/*Sử lí background*/
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(105,105,105,.0)";
  });
};

/*Sử lí danh sách nhạc và nhạc phổ biến*/
let index = 0;
index = Array.from(document.getElementsByClassName("songItem")).length;
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `audio/${index}.mp3`;
    music.play();
    masterPlay.classList.add("bi-pause-fill");
    masterPlay.classList.remove("bi-play-fill");
    /*Tải nhạc*/
    download_music.href = `audio/${index}.mp3`;
    let songTitle = songs.filter((els) => {
      return els.id == index;
    });
    songTitle.forEach((elss) => {
      let { songName, poster } = elss;
      title.innerHTML = songName;
      poster_master_play.src = poster;
      download_music.setAttribute("download", songName);
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,105,.1)";
    makeAllPlay();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
  });
});

/*Thời gian của bài hát*/
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let bar2 = document.getElementById("bar2");
let seek = document.getElementById("seek");
let dot = document.getElementsByClassName("dot")[0];
music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  let min_1 = Math.floor(music_dur / 60);
  let sec_1 = Math.floor(music_dur % 60);
  if (sec_1 < 10) {
    sec_1 = `0${sec_1}`;
  }
  currentEnd.innerText = `${min_1}:${sec_1}`;
  let min_2 = Math.floor(music_curr / 60);
  let sec_2 = Math.floor(music_curr % 60);
  if (sec_2 < 10) {
    sec_2 = `0${sec_2}`;
  }
  currentStart.innerText = `${min_2}:${sec_2}`;
  let ProgressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = ProgressBar;
  console.log(seek.value);
  let seekBar = seek.value;
  bar2.style.width = `${seekBar}%`;
  dot.style.left = `${seekBar}%`;
});
seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});
/*Sử lí âm thanh*/
let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");
vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.add("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  } else if (vol.value < 50) {
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-up-fill");
  } else if (vol.value > 50) {
    vol_icon.classList.remove("bi-volume-mute-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-up-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol_a / 100;
});
/*Sử lí bài hát tiếp theo và bài hát trước đó*/
let back = document.getElementById("back");
let next = document.getElementById("next");
back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,105,.1)";
  }
  music.src = `audio/${index}.mp3`;
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  music.play();
  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,105,.1)";
    makeAllPlay();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
  });
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,105,.1)";
  }
  music.src = `audio/${index}.mp3`;
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  music.play();
  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(105,105,105,.1)";
    makeAllPlay();
    el.target.classList.add("bi-pause-circle-fill");
    el.target.classList.remove("bi-play-circle-fill");
    wave.classList.add("active1");
  });
});
/*Phát mặc đinh,ngẫu nhiên*/
let shuffle = document.getElementsByClassName("shuffle")[0];
shuffle.addEventListener("click", () => {
  let a = shuffle.innerHTML;
  switch (a) {
    case "next":
      shuffle.classList.add("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "repeat";

      break;
    case "repeat":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.remove("bi-music-note-beamed");
      shuffle.classList.add("bi-shuffle");
      shuffle.innerHTML = "ramDom";
      break;
    case "ramDom":
      shuffle.classList.remove("bi-arrow-repeat");
      shuffle.classList.add("bi-music-note-beamed");
      shuffle.classList.remove("bi-shuffle");
      shuffle.innerHTML = "next";
      break;
    default:
      break;
  }
});
/*Sử lí khi hết bài hát*/
/*Bài tiếp theo*/
const next_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index++;
  }
  music.src = `audio/${index}.mp3`;
  music.play();
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  /*Tải nhạc*/
  download_music.href = `audio/${index}.mp3`;
  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105,105,105,.1)";
  makeAllPlay();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
  wave.classList.add("active1");
};
/*Lặp bài hát*/
const repeat_music = () => {
  index;
  music.src = `audio/${index}.mp3`;
  music.play();
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  /*Tải nhạc*/
  download_music.href = `audio/${index}.mp3`;
  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105,105,105,.1)";
  makeAllPlay();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
  wave.classList.add("active1");
};
/*Phát ngẫu nhiên bài hát */
const ramDom_music = () => {
  if (index == songs.length) {
    index = 1;
  } else {
    index = Math.floor(Math.random() * songs.length + 1);
  }
  music.src = `audio/${index}.mp3`;
  music.play();
  masterPlay.classList.add("bi-pause-fill");
  masterPlay.classList.remove("bi-play-fill");
  /*Tải nhạc*/
  download_music.href = `audio/${index}.mp3`;
  let songTitle = songs.filter((els) => {
    return els.id == index;
  });
  songTitle.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
    poster_master_play.src = poster;
    download_music.setAttribute("download", songName);
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(105,105,105,.1)";
  makeAllPlay();
  el.target.classList.add("bi-pause-circle-fill");
  el.target.classList.remove("bi-play-circle-fill");
  wave.classList.add("active1");
};

/*Sử lí lựa chọn của người nghe */
music.addEventListener("ended", () => {
  let b = shuffle.innerHTML;
  switch (b) {
    case "next":
      next_music();
      break;
    case "repeat":
      repeat_music();
      break;
    case "ramDom":
      ramDom_music();
      break;
    default:
      break;
  }
});
