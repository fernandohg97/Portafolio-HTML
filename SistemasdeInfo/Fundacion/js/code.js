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
  var ens_info = "<b>Ensenada</b>";
  var infowindowENS = new google.maps.InfoWindow({
    content: ens_info
  });

  var mochis = { lat: 25.7667, lng: -108.9667};
  var mochis_msg="Estoy en Mochis";
  var mochis_info = "<b>Los Mochis</b>";
  var infowindowMOCHIS = new google.maps.InfoWindow({
    content: mochis_info
  });

  var gdl = {lat: 20.5, lng: -103.0583};
  var gdl_msg="Estoy en Guadalajara";
  var gdl_info = "<b>Guadalajara</b>";
  var infowindowGDL = new google.maps.InfoWindow({
    content: gdl_info
  });

  var ver = { lat: 19.1738, lng: -96.1342};
  var ver_msg = "Estoy en Veracruz";
  var ver_info = "<b>Veracruz</b>"; //+"<img src='img/veracruz.jpg'>"+"<iframe width='560' height='315' src='https://www.youtube.com/embed/It5ZxdvH6nM' frameborder='0' allowfullscreen></iframe>";
  var infowindowVER = new google.maps.InfoWindow({
    content: ver_info
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

var markerGDL = new google.maps.Marker({
  position: gdl,
  label: "C",
  title: gdl_msg,
  map: map
});

var markerVER = new google.maps.Marker({
  position: ver,
  label: "D",
  title: ver_msg,
  map: map
});

markerENS.addListener("click", function(){
  infowindowENS.open(map, markerENS)
})
markerMOCHIS.addListener("click", function(){
  infowindowMOCHIS.open(map, markerMOCHIS)
})
markerGDL.addListener("click", function(){
  infowindowGDL.open(map,markerGDL)
})
markerVER.addListener("click", function(){
  infowindowVER.open(map,markerVER)
})

}

