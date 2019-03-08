function timer() {
   let seconds = $('#seconds');
   let minutes = $('#minutes');
   let hours = $('#hours');

   let startBtn = $('#start-timer');
   let stopBtn = $('#stop-timer');

   let ticking = false;
   let time = 0;
   let interval;

   startBtn.on('click', function() {
      if (!ticking) {
         interval = setInterval(timeUpdate, 1000);
         ticking = true;
      }
   });

   stopBtn.on('click', function() {
      clearInterval(interval);
      ticking = false;
   });

   function timeUpdate() {
      time++;
      seconds.text(('0' + Math.trunc(time % 60)).slice(-2));
      minutes.text(('0' + Math.trunc((time / 60) % 60)).slice(-2));
      hours.text(('0' + Math.trunc(time / 3600)).slice(-2));
   }

}