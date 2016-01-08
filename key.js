$(document).ready(function() {
  $('.input-group.date').datepicker({
      format: "yyyy-mm-dd",
      todayBtn: "linked",
      orientation: "bottom auto"
  });
  $("#loader").hide();
});

function getData() {
	var link_p1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=";
	var link_p2 = "&camera=";
	var api_key = "&api_key=Fof8jxqZUUxa7MKmuWjgiiQTyiumR4tbURMclOxK";
	var request = "&callback=?json";

	var date = ($('#earth-date').val());
	console.log("DATE: ", date);
	var camera = ($('#cameras input:radio:checked').val());
	console.log("CAMERA: ", camera);

	var constructed_link = link_p1 + date + link_p2 + camera + api_key + request;
	console.log(constructed_link);

	$("#loader").show();
		$.getJSON(constructed_link, function(json) {

			  var earthdate = json.photos[0].earth_date;
			  var id = json.photos[0].id;
			  var img = json.photos[0].img_src;
			  var cameratype = json.photos[0].camera.full_name;
			  var sol = json.photos[0].sol;

			  document.getElementById('earth-date').innerHTML = "<b>Date:</b> " + earthdate;
			  document.getElementById('rover-img').src = img;
			  document.getElementById('camera-type').innerHTML = "<b>Camera Type: </b>" + cameratype;
			  document.getElementById('sol').innerHTML = "<b>SOL: </b>" + sol;
			  document.getElementById('image-id').innerHTML = "<b>Image ID: </b>" + id;

			$('#results').css({ 
				'visibility': 'visible'
			});
			$("#loader").hide();
		});
}







