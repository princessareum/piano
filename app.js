$(document).ready(function() {

  //
  // $('#c1').on('click', function(){
  // 		$('#c1').css({
  //       backgroundColor: 'yellow'
  //     })



    var audioElement = document.createElement('audio');

        // audioElement.setAttribute('autoplay', 'autoplay');
        //audioElement.load()

        $.get();

        audioElement.addEventListener("load", function() {
            audioElement.play();
        }, true);

        $('#c1').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/C4.mp3');
            $('#c1').css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $('#c1').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });

        $('#d').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/D4.mp3');
            $('#d').css({
              backgroundColor: 'orange'
            });
            audioElement.play();
            setTimeout(function(){
              $('#d').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });

        $('#e').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/E4.mp3');
            $('#e').css({
              backgroundColor: 'yellow'
            });
            audioElement.play();
            setTimeout(function(){
              $('#e').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });
        // $('.pause').click(function() {
        //     audioElement.pause();
        // });


})
