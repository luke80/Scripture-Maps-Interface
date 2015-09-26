/**
 * 
 */

var getScripture = function() {
	console.log("Not yet implemented.");
	alert("Not yet implemented.");
};
var showLocation = function( map, label, pointLatitude, pointLongitude, centerMapLatitude, centerMapLatitude ) {
	var marker = new google.maps.Marker({
		position: {	lat: pointLatitude, lng: pointLongitude},
		title: label,
		animation: google.maps.Animation.DROP,
		map: map
	});
	var latLng = marker.getPosition();	// returns LatLng object
	map.setCenter(latLng);				// setCenter takes a LatLng object
};