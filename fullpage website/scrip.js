window.onload = setTimeout(function() {
  var x = document.getElementById("fadein");
  x.className = 'bodytext content ';
}, 4000) 



function onclickAnimation(){
  var x = document.getElementById('myVideo');
  var y = document.getElementById("fadein");
  if (y.className === "bodytext content "){
    y.className = 'op0 ';
    x.play();
    setTimeout(function() {
      var x = document.getElementById("fadein");
      x.className = 'bodytext content ';
    }, 1)
  }
}

function animation(x){
  var y = document.getElementById("fadein");
  if (y.className === "bodytext content "){
    y.className = 'op0 ';
    x.play();
    setTimeout(function() {
      var x = document.getElementById("fadein");
      x.className = 'bodytext content ';
    }, 4500)
  }

}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
  
    } else {
      x.className = "topnav";

    }
  }

  function DropdownResponsive() {
    var z = document.getElementById("dropdown-content");
    if ( z.className === "dropdown-content") {
        z.className += " responsive";
      } else {
        z.className = "dropdown-content"
      }
  }
/*
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
      type    : 'loop',
      speed   : 200,
      autoplay : true,
      "cover" : true,
      "height" : '50rem',
    } ).mount();
  } );

  document.addEventListener( 'DOMContentLoaded', function () {
 new Splide( '#splide', {
  type      : 'loop',
  pagination: false,
  perPage   : 3,
  speed     : 100,
  autoplay  : true,
  gap       : '5em',
  height    : '30rem',
	cover     : true,
	breakpoints: {
		'1024': {
      perPage: 2,
      height: '25rem',
			gap    : '1rem',
		},
		'480': {
			perPage: 1,
			gap    : '1rem',
		},
	}
} ).mount();
  } );

*/
 
new Splide( '#splide', {
  heightRatio : 0.3,
  perPage: 2,
  pagination:false,
  cover : true,
  gap: '1em',
  lazyLoad   : 'sequential',
	video: {
		autoplay: false,
    mute    : true,
    disableOverlayUI: false,
    hideControls : false,
  },
  breakpoints: {
		'1024': {
      perPage: 1,
      height: '25rem',
			gap    : '1rem',
		}
	}
} ).mount(window.splide.Extensions);