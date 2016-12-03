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

  var bc = { lat: 31.18, lng: -116.00 };
  var bc_msg="Estoy en Baja California";
  var bc_info = "<b>Baja California</b>";
  var infowindowBC = new google.maps.InfoWindow({
    content: bc_info
  });

  var son = { lat: 29.9496344, lng: -110.4740465};
  var son_msg="Estoy en Sonora";
  var son_info = "<b>Sonora</b>";
  var infowindowSON = new google.maps.InfoWindow({
    content: son_info
  });

  var gdl = {lat: 20.5, lng: -103.0583};
  var gdl_msg="Estoy en Guadalajara";
  var gdl_info = "<b>Guadalajara</b>";
  var infowindowGDL = new google.maps.InfoWindow({
    content: gdl_info
  });

  var ver = { lat: 19.1738, lng: -96.1342};
  var ver_msg = "Estoy en Veracruz";
  var ver_info = "<b>Veracruz</b>"+"<img src='img/veracruz.jpg'>"+"<iframe width='560' height='315' src='https://www.youtube.com/embed/It5ZxdvH6nM' frameborder='0' allowfullscreen></iframe>";
  var infowindowVER = new google.maps.InfoWindow({
    content: ver_info
  });




  var markerBC = new google.maps.Marker({
    position: bc,
    label: "C",
	title:bc_msg,
    map: map
  });



var markerSON = new google.maps.Marker({
    position: son,
    label: "A",
	title:son_msg,
    map: map
  });

var markerGDL = new google.maps.Marker({
  position: gdl,
  label: "B",
  title: gdl_msg,
  map: map
});

var markerVER = new google.maps.Marker({
  position: ver,
  label: "D",
  title: ver_msg,
  map: map
});

markerBC.addListener("click", function(){
  infowindowBC.open(map, markerBC)
})
markerSON.addListener("click", function(){
  infowindowSON.open(map, markerSON)
})
markerGDL.addListener("click", function(){
  infowindowGDL.open(map,markerGDL)
})
markerVER.addListener("click", function(){
  infowindowVER.open(map,markerVER)
})

}
