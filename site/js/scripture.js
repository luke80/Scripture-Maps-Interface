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
	}),
		e = window.event;
	var latLng = marker.getPosition();	// returns LatLng object
	map.setCenter(latLng);				// setCenter takes a LatLng object
	var word = $('<a href="javascript:void(null);">'+$(e.target).html()+'</a>').addClass("animate-label");
	console.log(e);
	word.css("top",$(e.target).offset().top);
	word.css("left",$(e.target).offset().left);
	word.css("opacity",1);
	word.css("z-index",1000);
	$("#map").find(".animate-label").remove();
	$("#map").append(word);
	window.setTimeout(
		'$(".animate-label").removeAttr("style").css("top","calc(50vh - ("+$(".animate-label").height()+" / 2))").css("left","calc(50vw - ("+$(".animate-label").width()+" / 2))");',
		10
	);
	//word.removeAttr("style");
	$("#scriptures").addClass("hidden");
	
	
	var request = {
		location: {	lat: pointLatitude, lng: pointLongitude},
		radius: '10000',
		types: ['cemetery','church','hindu_temple','library','local_government_office','mosque','museum','park','synagogue','university','natural_feature',
		        'point_of_interest','political']
	};

	service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, placesCallback);
};
function placesCallback(results, status) {
	if (status == google.maps.places.PlacesServiceStatus.OK) {
		for (var i = 0; i < results.length; i++) {
			var place = results[i];
			createPhotoMarker(results[i]);
		}
	}
}
function createPhotoMarker(place) {
	var photos = place.photos;
	if (!photos) {
		return;
	}

	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location,
		title: place.name,
		icon: photos[0].getUrl({'maxWidth': 50, 'maxHeight': 50})
	});
}
