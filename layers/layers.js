ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-92.288111, -15.654922, -56.791775, 8.731611]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_binacional_1 = new ol.format.GeoJSON();
var features_binacional_1 = format_binacional_1.readFeatures(json_binacional_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_binacional_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_binacional_1.addFeatures(features_binacional_1);
var lyr_binacional_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_binacional_1, 
                style: style_binacional_1,
                popuplayertitle: "binacional",
                interactive: true,
                    title: '<img src="styles/legend/binacional_1.png" /> binacional'
                });
var format_RUNAP_2 = new ol.format.GeoJSON();
var features_RUNAP_2 = format_RUNAP_2.readFeatures(json_RUNAP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RUNAP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUNAP_2.addFeatures(features_RUNAP_2);
var lyr_RUNAP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUNAP_2, 
                style: style_RUNAP_2,
                popuplayertitle: "RUNAP",
                interactive: true,
                    title: '<img src="styles/legend/RUNAP_2.png" /> RUNAP'
                });
var format_ReservaCampesina_3 = new ol.format.GeoJSON();
var features_ReservaCampesina_3 = format_ReservaCampesina_3.readFeatures(json_ReservaCampesina_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ReservaCampesina_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaCampesina_3.addFeatures(features_ReservaCampesina_3);
var lyr_ReservaCampesina_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaCampesina_3, 
                style: style_ReservaCampesina_3,
                popuplayertitle: "Reserva Campesina",
                interactive: true,
                    title: '<img src="styles/legend/ReservaCampesina_3.png" /> Reserva Campesina'
                });
var format_NcleosDesarrolloForestal_4 = new ol.format.GeoJSON();
var features_NcleosDesarrolloForestal_4 = format_NcleosDesarrolloForestal_4.readFeatures(json_NcleosDesarrolloForestal_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_NcleosDesarrolloForestal_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NcleosDesarrolloForestal_4.addFeatures(features_NcleosDesarrolloForestal_4);
var lyr_NcleosDesarrolloForestal_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NcleosDesarrolloForestal_4, 
                style: style_NcleosDesarrolloForestal_4,
                popuplayertitle: "Núcleos Desarrollo Forestal",
                interactive: true,
                    title: '<img src="styles/legend/NcleosDesarrolloForestal_4.png" /> Núcleos Desarrollo Forestal'
                });
var format_ComunNegraTitulada_5 = new ol.format.GeoJSON();
var features_ComunNegraTitulada_5 = format_ComunNegraTitulada_5.readFeatures(json_ComunNegraTitulada_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ComunNegraTitulada_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ComunNegraTitulada_5.addFeatures(features_ComunNegraTitulada_5);
var lyr_ComunNegraTitulada_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ComunNegraTitulada_5, 
                style: style_ComunNegraTitulada_5,
                popuplayertitle: "Comun Negra Titulada",
                interactive: true,
                    title: '<img src="styles/legend/ComunNegraTitulada_5.png" /> Comun Negra Titulada'
                });
var format_ResgIndgena_6 = new ol.format.GeoJSON();
var features_ResgIndgena_6 = format_ResgIndgena_6.readFeatures(json_ResgIndgena_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ResgIndgena_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ResgIndgena_6.addFeatures(features_ResgIndgena_6);
var lyr_ResgIndgena_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ResgIndgena_6, 
                style: style_ResgIndgena_6,
                popuplayertitle: "Resg Indígena",
                interactive: true,
                    title: '<img src="styles/legend/ResgIndgena_6.png" /> Resg Indígena'
                });

lyr_GoogleHybrid_0.setVisible(true);lyr_binacional_1.setVisible(true);lyr_RUNAP_2.setVisible(true);lyr_ReservaCampesina_3.setVisible(true);lyr_NcleosDesarrolloForestal_4.setVisible(true);lyr_ComunNegraTitulada_5.setVisible(true);lyr_ResgIndgena_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_binacional_1,lyr_RUNAP_2,lyr_ReservaCampesina_3,lyr_NcleosDesarrolloForestal_4,lyr_ComunNegraTitulada_5,lyr_ResgIndgena_6];
lyr_binacional_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'CODIGO': 'CODIGO', 'RULEID': 'RULEID', 'layer': 'layer', 'path': 'path', });
lyr_RUNAP_2.set('fieldAliases', {'nombre': 'nombre', 'id_pnn': 'id_pnn', 'categoria': 'categoria', 'territoria': 'territoria', 'resolucion': 'resolucion', 'hectareas_': 'hectareas_', 'escala': 'escala', 'organizaci': 'organizaci', 'fecha_act': 'fecha_act', 'url': 'url', 'wkid': 'wkid', 'app_id': 'app_id', 'record_id': 'record_id', 'centroid_x': 'centroid_x', 'centroid_y': 'centroid_y', 'fecha_regi': 'fecha_regi', 'validado': 'validado', 'hectareas0': 'hectareas0', 'perimetro_': 'perimetro_', 'globalid': 'globalid', 'administra': 'administra', });
lyr_ReservaCampesina_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'NOMBRE_ZON': 'NOMBRE_ZON', 'RESOLUCION': 'RESOLUCION', 'SHAPE_Leng': 'SHAPE_Leng', 'Área_HA': 'Área_HA', 'GlobalID': 'GlobalID', });
lyr_NcleosDesarrolloForestal_4.set('fieldAliases', {'id': 'id', 'Nucleo': 'Nucleo', 'Bosque': 'Bosque', 'No_Bosque': 'No_Bosque', 'id_1': 'id_1', 'nucleos': 'nucleos', 'Def_14': 'Def_14', 'Def_15': 'Def_15', 'Def_16': 'Def_16', 'Def_17': 'Def_17', 'Def_18': 'Def_18', 'Def_19': 'Def_19', 'Def_20': 'Def_20', 'Def_21': 'Def_21', 'Total_Def': 'Total_Def', });
lyr_ComunNegraTitulada_5.set('fieldAliases', {'NUMERO_PLA': 'NUMERO_PLA', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'NOMBRE': 'NOMBRE', 'ID': 'ID', 'CODIGO_DAN': 'CODIGO_DAN', 'GlobalID': 'GlobalID', 'TIPO_ACTO_': 'TIPO_ACTO_', 'NUMERO_ACT': 'NUMERO_ACT', 'FECHA_ACTO': 'FECHA_ACTO', 'AREA_ACTO_': 'AREA_ACTO_', });
lyr_ResgIndgena_6.set('fieldAliases', {'TIPO_ACTO_': 'TIPO_ACTO_', 'NUMERO_ACT': 'NUMERO_ACT', 'FECHA_ACTO': 'FECHA_ACTO', 'AREA_ACTO_': 'AREA_ACTO_', 'NUMERO_PLA': 'NUMERO_PLA', 'PUEBLO': 'PUEBLO', 'DEPARTAMEN': 'DEPARTAMEN', 'MUNICIPIO': 'MUNICIPIO', 'ID': 'ID', 'NOMBRE': 'NOMBRE', 'CODIGO_DAN': 'CODIGO_DAN', 'GlobalID': 'GlobalID', });
lyr_binacional_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'ID': 'Range', 'CODIGO': 'TextEdit', 'RULEID': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_RUNAP_2.set('fieldImages', {'nombre': 'TextEdit', 'id_pnn': 'TextEdit', 'categoria': 'TextEdit', 'territoria': 'TextEdit', 'resolucion': 'TextEdit', 'hectareas_': 'TextEdit', 'escala': 'TextEdit', 'organizaci': 'TextEdit', 'fecha_act': 'DateTime', 'url': 'TextEdit', 'wkid': 'TextEdit', 'app_id': 'TextEdit', 'record_id': 'TextEdit', 'centroid_x': 'TextEdit', 'centroid_y': 'TextEdit', 'fecha_regi': 'DateTime', 'validado': 'TextEdit', 'hectareas0': 'TextEdit', 'perimetro_': 'TextEdit', 'globalid': 'TextEdit', 'administra': 'TextEdit', });
lyr_ReservaCampesina_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'NOMBRE_ZON': 'TextEdit', 'RESOLUCION': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Área_HA': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_NcleosDesarrolloForestal_4.set('fieldImages', {'id': 'TextEdit', 'Nucleo': 'TextEdit', 'Bosque': 'TextEdit', 'No_Bosque': 'TextEdit', 'id_1': 'TextEdit', 'nucleos': 'TextEdit', 'Def_14': 'TextEdit', 'Def_15': 'TextEdit', 'Def_16': 'TextEdit', 'Def_17': 'TextEdit', 'Def_18': 'TextEdit', 'Def_19': 'TextEdit', 'Def_20': 'TextEdit', 'Def_21': 'TextEdit', 'Total_Def': 'TextEdit', });
lyr_ComunNegraTitulada_5.set('fieldImages', {'NUMERO_PLA': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'NOMBRE': 'TextEdit', 'ID': 'TextEdit', 'CODIGO_DAN': 'TextEdit', 'GlobalID': 'TextEdit', 'TIPO_ACTO_': 'TextEdit', 'NUMERO_ACT': 'TextEdit', 'FECHA_ACTO': 'DateTime', 'AREA_ACTO_': 'TextEdit', });
lyr_ResgIndgena_6.set('fieldImages', {'TIPO_ACTO_': 'TextEdit', 'NUMERO_ACT': 'TextEdit', 'FECHA_ACTO': 'DateTime', 'AREA_ACTO_': 'TextEdit', 'NUMERO_PLA': 'TextEdit', 'PUEBLO': 'TextEdit', 'DEPARTAMEN': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ID': 'TextEdit', 'NOMBRE': 'TextEdit', 'CODIGO_DAN': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_binacional_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'ID': 'hidden field', 'CODIGO': 'hidden field', 'RULEID': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RUNAP_2.set('fieldLabels', {'nombre': 'header label - always visible', 'id_pnn': 'hidden field', 'categoria': 'header label - always visible', 'territoria': 'header label - always visible', 'resolucion': 'header label - always visible', 'hectareas_': 'header label - always visible', 'escala': 'header label - always visible', 'organizaci': 'header label - always visible', 'fecha_act': 'header label - always visible', 'url': 'header label - always visible', 'wkid': 'hidden field', 'app_id': 'hidden field', 'record_id': 'hidden field', 'centroid_x': 'hidden field', 'centroid_y': 'hidden field', 'fecha_regi': 'header label - always visible', 'validado': 'header label - always visible', 'hectareas0': 'hidden field', 'perimetro_': 'hidden field', 'globalid': 'hidden field', 'administra': 'header label - always visible', });
lyr_ReservaCampesina_3.set('fieldLabels', {'OBJECTID_1': 'hidden field', 'NOMBRE_ZON': 'header label - always visible', 'RESOLUCION': 'header label - always visible', 'SHAPE_Leng': 'hidden field', 'Área_HA': 'header label - always visible', 'GlobalID': 'hidden field', });
lyr_NcleosDesarrolloForestal_4.set('fieldLabels', {'id': 'hidden field', 'Nucleo': 'header label - always visible', 'Bosque': 'header label - always visible', 'No_Bosque': 'header label - always visible', 'id_1': 'hidden field', 'nucleos': 'header label - always visible', 'Def_14': 'no label', 'Def_15': 'no label', 'Def_16': 'no label', 'Def_17': 'no label', 'Def_18': 'no label', 'Def_19': 'no label', 'Def_20': 'no label', 'Def_21': 'no label', 'Total_Def': 'header label - always visible', });
lyr_ComunNegraTitulada_5.set('fieldLabels', {'NUMERO_PLA': 'hidden field', 'DEPARTAMEN': 'header label - always visible', 'MUNICIPIO': 'header label - always visible', 'NOMBRE': 'header label - always visible', 'ID': 'hidden field', 'CODIGO_DAN': 'hidden field', 'GlobalID': 'hidden field', 'TIPO_ACTO_': 'hidden field', 'NUMERO_ACT': 'hidden field', 'FECHA_ACTO': 'header label - always visible', 'AREA_ACTO_': 'header label - always visible', });
lyr_ResgIndgena_6.set('fieldLabels', {'TIPO_ACTO_': 'hidden field', 'NUMERO_ACT': 'hidden field', 'FECHA_ACTO': 'hidden field', 'AREA_ACTO_': 'header label - always visible', 'NUMERO_PLA': 'hidden field', 'PUEBLO': 'header label - always visible', 'DEPARTAMEN': 'header label - always visible', 'MUNICIPIO': 'header label - always visible', 'ID': 'hidden field', 'NOMBRE': 'header label - always visible', 'CODIGO_DAN': 'hidden field', 'GlobalID': 'hidden field', });
lyr_ResgIndgena_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});