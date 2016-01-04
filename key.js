var API_KEY = "Fof8jxqZUUxa7MKmuWjgiiQTyiumR4tbURMclOxK";

var test_json = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-01-01&camera=fhaz&api_key=Fof8jxqZUUxa7MKmuWjgiiQTyiumR4tbURMclOxK";

var link = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-01-01&camera=fhaz&api_key=Fof8jxqZUUxa7MKmuWjgiiQTyiumR4tbURMclOxK";
var link2 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-01-01&camera=fhaz&api_key=Fof8jxqZUUxa7MKmuWjgiiQTyiumR4tbURMclOxK?jsoncallback=?"


function getData() {
	var link = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/"
}


$.getJSON( "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2016-01-01&camera=fhaz&api_key=Fof8jxqZUUxa7MKmuWjgiiQTyiumR4tbURMclOxK&callback=?json", function( json ) {
  


  // var earthdate = json.photos[0].earth_date;
  // var id = json.photos[0].id;
  // var img = json.photos[0].img_src;
  // var cameratype = json.photos[0].camera.full_name;
  // var sol = json.photos[0].sol;

  // document.getElementById('earth-date').innerHTML = "<b>Date:</b> " + earthdate;
  // document.getElementById('rover-img').src = img;
  // document.getElementById('camera-type').innerHTML = "<b>Camera Type: </b>" + cameratype;
  // document.getElementById('sol').innerHTML = "<b>SOL: </b>" + sol;
  // document.getElementById('image-id').innerHTML = "<b>Image ID: </b>" + id;
 });




$(document).ready(function() {
  $('.input-group.date').datepicker({
      format: "yyyy-mm-dd",
      todayBtn: "linked",
      orientation: "bottom auto"
  });
});