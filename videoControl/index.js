
const vidioContainer = document.querySelector('#videoInput');
const openCarmeraBtn = document.querySelector('#show_video');
const closeVarmeraBtn = document.querySelector('#close_video');

const constraints = {
  audio: false,
  video: true
};

openCarmeraBtn.addEventListener('click', async (e) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    vidioContainer.srcObject = stream;
  } catch (err) {
    /* handle the error */
  }
});
closeVarmeraBtn.addEventListener('click', () => {
  vidioContainer.srcObject = null;
});