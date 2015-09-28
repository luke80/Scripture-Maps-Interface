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
var styleNoCountryBoundaries = [{
	featureType: "administrative.country",
	elementType: "geometry",
	stylers: [
		{ visibility: "off" }
	]
},{
	featureType: "administrative.province",
	elementType: "geometry",
	stylers: [
		{ visibility: "off" }
	]
}].concat(styleDefault);

var ModifyBoundarySetting = function( controlDiv, map ) {
	// Set CSS for the control border.
	var controlUI = $('<div></div>').css("backgroundColor", '#fff')
		.css("border", '2px solid #fff').css("borderRadius", '3px').css("boxShadow", '0 2px 6px rgba(0,0,0,.3)')
		.css("cursor", 'pointer').css("margin", '10px').css("textAlign", 'center')
		.attr("title", 'Click to toggle boundaries on the map');
	$(controlDiv).append(controlUI);
	// Set CSS for the control interior.
	var controlText = $('<div></div>').html('Toggle Boundaries').css("font-size", '11px')
		.css("padding", '5px').css("font-family", 'Roboto,Arial,sans-serif');
	controlUI.append(controlText);
	// Setup the click event listeners: simply set the map to Chicago.
	controlUI.on('click', function() {
		//console.log("removing boundaries? ",(map.styles.indexOf(styleNoCountryBoundaries[0]) == -1));
		if(map.styles.indexOf(styleNoCountryBoundaries[0]) == -1)
			map.setOptions({styles: styleNoCountryBoundaries});
		else
			map.setOptions({styles: styleDefault});
	});
};
var ReturnToScriptures = function( controlDiv, map ) {
	// Set CSS for the control border.
	var controlUI = $('<div></div>').css("backgroundColor", '#fff')
		.css("border", '2px solid #fff').css("borderRadius", '3px').css("boxShadow", '0 2px 6px rgba(0,0,0,.3)')
		.css("cursor", 'pointer').css("margin", '10px').css("textAlign", 'center')
		.attr("title", 'Click to return to the scriptures');
	$(controlDiv).append(controlUI);
	// Set CSS for the control interior.
	var controlText = $('<div></div>').html('Return to scriptures').css("font-size", '11px')
		.css("padding", '5px').css("font-family", 'Roboto,Arial,sans-serif');
	controlUI.append(controlText);
	// Setup the click event listeners: simply set the map to Chicago.
	controlUI.on('click', function() {
		$("#scriptures").removeClass("hidden");
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
	
	var boundaryControlDiv = document.createElement('div');
	var boundaryControl = new ModifyBoundarySetting(boundaryControlDiv, map);
	boundaryControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(boundaryControlDiv);
	
	var returnControlDiv = document.createElement('div');
	var returnControl = new ReturnToScriptures(returnControlDiv, map);
	returnControlDiv.index = 1;
	map.controls[google.maps.ControlPosition.TOP_RIGHT].push(returnControlDiv);
	
};
window.initMap = initMap;