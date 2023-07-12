var love_btn = document.getElementsByClassName('love-button')[0]
console.log(love_btn)
var first_name = document.getElementsByClassName('first-name')[0]
var last_name = document.getElementsByClassName('last-name')[0]
var heart = document.getElementsByClassName('heart')[0]
var text_goodnight = document.getElementsByClassName('goodnight-text')[0]
var source_media = document.getElementsByClassName('source')[0]
var video = document.getElementById('myVideo')

first_name.classList.add('hidden')
last_name.classList.add('hidden')
heart.classList.add('hidden')
text_goodnight.classList.add('hidden')
source_media.classList.add('hidden')


console.log(first_name, last_name,heart)


function createHearts() {
  const numHearts = 100; // Số lượng trái tim muốn rơi xuống

  for (let i = 0; i < numHearts; i++) {
      const heart = document.createElement("span");
      heart.className = "heart-2";
      heart.style.left = Math.random() * 100 + "%";
      heart.style.animationDelay = Math.random() * 2 + "s";
      document.body.appendChild(heart);
      const wrapper = document.getElementById("wrapper");
      wrapper.parentNode.insertBefore(heart, wrapper);
      setTimeout(() => {
        
      }, 1000);
  }
}

function playVideo(){
  if(video.paused)
  {
    video.play()
    video.addEventListener('ended', replayVideo, false)
  }
  else{
    video.pause()
  }
}

function replayVideo()
{
  video.currentTime = 0
  video.play()
}

function playAudio(){
  var audio = document.getElementById('myAudio')
  audio.play()
  audio.controls = false
}

function animateBorder(){
  const overlay = document.getElementById('overlay')

  // list gradient color
  const colors = [
    'linear-gradient(to right, red, yellow)',
    'linear-gradient(to right, blue, green)',
    'linear-gradient(to right, purple, pink)'
  ]

  let currentIndex = 0

  // tạo một setInterval để thay đổi màu viền theo thời gian
  const  animationInterval = setInterval(()=>{
    // chuyển sang màu gradient tiếp theo
    currentIndex = (currentIndex + 1) % colors.length
    const currentColor = colors[currentIndex]
    overlay.style.borderImage = currentColor
  })
}

love_btn.addEventListener('click', function(){

    createHearts()
    playAudio()
    love_btn.classList.add('hidden')

    setTimeout(function(){
      first_name.classList.remove('hidden')
      last_name.classList.remove('hidden')
      heart.classList.remove('hidden')
      first_name.style.animation = 'fade 2s linear'
      last_name.style.animation = 'fade 2s linear'
      heart.style.animation = 'fade 2s linear'
      setTimeout(function(){
        first_name.style.animation = 'animate 1s linear'
        first_name.style.animationIterationCount = 'infinite';
        last_name.style.animation = 'animate 1s linear'
        last_name.style.animationIterationCount = 'infinite';
        heart.style.animation = 'animate 1s linear'
        heart.style.animationIterationCount = 'infinite';
      },1000)
      
    },1000)

    setTimeout(function(){
      text_goodnight.classList.remove('hidden')
      text_goodnight.style.animation = 'fade 2s linear'
    },3000)
    setTimeout(() => {
      source_media.classList.remove('hidden')
      source_media.style.animation = 'fade 2s linear'
      playVideo()
    }, 4000);

});