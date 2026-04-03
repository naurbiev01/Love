
const data = [
  {
    img: "photos/photo_1.jpg",
    text: "Влюбиться в тебя с первого взгяда ❤️"},
  {
    img: "photos/photo_2.jpg",
     text: "❤️"
  
  },
  {
    img: "photos/photo_3.jpg",
    text: "Впервые в жизни быть жидким😂"
  },
  {
    img: "photos/photo_4.jpg",
    text: "Делать тебе приятное😉"
  },
  {
    img: "photos/photo_5.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_10.jpg",
    text: "Думать что у тебя губы сделанные😂"
  },
  {
    img: "photos/photo_11.jpg",
    text: "Они прекрасны✨"
  },
  {
    img: "photos/photo_17.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_14.jpg",
    text: "Видеть от тебя спонтанные фотки😍"
  },
  {
    img: "photos/photo_15.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_39.jpg",
    text: "Кидать насвай за тебя😂"
  },
  {
    img: "photos/photo_40.jpg",
     text: "😂"
  },
  {
    img: "photos/photo_41.jpg",
     text: "🤣"
  },
  {
    img: "photos/photo_42.jpg",
     text: "Я больше не буду"
  },
  {
    img: "photos/photo_43.jpg",
    text: "Любить детей❤️"
  },
  {
    img: "photos/photo_44.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo+25.jpg",
    text: "Любимые фотки"
  },
  {
    img: "photos/photo+26.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_24.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_62.jpg",
     text: "❤️"
  },
  {
    img: "photos/63.jpg",
     text: "❤️"
  },
  {
    img: "photos/64.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo+37.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_38.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_18.jpg",
    text: "УТОНУТЬ В ТВОИХ ГЛАЗАХ..."
  },
  {
    img: "photos/photo_19.jpg",
    text: "Выеживаться тобой перед друзьями😂" },
    {
    img: "photos/499.jpg",
    text: "Ехать с тобой в маршрутке"
  },{
    img: "photos/500.jpg",
     text: "❤️"
  },{
    img: "photos/501.jpg",
     text: "❤️"
  },{
    img: "photos/502.jpg",
     text: "❤️"
  },{
    img: "photos/photo_54.jpg",
    text: "Бояться тебя разбудить🤫"
  },{
    img: "photos/photo_55.jpg",
     text: "❤️"
  },{
    img: "photos/photo_32.jpg",
    text: "Быть рядом♥️"
  },{
    img: "photos/photo_45.jpg",
     text: "❤️"
  },{
    img: "photos/photo_46.jpg",
     text: "❤️"
  },{
    img: "photos/photo_47.jpg",
     text: "❤️"
  },{
    img: "photos/photo_48.jpg",
     text: "❤️"
  },{
    img: "photos/photo_56.jpg",
    text: "Издеваться над тобой😂"
  },{
    img: "photos/photo_57.jpg",
     text: "❤️"
  },{
    img: "photos/photo_58.jpg",
     text: "❤️"
  },{
    img: "photos/photo_59.jpg",
     text: "❤️"
  },{
    img: "photos/photo_60.jpg",
     text: "❤️"
  },{
    img: "photos/photo_61.jpg",
     text: "❤️"
  },{
    img: "photos/65.jpg",
    text: "Угорать с твоих возмущений😂"
  },{
    img: "photos/photo_12.jpg",
    text: "Делать на тебя стикеры"
  },{
    img: "photos/photo_13.jpg",
    text: "Глаза чико, самые прекрасные глаза"
  },
  {
    img: "photos/photo_20.jpg",
    text: "Восхищаться твоей красотой"
  },{
    img: "photos/photo_21.jpg",
     text: "❤️"
  },{
    img: "photos/photo_23.jpg",
     text: "❤️"
  },
  {
    img: "photos/photo_22.jpg",
    text: "Показывать тебе фак😂🖕"
  },{
    img: "photos/67.jpg",
    text: "ДА, я люблю его тебе показывать!😂"
  },{
    img: "photos/68.jpg",
     text: "❤️"
  },{
    img: "photos/photo_27.jpg",
    text: "Видеть, как ты счастлива😌"
  },{
    img: "photos/photo_28.jpg",
     text: "❤️"
  },{
    img: "photos/photo_29.jpg",
     text: "❤️"
  },{
    img: "photos/66.jpg",
     text: "❤️"
  },{
    img: "photos/69.jpg",
    text: "Стоять рядом и гордиться тем, что ты - МОЯ♥️"
  },{
    img: "photos/70.jpg",
    text: "И самое главное - ВЕРИТЬ, что все получится♥️"
  }
];

let index = 0;
let timer;
const duration =4000;

function startExperience() {
  document.getElementById("welcome").style.display = "none";
  document.getElementById("app").classList.remove("hidden");

  document.getElementById("music").play();

  showSlide();
  startAuto();
}

function showSlide() {
  const photo = document.getElementById("photo");
  const text = document.getElementById("text");

  // сначала скрываем текст
  text.style.display = "none";

  // устанавливаем картинку
  photo.src = data[index].img;

  // ждём, пока картинка загрузится
  photo.onload = () => {
    if (data[index].text) {
      text.innerText = "Love is… " + data[index].text;
      text.style.display = "block";
    } else {
      text.innerText = "";
      text.style.display = "none";
    }
  };

  updateProgress();
}

function next() {
  index = (index + 1) % data.length;
  showSlide();
  resetAuto();
}

function prev() {
  index = (index - 1 + data.length) % data.length;
  showSlide();
  resetAuto();
}

function startAuto() {
  timer = setInterval(next, duration);
}

function resetAuto() {
  clearInterval(timer);
  startAuto();
}

function updateProgress() {
  const progress = document.getElementById("progressBar");
  progress.style.width = ((index + 1) / data.length) * 100 + "%";
}

/* SWIPE */
let startX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) next();
  if (endX - startX > 50) prev();
});
