angular.module('app').controller('pianoCtrl', function($scope){



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

        var playnotewhite = function(note, audio){
            $(note).css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $(note).css({
                backgroundColor: 'transparent'
              });
            },500)
        }


        var playnoteblack = function(note, audio){
            $(note).css({
              backgroundColor: 'red'
            });
            audioElement.play();
            setTimeout(function(){
              $(note).css({
                backgroundColor: 'black'
              });
            },500)
        }



////////////////////////////////////////////////////////////////////
        $('.white-keys-container').on("click", function(event){
           var key = event.target.id;
           var audio = audioElement.setAttribute('src', 'notes/keys/'+key+'.wav');
           playnotewhite("#"+key,audio);
        });

        $('.black-keys-container').on("click", function(event){
          // console.log(event);
           var key = event.target.id;
           var audio = audioElement.setAttribute('src', 'notes/keys/'+key+'.wav');
           playnoteblack("#"+key,audio);
        });


        // $('#c1').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/C3.wav');
        //   playnotewhite("#c1", audio);
        // });
        //
        // $('#csharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Db3.wav');
        //   playnoteblack("#csharp", audio);
        // });
        //
        // $('#d').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/D3.wav');
        //   playnotewhite("#d", audio);
        // });
        //
        // $('#dsharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Eb3.wav');
        //   playnoteblack("#dsharp", audio);
        // });
        //
        // $('#e').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/E3.wav');
        //   playnotewhite("#e", audio);
        // });
        //
        // $('#f').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/F3.wav');
        //   playnotewhite("#f", audio);
        // });
        //
        // $('#fsharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Gb3.wav');
        //   playnoteblack("#fsharp", audio);
        // });
        //
        // $('#g').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/G3.wav');
        //   playnotewhite("#g", audio);
        // });
        //
        // $('#gsharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Ab3.wav');
        //   playnoteblack("#gsharp", audio);
        // });
        //
        // $('#a').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/A3.wav');
        //   playnotewhite("#a", audio);
        // });
        //
        // $('#asharp').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Bb3.wav');
        //   playnoteblack("#asharp", audio);
        // });
        //
        // $('#b').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/B3.wav');
        //   playnotewhite("#b", audio);
        // });
        //
        // $('#c2').on("click", function() {
        //   var audio = audioElement.setAttribute('src', 'notes/keys/C4.wav');
        //   playnotewhite("#c2", audio);
        // });



        $(document).on("keydown", function(e) {


          var key = e.which;


          if(key == "90"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/c1.wav');
          var audio = new Audio('notes/keys/c1.wav').play()

          playnotewhite("#c1", audio);
          }
          if(key == "83"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/csharp.wav');
          var audio = new Audio('notes/keys/csharp.wav').play()

          playnoteblack("#csharp", audio);
          }
          if(key == "88"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/d.wav');
          var audio = new Audio('notes/keys/d.wav').play()
          playnotewhite("#d", audio);
          }
          if(key == "68"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/dsharp.wav');
          var audio = new Audio('notes/keys/dsharp.wav').play()
          playnoteblack("#dsharp", audio);
          }
          if(key == "67"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/e.wav');
          var audio = new Audio('notes/keys/e.wav').play()
          playnotewhite("#e", audio);
          }
          if(key == "86"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/f.wav');
          var audio = new Audio('notes/keys/f.wav').play()
          playnotewhite("#f", audio);
          }
          if(key == "71"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/fsharp.wav');
          var audio = new Audio('notes/keys/fsharp.wav').play()
          playnoteblack("#fsharp", audio);
          }
          if(key == "66"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/g.wav');
          var audio = new Audio('notes/keys/g.wav').play()
          playnotewhite("#g", audio);
          }
          if(key == "72"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/gsharp.wav');
          var audio = new Audio('notes/keys/gsharp.wav').play()
          playnoteblack("#gsharp", audio);
          }
          if(key == "78"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/a.wav');
          var audio = new Audio('notes/keys/a.wav').play()
          playnotewhite("#a", audio);
          }
          if(key == "74"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/asharp.wav');
          var audio = new Audio('notes/keys/asharp.wav').play()
          playnoteblack("#asharp", audio);
          }
          if(key == "77"){
          // var audio = audioElement.setAttribute('src', 'notes/keys/b.wav');
          var audio = new Audio('notes/keys/b.wav').play()
          playnotewhite("#b", audio);
          }




          if(key == "81"){
          var audio = new Audio('notes/keys/c2.wav').play()
          playnotewhite("#c2", audio);
          }

          if(key == "50"){
          var audio = new Audio('notes/keys/csharp2.wav').play()
          playnoteblack("#csharp2", audio);
          }

          if(key == "87"){
          var audio = new Audio('notes/keys/d2.wav').play()
          playnotewhite("#d2", audio);
          }

          if(key == "51"){
          var audio = new Audio('notes/keys/dsharp2.wav').play()
          playnoteblack("#dsharp2", audio);
          }

          if(key == "69"){
          var audio = new Audio('notes/keys/e2.wav').play()
          playnotewhite("#e2", audio);
          }

          if(key == "82"){
          var audio = new Audio('notes/keys/f2.wav').play()
          playnotewhite("#f2", audio);
          }

          if(key == "53"){
          var audio = new Audio('notes/keys/fsharp2.wav').play()
          playnoteblack("#fsharp2", audio);
          }

          if(key == "84"){
          var audio = new Audio('notes/keys/g2.wav').play()
          playnotewhite("#g2", audio);
          }

          if(key == "54"){
          var audio = new Audio('notes/keys/gsharp2.wav').play()
          playnoteblack("#gsharp2", audio);
          }

          if(key == "89"){
          var audio = new Audio('notes/keys/a2.wav').play()
          playnotewhite("#a2", audio);
          }

          if(key == "55"){
          var audio = new Audio('notes/keys/asharp2.wav').play()
          playnoteblack("#asharp2", audio);
          }

          if(key == "85"){
          var audio = new Audio('notes/keys/b2.wav').play()
          playnotewhite("#b2", audio);
          }

          if(key == "73"){
          var audio = new Audio('notes/keys/c3.wav').play()
          playnotewhite("#c3", audio);
          }

        });






        // $(document).on("keydown", function(e) {
        //
        //   var key = e.which;
        //   if(key == "87"){
        //   var audio = audioElement.setAttribute('src', 'notes/keys/Db4.mp3');
        //   playnoteblack("#csharp", audio);
        //   }
        // });

        //
        // $('#csharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Db4.mp3');
        //     $('#csharp').css({
        //       backgroundColor: 'pink'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#csharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#d').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/D4.mp3');
        //     $('#d').css({
        //       backgroundColor: 'orange'
        //     });
        //     audioElement.play();
        //
        //     setTimeout(function(){
        //       $('#d').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#dsharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Eb4.mp3');
        //     $('#dsharp').css({
        //       backgroundColor: '#f9c775'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#dsharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#e').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/E4.mp3');
        //     $('#e').css({
        //       backgroundColor: 'yellow'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#e').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#f').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/F4.mp3');
        //     $('#f').css({
        //       backgroundColor: 'green'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#f').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#fsharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Gb4.mp3');
        //     $('#fsharp').css({
        //       backgroundColor: '#84ff84'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#fsharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#g').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/G4.mp3');
        //     $('#g').css({
        //       backgroundColor: 'blue'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#g').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#gsharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Ab4.mp3');
        //     $('#gsharp').css({
        //       backgroundColor: '#84dcff'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#gsharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#a').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/A4.mp3');
        //     $('#a').css({
        //       backgroundColor: '#0200a8'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#a').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#b').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/B4.mp3');
        //     $('#b').css({
        //       backgroundColor: 'purple'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#b').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        //
        // $('#asharp').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/Bb4.mp3');
        //     $('#asharp').css({
        //       backgroundColor: '#c584ff'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#asharp').css({
        //         backgroundColor: 'black'
        //       });
        //     },1000)
        // });
        //
        // $('#c2').on("click", function() {
        //   audioElement.setAttribute('src', 'notes/keys/C5.mp3');
        //     $('#c2').css({
        //       backgroundColor: 'red'
        //     });
        //     audioElement.play();
        //     setTimeout(function(){
        //       $('#c2').css({
        //         backgroundColor: 'transparent'
        //       });
        //     },1000)
        // });
        // // $('.pause').click(function() {
        // //     audioElement.pause();
        // // });
        //




})

})
