//CODIGO JAVASCRIPT
//MAPA DE GOOGLE MAPS
var map;
function inicializar() {

  var propiedades = {
    center:new google.maps.LatLng(31.8052277,-105.8768468),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.SATELLITE,
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    mapTypeControl: true,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_LEFT
    }
  }

  var map=new google.maps.Map(document.getElementById("Mapa"),propiedades);

  var ens = { lat: 31.8667, lng: -116.5964 };
  var ens_msg="Estoy en Ensenada";
  var ens_info = "<b>Ensenada</b>"+"<p>Participa en la 3ra edicion de Corre con color en 2017</p>";
  var infowindowENS = new google.maps.InfoWindow({
    content: ens_info
  });

  var mochis = { lat: 25.7667, lng: -108.9667};
  var mochis_msg="Estoy en Mochis";
  var mochis_info = "<b>Los Mochis</b>"+"<p>Apoya a una buena causa asistiendo al Gran Maraton Mochis</p>";
  var infowindowMOCHIS = new google.maps.InfoWindow({
    content: mochis_info
  });

  var ros = {lat: 32.3661, lng: -117.0618};
  var ros_msg="Estoy en Rosarito";
  var ros_info = "<b>Rosarito</b>"+"<p>Pedaleando por una esperanza de vida, 2017. Rosarito-Viñedos</p> ";
  var infowindowROS = new google.maps.InfoWindow({
    content: ros_info
  });




  var markerENS = new google.maps.Marker({
    position: ens,
    label: "A",
	title:ens_msg,
    map: map
  });



var markerMOCHIS = new google.maps.Marker({
    position: mochis,
    label: "B",
	title:mochis_msg,
    map: map
  });

var markerROS = new google.maps.Marker({
  position: ros,
  label: "C",
  title: ros_msg,
  map: map
});


markerENS.addListener("click", function(){
  infowindowENS.open(map, markerENS)
})
markerMOCHIS.addListener("click", function(){
  infowindowMOCHIS.open(map, markerMOCHIS)
})
markerROS.addListener("click", function(){
  infowindowROS.open(map, markerROS)
})

}
