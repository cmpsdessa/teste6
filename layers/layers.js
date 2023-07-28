var wms_layers = [];

var lyr_SALGADA_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "SALGADA",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SALGADA_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671942.402596, -2383714.329847, -4671652.636123, -2383403.047506]
                            })
                        });
var lyr_AUDE_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "AÇUDE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AUDE_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4671133.160668, -2383628.577465, -4670777.740441, -2383318.236433]
                            })
                        });
var lyr_SEDE_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "SEDE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SEDE_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670948.163394, -2384394.961702, -4670201.137126, -2383681.065682]
                            })
                        });
var format_Al_3 = new ol.format.GeoJSON();
var features_Al_3 = format_Al_3.readFeatures(json_Al_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Al_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Al_3.addFeatures(features_Al_3);
var lyr_Al_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Al_3, 
                style: style_Al_3,
                interactive: true,
    title: 'Al<br />\
    <img src="styles/legend/Al_3_0.png" /> 0<br />\
    <img src="styles/legend/Al_3_1.png" /> 0,1<br />'
        });
var format_Ca_4 = new ol.format.GeoJSON();
var features_Ca_4 = format_Ca_4.readFeatures(json_Ca_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ca_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ca_4.addFeatures(features_Ca_4);
var lyr_Ca_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ca_4, 
                style: style_Ca_4,
                interactive: true,
    title: 'Ca<br />\
    <img src="styles/legend/Ca_4_0.png" /> 2,4<br />\
    <img src="styles/legend/Ca_4_1.png" /> 3,3<br />\
    <img src="styles/legend/Ca_4_2.png" /> 3,4<br />\
    <img src="styles/legend/Ca_4_3.png" /> 3,5<br />'
        });
var format_H_5 = new ol.format.GeoJSON();
var features_H_5 = format_H_5.readFeatures(json_H_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H_5.addFeatures(features_H_5);
var lyr_H_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_H_5, 
                style: style_H_5,
                interactive: true,
    title: 'H+<br />\
    <img src="styles/legend/H_5_0.png" /> 2,2<br />\
    <img src="styles/legend/H_5_1.png" /> 2,4<br />\
    <img src="styles/legend/H_5_2.png" /> 2,5<br />\
    <img src="styles/legend/H_5_3.png" /> 2,6<br />\
    <img src="styles/legend/H_5_4.png" /> 2,9<br />\
    <img src="styles/legend/H_5_5.png" /> 3<br />\
    <img src="styles/legend/H_5_6.png" /> 3,1<br />\
    <img src="styles/legend/H_5_7.png" /> 3,2<br />\
    <img src="styles/legend/H_5_8.png" /> 3,3<br />\
    <img src="styles/legend/H_5_9.png" /> 5,5<br />'
        });
var format_K_6 = new ol.format.GeoJSON();
var features_K_6 = format_K_6.readFeatures(json_K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_K_6.addFeatures(features_K_6);
var lyr_K_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_K_6, 
                style: style_K_6,
                interactive: true,
    title: 'K+<br />\
    <img src="styles/legend/K_6_0.png" /> 57,4<br />\
    <img src="styles/legend/K_6_1.png" /> 60,5<br />\
    <img src="styles/legend/K_6_2.png" /> 83,8<br />\
    <img src="styles/legend/K_6_3.png" /> 103,5<br />\
    <img src="styles/legend/K_6_4.png" /> 107,1<br />\
    <img src="styles/legend/K_6_5.png" /> 120,6<br />\
    <img src="styles/legend/K_6_6.png" /> 127,5<br />\
    <img src="styles/legend/K_6_7.png" /> 142<br />\
    <img src="styles/legend/K_6_8.png" /> 152,8<br />\
    <img src="styles/legend/K_6_9.png" /> 172,4<br />'
        });
var format_Mg_7 = new ol.format.GeoJSON();
var features_Mg_7 = format_Mg_7.readFeatures(json_Mg_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mg_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mg_7.addFeatures(features_Mg_7);
var lyr_Mg_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mg_7, 
                style: style_Mg_7,
                interactive: true,
    title: 'Mg<br />\
    <img src="styles/legend/Mg_7_0.png" /> 1,2<br />\
    <img src="styles/legend/Mg_7_1.png" /> 1,3<br />\
    <img src="styles/legend/Mg_7_2.png" /> 1,4<br />\
    <img src="styles/legend/Mg_7_3.png" /> 1,5<br />'
        });
var format_pH_8 = new ol.format.GeoJSON();
var features_pH_8 = format_pH_8.readFeatures(json_pH_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pH_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pH_8.addFeatures(features_pH_8);
var lyr_pH_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pH_8, 
                style: style_pH_8,
                interactive: true,
    title: 'pH<br />\
    <img src="styles/legend/pH_8_0.png" /> 5,4<br />\
    <img src="styles/legend/pH_8_1.png" /> 6<br />\
    <img src="styles/legend/pH_8_2.png" /> 6,1<br />\
    <img src="styles/legend/pH_8_3.png" /> 6,2<br />\
    <img src="styles/legend/pH_8_4.png" /> 6,3<br />\
    <img src="styles/legend/pH_8_5.png" /> 6,4<br />'
        });
var format_SALGADA_9 = new ol.format.GeoJSON();
var features_SALGADA_9 = format_SALGADA_9.readFeatures(json_SALGADA_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_9.addFeatures(features_SALGADA_9);
var lyr_SALGADA_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_9, 
                style: style_SALGADA_9,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_9.png" /> SALGADA'
            });
var format_AUDE_10 = new ol.format.GeoJSON();
var features_AUDE_10 = format_AUDE_10.readFeatures(json_AUDE_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_10.addFeatures(features_AUDE_10);
var lyr_AUDE_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_10, 
                style: style_AUDE_10,
                interactive: true,
                title: '<img src="styles/legend/AUDE_10.png" /> AÇUDE'
            });
var format_SEDE_11 = new ol.format.GeoJSON();
var features_SEDE_11 = format_SEDE_11.readFeatures(json_SEDE_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_11.addFeatures(features_SEDE_11);
var lyr_SEDE_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_11, 
                style: style_SEDE_11,
                interactive: true,
                title: '<img src="styles/legend/SEDE_11.png" /> SEDE'
            });
var format_SALGADA_12 = new ol.format.GeoJSON();
var features_SALGADA_12 = format_SALGADA_12.readFeatures(json_SALGADA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SALGADA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SALGADA_12.addFeatures(features_SALGADA_12);
var lyr_SALGADA_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SALGADA_12, 
                style: style_SALGADA_12,
                interactive: true,
                title: '<img src="styles/legend/SALGADA_12.png" /> SALGADA'
            });
var format_AUDE_13 = new ol.format.GeoJSON();
var features_AUDE_13 = format_AUDE_13.readFeatures(json_AUDE_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AUDE_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AUDE_13.addFeatures(features_AUDE_13);
var lyr_AUDE_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AUDE_13, 
                style: style_AUDE_13,
                interactive: true,
                title: '<img src="styles/legend/AUDE_13.png" /> AÇUDE'
            });
var format_SEDE_14 = new ol.format.GeoJSON();
var features_SEDE_14 = format_SEDE_14.readFeatures(json_SEDE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEDE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEDE_14.addFeatures(features_SEDE_14);
var lyr_SEDE_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEDE_14, 
                style: style_SEDE_14,
                interactive: true,
                title: '<img src="styles/legend/SEDE_14.png" /> SEDE'
            });
var lyr_SEDE_15 = new ol.layer.Image({
                            opacity: 1,
                            title: "SEDE",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SEDE_15.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4670948.163394, -2384394.961702, -4670201.137126, -2383681.065682]
                            })
                        });
var format_NmerodeFalhasdePalntio_16 = new ol.format.GeoJSON();
var features_NmerodeFalhasdePalntio_16 = format_NmerodeFalhasdePalntio_16.readFeatures(json_NmerodeFalhasdePalntio_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeFalhasdePalntio_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeFalhasdePalntio_16.addFeatures(features_NmerodeFalhasdePalntio_16);
var lyr_NmerodeFalhasdePalntio_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeFalhasdePalntio_16, 
                style: style_NmerodeFalhasdePalntio_16,
                interactive: true,
    title: 'Número de Falhas de Palntio<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_0.png" /> 2<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_1.png" /> 8<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_2.png" /> 24<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_3.png" /> 31<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_4.png" /> 75<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_5.png" /> 88<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_6.png" /> 319<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_7.png" /> 346<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_8.png" /> 367<br />\
    <img src="styles/legend/NmerodeFalhasdePalntio_16_9.png" /> 424<br />'
        });
var format_NmerodeLinhasdePlantio_17 = new ol.format.GeoJSON();
var features_NmerodeLinhasdePlantio_17 = format_NmerodeLinhasdePlantio_17.readFeatures(json_NmerodeLinhasdePlantio_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NmerodeLinhasdePlantio_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NmerodeLinhasdePlantio_17.addFeatures(features_NmerodeLinhasdePlantio_17);
var lyr_NmerodeLinhasdePlantio_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NmerodeLinhasdePlantio_17, 
                style: style_NmerodeLinhasdePlantio_17,
                interactive: true,
    title: 'Número de Linhas de Plantio<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_0.png" /> 22<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_1.png" /> 27<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_2.png" /> 31<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_3.png" /> 33<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_4.png" /> 46<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_5.png" /> 47<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_6.png" /> 48<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_7.png" /> 59<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_8.png" /> 65<br />\
    <img src="styles/legend/NmerodeLinhasdePlantio_17_9.png" /> 72<br />'
        });
var format_AnodePlantio_18 = new ol.format.GeoJSON();
var features_AnodePlantio_18 = format_AnodePlantio_18.readFeatures(json_AnodePlantio_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnodePlantio_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnodePlantio_18.addFeatures(features_AnodePlantio_18);
var lyr_AnodePlantio_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnodePlantio_18, 
                style: style_AnodePlantio_18,
                interactive: true,
    title: 'Ano de Plantio<br />\
    <img src="styles/legend/AnodePlantio_18_0.png" /> 1995<br />\
    <img src="styles/legend/AnodePlantio_18_1.png" /> 2019<br />\
    <img src="styles/legend/AnodePlantio_18_2.png" /> 2019/2020<br />\
    <img src="styles/legend/AnodePlantio_18_3.png" /> 2020<br />'
        });
var format_Variedades_19 = new ol.format.GeoJSON();
var features_Variedades_19 = format_Variedades_19.readFeatures(json_Variedades_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Variedades_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Variedades_19.addFeatures(features_Variedades_19);
var lyr_Variedades_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Variedades_19, 
                style: style_Variedades_19,
                interactive: true,
    title: 'Variedades<br />\
    <img src="styles/legend/Variedades_19_0.png" /> 785-15 Verm.<br />\
    <img src="styles/legend/Variedades_19_1.png" /> Arara<br />\
    <img src="styles/legend/Variedades_19_2.png" /> Arara e Japy<br />\
    <img src="styles/legend/Variedades_19_3.png" /> Catuai<br />\
    <img src="styles/legend/Variedades_19_4.png" /> Mundo Novo<br />'
        });
var format_reaha_20 = new ol.format.GeoJSON();
var features_reaha_20 = format_reaha_20.readFeatures(json_reaha_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaha_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reaha_20.addFeatures(features_reaha_20);
var lyr_reaha_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaha_20, 
                style: style_reaha_20,
                interactive: true,
    title: 'Área ha<br />\
    <img src="styles/legend/reaha_20_0.png" /> 0,28<br />\
    <img src="styles/legend/reaha_20_1.png" /> 0,286<br />\
    <img src="styles/legend/reaha_20_2.png" /> 0,407<br />\
    <img src="styles/legend/reaha_20_3.png" /> 0,607<br />\
    <img src="styles/legend/reaha_20_4.png" /> 0,832<br />\
    <img src="styles/legend/reaha_20_5.png" /> 0,84<br />\
    <img src="styles/legend/reaha_20_6.png" /> 0,899<br />\
    <img src="styles/legend/reaha_20_7.png" /> 1,032<br />\
    <img src="styles/legend/reaha_20_8.png" /> 1,110<br />\
    <img src="styles/legend/reaha_20_9.png" /> 1,867<br />'
        });
var format_TalhesProdutivos_21 = new ol.format.GeoJSON();
var features_TalhesProdutivos_21 = format_TalhesProdutivos_21.readFeatures(json_TalhesProdutivos_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TalhesProdutivos_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TalhesProdutivos_21.addFeatures(features_TalhesProdutivos_21);
var lyr_TalhesProdutivos_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TalhesProdutivos_21, 
                style: style_TalhesProdutivos_21,
                interactive: true,
    title: 'Talhões Produtivos<br />\
    <img src="styles/legend/TalhesProdutivos_21_0.png" /> T01<br />\
    <img src="styles/legend/TalhesProdutivos_21_1.png" /> T02<br />\
    <img src="styles/legend/TalhesProdutivos_21_2.png" /> T03<br />\
    <img src="styles/legend/TalhesProdutivos_21_3.png" /> T04<br />\
    <img src="styles/legend/TalhesProdutivos_21_4.png" /> T05<br />\
    <img src="styles/legend/TalhesProdutivos_21_5.png" /> T07<br />\
    <img src="styles/legend/TalhesProdutivos_21_6.png" /> T08<br />\
    <img src="styles/legend/TalhesProdutivos_21_7.png" /> T09<br />\
    <img src="styles/legend/TalhesProdutivos_21_8.png" /> T10<br />\
    <img src="styles/legend/TalhesProdutivos_21_9.png" /> T11<br />'
        });
var format_UsoeOcupaoCAR_22 = new ol.format.GeoJSON();
var features_UsoeOcupaoCAR_22 = format_UsoeOcupaoCAR_22.readFeatures(json_UsoeOcupaoCAR_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoeOcupaoCAR_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaoCAR_22.addFeatures(features_UsoeOcupaoCAR_22);
var lyr_UsoeOcupaoCAR_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsoeOcupaoCAR_22, 
                style: style_UsoeOcupaoCAR_22,
                interactive: true,
    title: 'Uso e Ocupação - CAR<br />\
    <img src="styles/legend/UsoeOcupaoCAR_22_0.png" /> AAG<br />\
    <img src="styles/legend/UsoeOcupaoCAR_22_1.png" /> ANA<br />\
    <img src="styles/legend/UsoeOcupaoCAR_22_2.png" /> ANF<br />'
        });
var format_CurvasdeNvel_23 = new ol.format.GeoJSON();
var features_CurvasdeNvel_23 = format_CurvasdeNvel_23.readFeatures(json_CurvasdeNvel_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNvel_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel_23.addFeatures(features_CurvasdeNvel_23);
var lyr_CurvasdeNvel_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasdeNvel_23, 
                style: style_CurvasdeNvel_23,
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNvel_23.png" /> Curvas de Nível'
            });
var format_UsoeOcupaoGeral_24 = new ol.format.GeoJSON();
var features_UsoeOcupaoGeral_24 = format_UsoeOcupaoGeral_24.readFeatures(json_UsoeOcupaoGeral_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoeOcupaoGeral_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaoGeral_24.addFeatures(features_UsoeOcupaoGeral_24);
var lyr_UsoeOcupaoGeral_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UsoeOcupaoGeral_24, 
                style: style_UsoeOcupaoGeral_24,
                interactive: true,
    title: 'Uso e Ocupação - Geral<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_0.png" /> AFLORAMENTO ROCHOSO<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_1.png" /> AGRICULTURA<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_2.png" /> AGUA<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_3.png" /> CAMPO / PASTAGEM<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_4.png" /> REFLORESTAMENTO<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_5.png" /> URBANO<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_6.png" /> VEGETACAO SECUNDARIA EM ESTAGIO INICIAL<br />\
    <img src="styles/legend/UsoeOcupaoGeral_24_7.png" /> VEGETACAO SECUNDARIA EM ESTAGIO MEDIO / AVANCADO<br />'
        });
var format_Nascentes_25 = new ol.format.GeoJSON();
var features_Nascentes_25 = format_Nascentes_25.readFeatures(json_Nascentes_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nascentes_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nascentes_25.addFeatures(features_Nascentes_25);
var lyr_Nascentes_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nascentes_25, 
                style: style_Nascentes_25,
                interactive: true,
                title: '<img src="styles/legend/Nascentes_25.png" /> Nascentes'
            });
var format_Hidrografia_26 = new ol.format.GeoJSON();
var features_Hidrografia_26 = format_Hidrografia_26.readFeatures(json_Hidrografia_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hidrografia_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hidrografia_26.addFeatures(features_Hidrografia_26);
var lyr_Hidrografia_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hidrografia_26, 
                style: style_Hidrografia_26,
                interactive: true,
                title: '<img src="styles/legend/Hidrografia_26.png" /> Hidrografia'
            });
var group_reasProdutivas = new ol.layer.Group({
                                layers: [lyr_NmerodeFalhasdePalntio_16,lyr_NmerodeLinhasdePlantio_17,lyr_AnodePlantio_18,lyr_Variedades_19,lyr_reaha_20,lyr_TalhesProdutivos_21,],
                                title: "Áreas Produtivas"});
var group_LinhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_12,lyr_AUDE_13,lyr_SEDE_14,lyr_SEDE_15,],
                                title: "Linhas de Plantio"});
var group_FalhasdePlantio = new ol.layer.Group({
                                layers: [lyr_SALGADA_9,lyr_AUDE_10,lyr_SEDE_11,],
                                title: "Falhas de Plantio"});
var group_NutrientesdoSolo = new ol.layer.Group({
                                layers: [lyr_Al_3,lyr_Ca_4,lyr_H_5,lyr_K_6,lyr_Mg_7,lyr_pH_8,],
                                title: "Nutrientes do Solo"});
var group_Ortofotos = new ol.layer.Group({
                                layers: [lyr_SALGADA_0,lyr_AUDE_1,lyr_SEDE_15,],
                                title: "Ortofotos"});

lyr_SALGADA_0.setVisible(true);lyr_AUDE_1.setVisible(true);lyr_SEDE_2.setVisible(true);lyr_Al_3.setVisible(false);lyr_Ca_4.setVisible(false);lyr_H_5.setVisible(false);lyr_K_6.setVisible(false);lyr_Mg_7.setVisible(false);lyr_pH_8.setVisible(false);lyr_SALGADA_9.setVisible(false);lyr_AUDE_10.setVisible(false);lyr_SEDE_11.setVisible(false);lyr_SALGADA_12.setVisible(false);lyr_AUDE_13.setVisible(false);lyr_SEDE_14.setVisible(false);lyr_SEDE_15.setVisible(false);lyr_NmerodeFalhasdePalntio_16.setVisible(true);lyr_NmerodeLinhasdePlantio_17.setVisible(true);lyr_AnodePlantio_18.setVisible(true);lyr_Variedades_19.setVisible(true);lyr_reaha_20.setVisible(true);lyr_TalhesProdutivos_21.setVisible(true);lyr_UsoeOcupaoCAR_22.setVisible(false);lyr_CurvasdeNvel_23.setVisible(false);lyr_UsoeOcupaoGeral_24.setVisible(false);lyr_Nascentes_25.setVisible(false);lyr_Hidrografia_26.setVisible(false);
var layersList = [group_Ortofotos,group_NutrientesdoSolo,group_FalhasdePlantio,group_LinhasdePlantio,group_reasProdutivas,lyr_UsoeOcupaoCAR_22,lyr_CurvasdeNvel_23,lyr_UsoeOcupaoGeral_24,lyr_Nascentes_25,lyr_Hidrografia_26];
lyr_Al_3.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Ca_4.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_H_5.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_K_6.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_Mg_7.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_pH_8.set('fieldAliases', {'fid': 'fid', 'nome': 'nome', 'localizaç': 'localizaç', 'area_m': 'area_m', 'area_ha': 'area_ha', 'perim_m': 'perim_m', 'ph': 'ph', 'ca (cmolc)': 'ca (cmolc)', 'mg (cmolc)': 'mg (cmolc)', 'al (cmolc)': 'al (cmolc)', 'h+': 'h+', 'k+': 'k+', });
lyr_SALGADA_9.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'falha': 'falha', 'linha': 'linha', 'talhão': 'talhão', 'compri': 'compri', });
lyr_AUDE_10.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Falha': 'Falha', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SALGADA_12.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_AUDE_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Linha': 'Linha', 'Talhão': 'Talhão', 'Comprimento (m)': 'Comprimento (m)', });
lyr_SEDE_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'linha': 'linha', 'talhões': 'talhões', 'medida': 'medida', });
lyr_NmerodeFalhasdePalntio_16.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_NmerodeLinhasdePlantio_17.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_AnodePlantio_18.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_Variedades_19.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_reaha_20.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_TalhesProdutivos_21.set('fieldAliases', {'fid': 'fid', 'Talhão': 'Talhão', 'Localizaç': 'Localizaç', 'Área (m)': 'Área (m)', 'Área (ha)': 'Área (ha)', 'Perimetro ': 'Perimetro ', 'Variedade': 'Variedade', 'Ano de Pla': 'Ano de Pla', 'Altitude M': 'Altitude M', 'Altitude M_1': 'Altitude M_1', ' Diferenç': ' Diferenç', 'N Linhas': 'N Linhas', 'N Falhas': 'N Falhas', });
lyr_UsoeOcupaoCAR_22.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'objectid': 'objectid', 'fid_uso_ca': 'fid_uso_ca', 'class': 'class', 'area_ha': 'area_ha', 'nome_class': 'nome_class', 'fid_gpl_mu': 'fid_gpl_mu', 'codmun': 'codmun', 'município': 'município', 'reggov': 'reggov', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_le_2': 'shape_le_2', 'shape_area': 'shape_area', });
lyr_CurvasdeNvel_23.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'id_objeto': 'id_objeto', 'cota': 'cota', 'depressao': 'depressao', 'geometriaa': 'geometriaa', 'indice': 'indice', 'shape_leng': 'shape_leng', });
lyr_UsoeOcupaoGeral_24.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'class_name': 'class_name', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_Nascentes_25.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'nome': 'nome', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_le_1': 'shape_le_1', 'shape_area': 'shape_area', });
lyr_Hidrografia_26.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'classe_dre': 'classe_dre', 'nome_dre': 'nome_dre', 'bacia_dr': 'bacia_dr', 'ordem': 'ordem', 'layer': 'layer', 'nome_bacia': 'nome_bacia', 'gd_bacias': 'gd_bacias', 'obs': 'obs', 'length': 'length', 'fid_': 'fid_', 'problemas': 'problemas', 'level': 'level', 'linetype': 'linetype', 'shape_leng': 'shape_leng', });
lyr_Al_3.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Ca_4.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_H_5.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_K_6.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_Mg_7.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_pH_8.set('fieldImages', {'fid': 'TextEdit', 'nome': 'TextEdit', 'localizaç': 'TextEdit', 'area_m': 'TextEdit', 'area_ha': 'TextEdit', 'perim_m': 'TextEdit', 'ph': 'TextEdit', 'ca (cmolc)': 'TextEdit', 'mg (cmolc)': 'TextEdit', 'al (cmolc)': 'TextEdit', 'h+': 'TextEdit', 'k+': 'TextEdit', });
lyr_SALGADA_9.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'falha': 'TextEdit', 'linha': 'TextEdit', 'talhão': 'TextEdit', 'compri': 'TextEdit', });
lyr_AUDE_10.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Falha': 'TextEdit', 'Linha': 'TextEdit', 'Talhão': 'TextEdit', 'Comprimento (m)': 'TextEdit', });
lyr_SALGADA_12.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': '', });
lyr_AUDE_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Linha': '', 'Talhão': '', 'Comprimento (m)': 'TextEdit', });
lyr_SEDE_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'linha': '', 'talhões': '', 'medida': '', });
lyr_NmerodeFalhasdePalntio_16.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_NmerodeLinhasdePlantio_17.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_AnodePlantio_18.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_Variedades_19.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_reaha_20.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_TalhesProdutivos_21.set('fieldImages', {'fid': 'TextEdit', 'Talhão': 'TextEdit', 'Localizaç': 'TextEdit', 'Área (m)': 'TextEdit', 'Área (ha)': 'TextEdit', 'Perimetro ': 'TextEdit', 'Variedade': 'TextEdit', 'Ano de Pla': 'TextEdit', 'Altitude M': 'TextEdit', 'Altitude M_1': 'TextEdit', ' Diferenç': 'TextEdit', 'N Linhas': 'TextEdit', 'N Falhas': 'TextEdit', });
lyr_UsoeOcupaoCAR_22.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'objectid': 'TextEdit', 'fid_uso_ca': 'TextEdit', 'class': 'TextEdit', 'area_ha': 'TextEdit', 'nome_class': 'TextEdit', 'fid_gpl_mu': 'TextEdit', 'codmun': 'TextEdit', 'município': 'TextEdit', 'reggov': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_le_2': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_CurvasdeNvel_23.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'id_objeto': 'TextEdit', 'cota': 'TextEdit', 'depressao': 'TextEdit', 'geometriaa': 'TextEdit', 'indice': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_UsoeOcupaoGeral_24.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'class_name': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Nascentes_25.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'nome': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_le_1': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Hidrografia_26.set('fieldImages', {'fid': '', 'ogc_fid': '', 'classe_dre': '', 'nome_dre': '', 'bacia_dr': '', 'ordem': '', 'layer': '', 'nome_bacia': '', 'gd_bacias': '', 'obs': '', 'length': '', 'fid_': '', 'problemas': '', 'level': '', 'linetype': '', 'shape_leng': '', });
lyr_Al_3.set('fieldLabels', {});
lyr_Ca_4.set('fieldLabels', {});
lyr_H_5.set('fieldLabels', {});
lyr_K_6.set('fieldLabels', {});
lyr_Mg_7.set('fieldLabels', {});
lyr_pH_8.set('fieldLabels', {});
lyr_SALGADA_9.set('fieldLabels', {});
lyr_AUDE_10.set('fieldLabels', {});
lyr_SEDE_11.set('fieldLabels', {});
lyr_SALGADA_12.set('fieldLabels', {});
lyr_AUDE_13.set('fieldLabels', {});
lyr_SEDE_14.set('fieldLabels', {});
lyr_NmerodeFalhasdePalntio_16.set('fieldLabels', {});
lyr_NmerodeLinhasdePlantio_17.set('fieldLabels', {});
lyr_AnodePlantio_18.set('fieldLabels', {});
lyr_Variedades_19.set('fieldLabels', {});
lyr_reaha_20.set('fieldLabels', {});
lyr_TalhesProdutivos_21.set('fieldLabels', {});
lyr_UsoeOcupaoCAR_22.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'objectid': 'no label', 'fid_uso_ca': 'no label', 'class': 'inline label', 'area_ha': 'no label', 'nome_class': 'no label', 'fid_gpl_mu': 'no label', 'codmun': 'no label', 'município': 'no label', 'reggov': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_le_2': 'no label', 'shape_area': 'no label', });
lyr_CurvasdeNvel_23.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'id_objeto': 'no label', 'cota': 'inline label', 'depressao': 'no label', 'geometriaa': 'no label', 'indice': 'no label', 'shape_leng': 'no label', });
lyr_UsoeOcupaoGeral_24.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'class_name': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_Nascentes_25.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'nome': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_le_1': 'no label', 'shape_area': 'no label', });
lyr_Hidrografia_26.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'classe_dre': 'no label', 'nome_dre': 'no label', 'bacia_dr': 'no label', 'ordem': 'no label', 'layer': 'no label', 'nome_bacia': 'no label', 'gd_bacias': 'no label', 'obs': 'no label', 'length': 'no label', 'fid_': 'no label', 'problemas': 'no label', 'level': 'no label', 'linetype': 'no label', 'shape_leng': 'no label', });
lyr_Hidrografia_26.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});