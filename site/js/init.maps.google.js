/** 
 * 	Initialization script for the google maps layer
 */

var styleDefault = [
	{
		featureType: "all",
		stylers: [
			{ saturation: -10 }
		]
	},{
		featureType: "road",
		elementType: "all",
		stylers: [
			{ visibility: "off" }
		]
	}/*,{
		featureType: "road",
		elementType: "labels",
		stylers: [
			{ visibility: "off" }
		]
	}*/,{
		featureType: "poi",
		elementType: "labels",
		stylers: [
			{ visibility: "off" }
		]
	},{
		featureType: "poi.place_of_worship",
		elementType: "labels",
		stylers: [
			{ lightness: 100 },
			{ visibility: "simplified" }
		]
	},{
		featureType: "transit",
		elementType: "geometry",
		stylers: [
			{ visibility: "off" }
		]
	},{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{ lightness: -5 }
		]
	}
];
var styleNoCountryBoundaries = $.extend(true,[],styleDefault);
styleNoCountryBoundaries.push({
	featureType: "administrative.country",
	elementType: "geometry",
	stylers: [
		{ visibility: "off" }
	]
});
styleNoCountryBoundaries.push({
	featureType: "administrative.province",
	elementType: "geometry",
	stylers: [
		{ visibility: "off" }
	]
});

var ModifyBoundarySetting = function( controlDiv, map ) {
	// Set CSS for the control border.
	var controlUI = document.createElement('div');
	controlUI.style.backgroundColor = '#fff';
	controlUI.style.border = '2px solid #fff';
	controlUI.style.borderRadius = '3px';
	controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
	controlUI.style.cursor = 'pointer';
	controlUI.style.marginBottom = '22px';
	controlUI.style.textAlign = 'center';
	controlUI.title = 'Click to toggle boundaries on the map';
	controlDiv.appendChild(controlUI);

	// Set CSS for the control interior.
	var controlText = document.createElement('div');
	controlText.innerHTML = 'Toggle Boundaries';
	controlText.style.fontSize = '11px';
	controlText.style.paddingLeft = '5px';
	controlText.style.paddingRight = '5px';
	controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
	/*
	controlText.style.color = 'rgb(25,25,25)';
	controlText.style.lineHeight = '38px';
	*/
	
	controlUI.appendChild(controlText);
	
	// Setup the click event listeners: simply set the map to Chicago.
	controlUI.addEventListener('click', function() {
		if(map.styles.indexOf(styleNoCountryBoundaries[0]) == -1)
			map.setOptions({styles: styleNoCountryBoundaries});
		else
			map.setOptions({styles: styleDefault});
	});
};
var map
var initMap = function() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: {lat: 31.8071935, lng: 35.0173334},	//	31.8071935,	35.0173334,	9.46
		zoomControl: true,
		zoomControlOptions: {
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		mapTypeId: google.maps.MapTypeId.TERRAIN,
		mapTypeControl: true,
			mapTypeControl: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DEFAULT,
			mapTypeIds: [
				google.maps.MapTypeId.SATELLITE,
				google.maps.MapTypeId.TERRAIN
			],
			position: google.maps.ControlPosition.RIGHT_TOP
		},
		scaleControl: false,
		streetViewControl: true,
		rotateControl: true
	});
	map.setOptions({styles: styleDefault});
	//map.setTilt(45);
	
	// Create the DIV to hold the control and call the CenterControl() constructor
	// passing in this DIV.
	var boundaryControlDiv = document.createElement('div');
	var boundaryControl = new ModifyBoundarySetting(boundaryControlDiv, map);
	boundaryControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(boundaryControlDiv);
};
window.initMap = initMap;