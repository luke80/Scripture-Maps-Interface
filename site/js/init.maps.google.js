/** 
 * 	Initialization script for the google maps layer
 */

var initMap = function() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: {lat: 36.964, lng: -122.015},
		mapTypeControl: true,
		mapTypeId: google.maps.MapTypeId.SATELLITE	,
	    mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: [
				google.maps.MapTypeId.SATELLITE,
				google.maps.MapTypeId.TERRAIN
			]
		},
		zoomControl: true,
		zoomControlOptions: {
	        position: google.maps.ControlPosition.RIGHT_TOP
	    },
		scaleControl: false,
		streetViewControl: false,
		rotateControl: true
	});
	//map.setTilt(45);
};
window.initMap = initMap;