// document.addEventListener('DOMContentLoaded', function(){
    // var loadingLine = document.querySelector('#loading-line');
    // var loadingCircle = document.querySelector('#loading-circle');
    var heart = document.querySelector('.heart-path');

    var heartpath = new ProgressBar.Path(heart, {
        easing: 'easeInOut',
        duration: 1500,
    });
    // heartpath.animate(1);
    document.querySelector('.play').addEventListener('click', function(){
        heartpath.animate(1);
    });
    document.querySelector('.pause').addEventListener('click', function(){
        heartpath.stop();
    });
    document.querySelector('.stop').addEventListener('click', function(){
        heartpath.animate(0);
    });

    /* 
    var bar = new ProgressBar.Line(loadingLine, {
        easing: 'easeInOut',
        duration: 1500,
        color: '#0060b2',
    });
    bar.animate(1, function(){
        loadingLine.classList.add('hidden');
    });  // Value from 0.0 to 1.0
    
    var loadingCir = new ProgressBar.Circle(loadingCircle, {
        easing: 'easeIn',
        duration: 2500,
        strokeWidth: 5,
        trailWidth: 1,
        from:{
            color: '#91ffab'
        },
        to:{
            color: '#00b400'
        },
        step: function(state, circle){
            circle.path.setAttribute('stroke', state.color);
        }
    });
    loadingCir.animate(1);  // Value from 0.0 to 1.0
    */

// });//DOMContendLoaded

