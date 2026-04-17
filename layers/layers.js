var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PartaiGerakanIndonesiaRaya_1 = new ol.format.GeoJSON();
var features_PartaiGerakanIndonesiaRaya_1 = format_PartaiGerakanIndonesiaRaya_1.readFeatures(json_PartaiGerakanIndonesiaRaya_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiGerakanIndonesiaRaya_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiGerakanIndonesiaRaya_1.addFeatures(features_PartaiGerakanIndonesiaRaya_1);
var lyr_PartaiGerakanIndonesiaRaya_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiGerakanIndonesiaRaya_1, 
                style: style_PartaiGerakanIndonesiaRaya_1,
                popuplayertitle: 'Partai Gerakan Indonesia Raya',
                interactive: true,
    title: 'Partai Gerakan Indonesia Raya<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_1_0.png" /> 11772 - 22230<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_1_1.png" /> 22230 - 32687<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_1_2.png" /> 32687 - 43145<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_1_3.png" /> 43145 - 53602<br />\
    <img src="styles/legend/PartaiGerakanIndonesiaRaya_1_4.png" /> 53602 - 64060<br />' });
var format_PartaiKebangkitanBangsa_2 = new ol.format.GeoJSON();
var features_PartaiKebangkitanBangsa_2 = format_PartaiKebangkitanBangsa_2.readFeatures(json_PartaiKebangkitanBangsa_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PartaiKebangkitanBangsa_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PartaiKebangkitanBangsa_2.addFeatures(features_PartaiKebangkitanBangsa_2);
var lyr_PartaiKebangkitanBangsa_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PartaiKebangkitanBangsa_2, 
                style: style_PartaiKebangkitanBangsa_2,
                popuplayertitle: 'Partai Kebangkitan Bangsa',
                interactive: true,
    title: 'Partai Kebangkitan Bangsa<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_2_0.png" /> 1315 - 3373<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_2_1.png" /> 3373 - 5430<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_2_2.png" /> 5430 - 7488<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_2_3.png" /> 7488 - 9545<br />\
    <img src="styles/legend/PartaiKebangkitanBangsa_2_4.png" /> 9545 - 11603<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_PartaiGerakanIndonesiaRaya_1.setVisible(true);lyr_PartaiKebangkitanBangsa_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PartaiGerakanIndonesiaRaya_1,lyr_PartaiKebangkitanBangsa_2];
lyr_PartaiGerakanIndonesiaRaya_1.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiKebangkitanBangsa_2.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', 'Kab_Kot': 'Kab_Kot', 'PKB': 'PKB', 'GERINDRA': 'GERINDRA', 'PDIP': 'PDIP', 'GOLKAR': 'GOLKAR', 'NASDEM': 'NASDEM', 'BUR': 'BUR', 'GELORA': 'GELORA', 'PKS': 'PKS', 'PKN': 'PKN', 'HANURA': 'HANURA', 'GARUDA': 'GARUDA', 'PAN': 'PAN', 'PBB': 'PBB', 'DEMOKRAT': 'DEMOKRAT', 'PSI': 'PSI', 'PERINDO': 'PERINDO', 'PPP': 'PPP', 'UMMAT': 'UMMAT', });
lyr_PartaiGerakanIndonesiaRaya_1.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiKebangkitanBangsa_2.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', 'Kab_Kot': 'TextEdit', 'PKB': 'TextEdit', 'GERINDRA': 'TextEdit', 'PDIP': 'TextEdit', 'GOLKAR': 'TextEdit', 'NASDEM': 'TextEdit', 'BUR': 'TextEdit', 'GELORA': 'TextEdit', 'PKS': 'TextEdit', 'PKN': 'TextEdit', 'HANURA': 'TextEdit', 'GARUDA': 'TextEdit', 'PAN': 'TextEdit', 'PBB': 'TextEdit', 'DEMOKRAT': 'TextEdit', 'PSI': 'TextEdit', 'PERINDO': 'TextEdit', 'PPP': 'TextEdit', 'UMMAT': 'TextEdit', });
lyr_PartaiGerakanIndonesiaRaya_1.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'hidden field', 'GERINDRA': 'inline label - always visible', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_2.set('fieldLabels', {'GID_2': 'hidden field', 'GID_0': 'hidden field', 'COUNTRY': 'hidden field', 'GID_1': 'hidden field', 'NAME_1': 'hidden field', 'NL_NAME_1': 'hidden field', 'NAME_2': 'hidden field', 'VARNAME_2': 'hidden field', 'NL_NAME_2': 'hidden field', 'TYPE_2': 'hidden field', 'ENGTYPE_2': 'hidden field', 'CC_2': 'hidden field', 'HASC_2': 'hidden field', 'Kab_Kot': 'inline label - always visible', 'PKB': 'inline label - always visible', 'GERINDRA': 'hidden field', 'PDIP': 'hidden field', 'GOLKAR': 'hidden field', 'NASDEM': 'hidden field', 'BUR': 'hidden field', 'GELORA': 'hidden field', 'PKS': 'hidden field', 'PKN': 'hidden field', 'HANURA': 'hidden field', 'GARUDA': 'hidden field', 'PAN': 'hidden field', 'PBB': 'hidden field', 'DEMOKRAT': 'hidden field', 'PSI': 'hidden field', 'PERINDO': 'hidden field', 'PPP': 'hidden field', 'UMMAT': 'hidden field', });
lyr_PartaiKebangkitanBangsa_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});