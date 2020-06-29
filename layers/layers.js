var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_FincaValdeojos_1 = new ol.format.GeoJSON();
var features_FincaValdeojos_1 = format_FincaValdeojos_1.readFeatures(json_FincaValdeojos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FincaValdeojos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FincaValdeojos_1.addFeatures(features_FincaValdeojos_1);
var lyr_FincaValdeojos_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FincaValdeojos_1, 
                style: style_FincaValdeojos_1,
                interactive: true,
    title: 'Finca "Valdeojos"<br />\
    <img src="styles/legend/FincaValdeojos_1_0.png" /> Tierra Arable: 275 has<br />\
    <img src="styles/legend/FincaValdeojos_1_1.png" /> Balsa 1: 249,60 m3<br />\
    <img src="styles/legend/FincaValdeojos_1_2.png" /> Balsa 2: 303,14 m3<br />'
        });

lyr_GoogleHybrid_0.setVisible(true);lyr_FincaValdeojos_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_FincaValdeojos_1];
lyr_FincaValdeojos_1.set('fieldAliases', {'poligono': 'poligono', 'parcela': 'parcela', 'recinto': 'recinto', 'uso_sigpac': 'uso_sigpac', 'Superficie': 'Superficie', });
lyr_FincaValdeojos_1.set('fieldImages', {'poligono': 'TextEdit', 'parcela': 'TextEdit', 'recinto': 'TextEdit', 'uso_sigpac': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_FincaValdeojos_1.set('fieldLabels', {'poligono': 'header label', 'parcela': 'header label', 'recinto': 'header label', 'uso_sigpac': 'header label', 'Superficie': 'header label', });
lyr_FincaValdeojos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});