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

        $('#csharp').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/Db4.mp3');
            $('#csharp').css({
              backgroundColor: 'pink'
            });
            audioElement.play();
            setTimeout(function(){
              $('#csharp').css({
                backgroundColor: 'black'
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

        $('#dsharp').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/Eb4.mp3');
            $('#dsharp').css({
              backgroundColor: '#f9c775'
            });
            audioElement.play();
            setTimeout(function(){
              $('#dsharp').css({
                backgroundColor: 'black'
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

        $('#f').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/F4.mp3');
            $('#f').css({
              backgroundColor: 'green'
            });
            audioElement.play();
            setTimeout(function(){
              $('#f').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });

        $('#fsharp').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/Gb4.mp3');
            $('#fsharp').css({
              backgroundColor: '#84ff84'
            });
            audioElement.play();
            setTimeout(function(){
              $('#fsharp').css({
                backgroundColor: 'black'
              });
            },1000)
        });

        $('#g').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/G4.mp3');
            $('#g').css({
              backgroundColor: 'blue'
            });
            audioElement.play();
            setTimeout(function(){
              $('#g').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });

        $('#gsharp').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/Ab4.mp3');
            $('#gsharp').css({
              backgroundColor: '#84dcff'
            });
            audioElement.play();
            setTimeout(function(){
              $('#gsharp').css({
                backgroundColor: 'black'
              });
            },1000)
        });

        $('#a').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/A4.mp3');
            $('#a').css({
              backgroundColor: '#0200a8'
            });
            audioElement.play();
            setTimeout(function(){
              $('#a').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });

        $('#b').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/B4.mp3');
            $('#b').css({
              backgroundColor: 'purple'
            });
            audioElement.play();
            setTimeout(function(){
              $('#b').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });

        $('#asharp').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/Bb4.mp3');
            $('#asharp').css({
              backgroundColor: '#c584ff'
            });
            audioElement.play();
            setTimeout(function(){
              $('#asharp').css({
                backgroundColor: 'black'
              });
            },1000)
        });

        $('#c2').on("click", function() {
          audioElement.setAttribute('src', 'notes/keys/C5.mp3');
            $('#c2').css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $('#c2').css({
                backgroundColor: 'transparent'
              });
            },1000)
        });
        // $('.pause').click(function() {
        //     audioElement.pause();
        // });



        $('#c1').keydown(function (e) {
          if (e.keyCode == 65) {
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
          }
        })

})
