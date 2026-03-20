var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_tracts_45_mile_1 = new ol.format.GeoJSON();
var features_tracts_45_mile_1 = format_tracts_45_mile_1.readFeatures(json_tracts_45_mile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracts_45_mile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracts_45_mile_1.addFeatures(features_tracts_45_mile_1);
var lyr_tracts_45_mile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tracts_45_mile_1, 
                style: style_tracts_45_mile_1,
                popuplayertitle: 'tracts_45_mile',
                interactive: true,
    title: 'tracts_45_mile<br />\
    <img src="styles/legend/tracts_45_mile_1_0.png" /> 1127 - 2326<br />\
    <img src="styles/legend/tracts_45_mile_1_1.png" /> 2326 - 2829<br />\
    <img src="styles/legend/tracts_45_mile_1_2.png" /> 2829 - 3509<br />\
    <img src="styles/legend/tracts_45_mile_1_3.png" /> 3509 - 4666<br />\
    <img src="styles/legend/tracts_45_mile_1_4.png" /> 4666 - 7742<br />' });
var format_buffer_45_miles45_mile_circle_2 = new ol.format.GeoJSON();
var features_buffer_45_miles45_mile_circle_2 = format_buffer_45_miles45_mile_circle_2.readFeatures(json_buffer_45_miles45_mile_circle_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffer_45_miles45_mile_circle_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffer_45_miles45_mile_circle_2.addFeatures(features_buffer_45_miles45_mile_circle_2);
var lyr_buffer_45_miles45_mile_circle_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buffer_45_miles45_mile_circle_2, 
                style: style_buffer_45_miles45_mile_circle_2,
                popuplayertitle: 'buffer_45_miles — 45_mile_circle',
                interactive: true,
                title: 'buffer_45_miles — 45_mile_circle'
            });
var format_illinois_golf_coursesgolf_coursesusa_3 = new ol.format.GeoJSON();
var features_illinois_golf_coursesgolf_coursesusa_3 = format_illinois_golf_coursesgolf_coursesusa_3.readFeatures(json_illinois_golf_coursesgolf_coursesusa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_illinois_golf_coursesgolf_coursesusa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_illinois_golf_coursesgolf_coursesusa_3.addFeatures(features_illinois_golf_coursesgolf_coursesusa_3);
var lyr_illinois_golf_coursesgolf_coursesusa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_illinois_golf_coursesgolf_coursesusa_3, 
                style: style_illinois_golf_coursesgolf_coursesusa_3,
                popuplayertitle: 'illinois_golf_courses — golf_coursesusa',
                interactive: true,
                title: '<img src="styles/legend/illinois_golf_coursesgolf_coursesusa_3.png" /> illinois_golf_courses — golf_coursesusa'
            });
var format_coursesoutside45milesdotsonly_4 = new ol.format.GeoJSON();
var features_coursesoutside45milesdotsonly_4 = format_coursesoutside45milesdotsonly_4.readFeatures(json_coursesoutside45milesdotsonly_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coursesoutside45milesdotsonly_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coursesoutside45milesdotsonly_4.addFeatures(features_coursesoutside45milesdotsonly_4);
var lyr_coursesoutside45milesdotsonly_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_coursesoutside45milesdotsonly_4, 
                style: style_coursesoutside45milesdotsonly_4,
                popuplayertitle: 'courses outside 45 miles — dots only',
                interactive: true,
                title: '<img src="styles/legend/coursesoutside45milesdotsonly_4.png" /> courses outside 45 miles — dots only'
            });
var format_45milecoursesbypublicprivate_5 = new ol.format.GeoJSON();
var features_45milecoursesbypublicprivate_5 = format_45milecoursesbypublicprivate_5.readFeatures(json_45milecoursesbypublicprivate_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45milecoursesbypublicprivate_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45milecoursesbypublicprivate_5.addFeatures(features_45milecoursesbypublicprivate_5);
var lyr_45milecoursesbypublicprivate_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45milecoursesbypublicprivate_5, 
                style: style_45milecoursesbypublicprivate_5,
                popuplayertitle: '45 mile courses by public private',
                interactive: true,
                title: '<img src="styles/legend/45milecoursesbypublicprivate_5.png" /> 45 mile courses by public private'
            });
var format_45milescoursesdotsonly_6 = new ol.format.GeoJSON();
var features_45milescoursesdotsonly_6 = format_45milescoursesdotsonly_6.readFeatures(json_45milescoursesdotsonly_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45milescoursesdotsonly_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45milescoursesdotsonly_6.addFeatures(features_45milescoursesdotsonly_6);
var lyr_45milescoursesdotsonly_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45milescoursesdotsonly_6, 
                style: style_45milescoursesdotsonly_6,
                popuplayertitle: '45 miles courses dots only',
                interactive: true,
                title: '<img src="styles/legend/45milescoursesdotsonly_6.png" /> 45 miles courses dots only'
            });
var format_45milecoursesby918holes_7 = new ol.format.GeoJSON();
var features_45milecoursesby918holes_7 = format_45milecoursesby918holes_7.readFeatures(json_45milecoursesby918holes_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45milecoursesby918holes_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45milecoursesby918holes_7.addFeatures(features_45milecoursesby918holes_7);
var lyr_45milecoursesby918holes_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45milecoursesby918holes_7, 
                style: style_45milecoursesby918holes_7,
                popuplayertitle: '45 mile courses by 9 18 holes',
                interactive: true,
                title: '<img src="styles/legend/45milecoursesby918holes_7.png" /> 45 mile courses by 9 18 holes'
            });
var format_45milecoursesbycoursename_8 = new ol.format.GeoJSON();
var features_45milecoursesbycoursename_8 = format_45milecoursesbycoursename_8.readFeatures(json_45milecoursesbycoursename_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_45milecoursesbycoursename_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_45milecoursesbycoursename_8.addFeatures(features_45milecoursesbycoursename_8);
var lyr_45milecoursesbycoursename_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_45milecoursesbycoursename_8, 
                style: style_45milecoursesbycoursename_8,
                popuplayertitle: '45 mile courses by course name',
                interactive: true,
                title: '<img src="styles/legend/45milecoursesbycoursename_8.png" /> 45 mile courses by course name'
            });
var format_country_hills_9 = new ol.format.GeoJSON();
var features_country_hills_9 = format_country_hills_9.readFeatures(json_country_hills_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_country_hills_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_country_hills_9.addFeatures(features_country_hills_9);
var lyr_country_hills_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_country_hills_9, 
                style: style_country_hills_9,
                popuplayertitle: 'country_hills',
                interactive: true,
                title: '<img src="styles/legend/country_hills_9.png" /> country_hills'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_tracts_45_mile_1.setVisible(true);lyr_buffer_45_miles45_mile_circle_2.setVisible(true);lyr_illinois_golf_coursesgolf_coursesusa_3.setVisible(true);lyr_coursesoutside45milesdotsonly_4.setVisible(true);lyr_45milecoursesbypublicprivate_5.setVisible(true);lyr_45milescoursesdotsonly_6.setVisible(true);lyr_45milecoursesby918holes_7.setVisible(true);lyr_45milecoursesbycoursename_8.setVisible(true);lyr_country_hills_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_tracts_45_mile_1,lyr_buffer_45_miles45_mile_circle_2,lyr_illinois_golf_coursesgolf_coursesusa_3,lyr_coursesoutside45milesdotsonly_4,lyr_45milecoursesbypublicprivate_5,lyr_45milescoursesdotsonly_6,lyr_45milecoursesby918holes_7,lyr_45milecoursesbycoursename_8,lyr_country_hills_9];
lyr_tracts_45_mile_1.set('fieldAliases', {'fid': 'fid', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'pop-densit': 'pop-densit', 'Population Data Points_County': 'Population Data Points_County', 'Population Data Points_pop': 'Population Data Points_pop', });
lyr_buffer_45_miles45_mile_circle_2.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_illinois_golf_coursesgolf_coursesusa_3.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_coursesoutside45milesdotsonly_4.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_45milecoursesbypublicprivate_5.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_45milescoursesdotsonly_6.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_45milecoursesby918holes_7.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_45milecoursesbycoursename_8.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_country_hills_9.set('fieldAliases', {'fid': 'fid', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Course': 'Course', 'City': 'City', 'Public': 'Public', 'Holes': 'Holes', 'Street': 'Street', 'City_1': 'City_1', 'State': 'State', 'Zip': 'Zip', 'Phone': 'Phone', 'field_12': 'field_12', 'field_13': 'field_13', 'field_14': 'field_14', });
lyr_tracts_45_mile_1.set('fieldImages', {'fid': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'pop-densit': 'TextEdit', 'Population Data Points_County': 'TextEdit', 'Population Data Points_pop': 'Range', });
lyr_buffer_45_miles45_mile_circle_2.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Course': 'TextEdit', 'City': 'TextEdit', 'Public': 'TextEdit', 'Holes': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Phone': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', });
lyr_illinois_golf_coursesgolf_coursesusa_3.set('fieldImages', {'fid': '', 'Longitude': '', 'Latitude': '', 'Course': '', 'City': '', 'Public': '', 'Holes': '', 'Street': '', 'City_1': '', 'State': '', 'Zip': '', 'Phone': '', 'field_12': '', 'field_13': '', 'field_14': '', });
lyr_coursesoutside45milesdotsonly_4.set('fieldImages', {'fid': '', 'Longitude': '', 'Latitude': '', 'Course': '', 'City': '', 'Public': '', 'Holes': '', 'Street': '', 'City_1': '', 'State': '', 'Zip': '', 'Phone': '', 'field_12': '', 'field_13': '', 'field_14': '', });
lyr_45milecoursesbypublicprivate_5.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Course': 'TextEdit', 'City': 'TextEdit', 'Public': 'TextEdit', 'Holes': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Phone': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', });
lyr_45milescoursesdotsonly_6.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Course': 'TextEdit', 'City': 'TextEdit', 'Public': 'TextEdit', 'Holes': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Phone': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', });
lyr_45milecoursesby918holes_7.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Course': 'TextEdit', 'City': 'TextEdit', 'Public': 'TextEdit', 'Holes': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Phone': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', });
lyr_45milecoursesbycoursename_8.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Course': 'TextEdit', 'City': 'TextEdit', 'Public': 'TextEdit', 'Holes': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Phone': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', });
lyr_country_hills_9.set('fieldImages', {'fid': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Course': 'TextEdit', 'City': 'TextEdit', 'Public': 'TextEdit', 'Holes': 'TextEdit', 'Street': 'TextEdit', 'City_1': 'TextEdit', 'State': 'TextEdit', 'Zip': 'TextEdit', 'Phone': 'TextEdit', 'field_12': 'TextEdit', 'field_13': 'TextEdit', 'field_14': 'TextEdit', });
lyr_tracts_45_mile_1.set('fieldLabels', {'fid': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'pop-densit': 'no label', 'Population Data Points_County': 'no label', 'Population Data Points_pop': 'no label', });
lyr_buffer_45_miles45_mile_circle_2.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_illinois_golf_coursesgolf_coursesusa_3.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_coursesoutside45milesdotsonly_4.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_45milecoursesbypublicprivate_5.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_45milescoursesdotsonly_6.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_45milecoursesby918holes_7.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_45milecoursesbycoursename_8.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_country_hills_9.set('fieldLabels', {'fid': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Course': 'no label', 'City': 'no label', 'Public': 'no label', 'Holes': 'no label', 'Street': 'no label', 'City_1': 'no label', 'State': 'no label', 'Zip': 'no label', 'Phone': 'no label', 'field_12': 'no label', 'field_13': 'no label', 'field_14': 'no label', });
lyr_country_hills_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});