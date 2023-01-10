

window.addEventListener('keyup', (event)=> {
  // console.log(event);

  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  // console.log(audio);
  audio.currentTime = 0;
  audio.play();
  if(!audio) return;

  const letter = document.querySelector(`div[data-key="${event.keyCode}"]`);
  // console.log(letter);
  letter.classList.add('playing')
});
