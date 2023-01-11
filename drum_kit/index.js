const playSound = (event) => {
  // console.log(event);

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // console.log(audio);
  audio.currentTime = 0;
  audio.play();
  if(!audio) return;

  const letter = document.querySelector(`div[data-key="${event.keyCode}"]`);
  // console.log(letter);
  letter.classList.add('playing');
}

const removePlaying = (event) => {
  // console.log(event)
  if (event.propertyName !== 'transform') {
    return;
  }
  // console.log(event.currentTarget);
  event.currentTarget.classList.remove('playing');
};

window.addEventListener('keyup', playSound)

const letters = document.querySelectorAll('.list');
letters.forEach(letter => {
  letter.addEventListener('transitionend', removePlaying);
});
