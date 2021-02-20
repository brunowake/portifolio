
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
  scrollHorizontally: true,
  licenseKey: '1F4AD28C-620940A8-9B3BC8A9-01687E1E',

  //sections
  sectionsColor : ['#000000 ', '#000000','#000000', '#000000'],
  anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
  menu          : ['#myTopnav'],
  scrollingSpeed: 1000,
  lazyLoading: true,
});

//methods
fullpage_api.setAllowScrolling(true);