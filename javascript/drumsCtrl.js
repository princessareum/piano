angular.module('app').controller('drumsCtrl', function($scope){

  $(document).ready(function() {
    var audioElement = document.createElement('audio');
    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);


    var playDrums = function(drum, audio){
        $(drum).css({
          backgroundColor: 'yellow'
        });
        audioElement.play();
        setTimeout(function(){
          $(drum).css({
            backgroundColor: 'transparent'
          });
        },500);

      }

      $('.drumsContainer').on("click", function(event){
         var key = event.target.id;
         var audio = audioElement.setAttribute('src', 'notes/drums/'+key+'.wav');
         playDrums("#"+key,audio);
      });


      $(document).on("keydown", function(e) {
        var key = e.which;
        if(key == "77"){
        var audio = audioElement.setAttribute('src', 'notes/drums/hiHat.wav');
        playDrums("#hiHat", audio);
        }
        if(key == "188"){
        var audio = audioElement.setAttribute('src', 'notes/drums/snare.wav');
        playDrums("#snare", audio);
        }
        if(key == "190"){
        var audio = audioElement.setAttribute('src', 'notes/drums/kick.wav');
        playDrums("#kick", audio);
        }
        if(key == "191"){
        var audio = audioElement.setAttribute('src', 'notes/drums/crash.wav');
        playDrums("#crash", audio);
        }
      })

  })

})
