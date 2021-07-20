var bar = new ProgressBar.Line(splashText,{
  strokeWidth: 0,
  duration: 5000,
  trailWidth: 0,
  text: {
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '0',
      Transform: 'translate(-50%, -50%)',
      'font-size': '1.2rem',
      color: '#fff',
    },
    autoStyleContainer: false
  },
  step: function(state,bar) {
    bar.setText(Math.round(bar.value() * 100)+'%')
  }
});

bar.animate(1.0, function(){
  $("#splash").delay(500).fadeOut(800);
});