ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4674").setExtent([-48.220888, -24.019636, -44.529843, -22.169528]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_EsriImagery_2 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Municipios_3 = new ol.format.GeoJSON();
var features_Municipios_3 = format_Municipios_3.readFeatures(json_Municipios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_Municipios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_3.addFeatures(features_Municipios_3);
var lyr_Municipios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_3, 
                style: style_Municipios_3,
                popuplayertitle: 'Municipios',
                interactive: true,
                title: '<img src="styles/legend/Municipios_3.png" /> Municipios'
            });
var format_ImveisCARView_4 = new ol.format.GeoJSON();
var features_ImveisCARView_4 = format_ImveisCARView_4.readFeatures(json_ImveisCARView_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ImveisCARView_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ImveisCARView_4.addFeatures(features_ImveisCARView_4);
var lyr_ImveisCARView_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ImveisCARView_4, 
                style: style_ImveisCARView_4,
                popuplayertitle: 'Imóveis CAR (View)',
                interactive: true,
    title: 'Imóveis CAR (View)<br />\
    <img src="styles/legend/ImveisCARView_4_0.png" /> Prospectada<br />\
    <img src="styles/legend/ImveisCARView_4_1.png" /> Em negociacao<br />\
    <img src="styles/legend/ImveisCARView_4_2.png" /> Em contato<br />\
    <img src="styles/legend/ImveisCARView_4_3.png" /> Descartada<br />\
    <img src="styles/legend/ImveisCARView_4_4.png" /> Demais imóveis<br />' });
var format_ReservaLegal_5 = new ol.format.GeoJSON();
var features_ReservaLegal_5 = format_ReservaLegal_5.readFeatures(json_ReservaLegal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4674'});
var jsonSource_ReservaLegal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReservaLegal_5.addFeatures(features_ReservaLegal_5);
var lyr_ReservaLegal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReservaLegal_5, 
                style: style_ReservaLegal_5,
                popuplayertitle: 'Reserva Legal',
                interactive: true,
                title: '<img src="styles/legend/ReservaLegal_5.png" /> Reserva Legal'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_EsriImagery_2.setVisible(true);lyr_Municipios_3.setVisible(true);lyr_ImveisCARView_4.setVisible(true);lyr_ReservaLegal_5.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleMaps_1,lyr_EsriImagery_2,lyr_Municipios_3,lyr_ImveisCARView_4,lyr_ReservaLegal_5];
lyr_Municipios_3.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'Município', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', });
lyr_ImveisCARView_4.set('fieldAliases', {'gid': 'gid', 'codigo_imovel': 'Código do Imóvel', 'num_area': 'Área (Hectares)', 'des_condic': 'Condição CAR', 'municipio': 'Município', 'cod_estado': 'UF', 'dat_atuali': 'Atualização CAR', 'status_gestao': 'Status Gestão', 'nome_respon': 'Responsável Imóvel', 'contato': 'Contato', 'email': 'e-mail', 'observacao': 'OBS', 'data_atualizacao': 'Atualização Gestão', });
lyr_ReservaLegal_5.set('fieldAliases', {'cod_tema': 'cod_tema', 'nom_tema': 'nom_tema', 'cod_imovel': 'Código do Imóvel', 'num_area': 'Área Ha', 'ind_status': 'ind_status', 'des_condic': 'Condição', 'layer': 'Desc.', 'path': 'path', 'municipio': 'municipio', 'uf': 'UF', });
lyr_Municipios_3.set('fieldImages', {'CD_MUN': 'Hidden', 'NM_MUN': 'TextEdit', 'CD_RGI': 'Hidden', 'NM_RGI': 'Hidden', 'CD_RGINT': 'Hidden', 'NM_RGINT': 'Hidden', 'CD_UF': 'Hidden', 'NM_UF': 'Hidden', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'Hidden', 'NM_REGIA': 'Hidden', 'SIGLA_RG': 'Hidden', 'CD_CONCU': 'Hidden', 'NM_CONCU': 'Hidden', 'AREA_KM2': 'Hidden', });
lyr_ImveisCARView_4.set('fieldImages', {'gid': 'Hidden', 'codigo_imovel': 'TextEdit', 'num_area': 'TextEdit', 'des_condic': 'TextEdit', 'municipio': 'TextEdit', 'cod_estado': 'TextEdit', 'dat_atuali': 'TextEdit', 'status_gestao': 'TextEdit', 'nome_respon': 'TextEdit', 'contato': 'TextEdit', 'email': 'TextEdit', 'observacao': 'TextEdit', 'data_atualizacao': 'DateTime', });
lyr_ReservaLegal_5.set('fieldImages', {'cod_tema': 'Hidden', 'nom_tema': 'Hidden', 'cod_imovel': 'TextEdit', 'num_area': 'TextEdit', 'ind_status': 'Hidden', 'des_condic': 'Hidden', 'layer': 'TextEdit', 'path': 'Hidden', 'municipio': 'TextEdit', 'uf': 'TextEdit', });
lyr_Municipios_3.set('fieldLabels', {'NM_MUN': 'inline label - always visible', 'SIGLA_UF': 'hidden field', });
lyr_ImveisCARView_4.set('fieldLabels', {'codigo_imovel': 'inline label - always visible', 'num_area': 'inline label - always visible', 'des_condic': 'inline label - always visible', 'municipio': 'inline label - always visible', 'cod_estado': 'inline label - always visible', 'dat_atuali': 'inline label - always visible', 'status_gestao': 'inline label - always visible', 'nome_respon': 'inline label - always visible', 'contato': 'inline label - always visible', 'email': 'inline label - always visible', 'observacao': 'inline label - always visible', 'data_atualizacao': 'inline label - always visible', });
lyr_ReservaLegal_5.set('fieldLabels', {'cod_imovel': 'inline label - always visible', 'num_area': 'inline label - always visible', 'layer': 'inline label - always visible', 'municipio': 'inline label - always visible', 'uf': 'inline label - always visible', });
lyr_ReservaLegal_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});