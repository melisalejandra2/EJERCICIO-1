var mapa = L.map('mapa').setView([-0.200, -78.50],20);
 L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(mapa);

$.getJSON("https://melisalejandra2.github.io/EJERCICIO-1/TESIS.geojson",
 function(data){
  var clusteredPoints = L.markerClusterGroup();
 var marker = 
 L.geoJson(data,{
  onEachFeature: function
      (feature,layer){
   L.marker(layer);
        layer.bindPopup('<b>Titulo: </b>' + 
        feature.properties.TITULO_TESIS_O_INVESTIGACION+'<br>\<b>Autor(es):</b>'+ feature.properties.AUTOR_O_AUTORES+'<br>\<b>Tutor(es):</b>'+ feature.properties.TUTOR_DE_TESIS)
 }
    }, 
     );
  clusteredPoints.addLayer(marker);
  mapa.addLayer(clusteredPoints)
});
