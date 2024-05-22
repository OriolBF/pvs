
        var map = L.map('map', {
            zoomControl:true, maxZoom:28, minZoom:1
        }).fitBounds([[41.069771311932854,1.1104464734677135],[41.094504512012264,1.1653155165298141]]);
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        function removeEmptyRowsFromPopupContent(content, feature) {
         var tempDiv = document.createElement('div');
         tempDiv.innerHTML = content;
         var rows = tempDiv.querySelectorAll('tr');
         for (var i = 0; i < rows.length; i++) {
             var td = rows[i].querySelector('td.visible-with-data');
             var key = td ? td.id : '';
             if (td && td.classList.contains('visible-with-data') && feature.properties[key] == null) {
                 rows[i].parentNode.removeChild(rows[i]);
             }
         }
         return tempDiv.innerHTML;
        }
        document.querySelector(".leaflet-popup-pane").addEventListener("load", function(event) {
          var tagName = event.target.tagName,
            popup = map._popup;
          // Also check if flag is already set.
          if (tagName === "IMG" && popup && !popup._updated) {
            popup._updated = true; // Set flag to prevent looping.
            popup.update();
          }
        }, true);
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);
        function setBounds() {
        }
        map.createPane('pane_ESRItopogrfic_0');
        map.getPane('pane_ESRItopogrfic_0').style.zIndex = 400;
        var layer_ESRItopogrfic_0 = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
            pane: 'pane_ESRItopogrfic_0',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 20
        });
        layer_ESRItopogrfic_0;
        map.addLayer(layer_ESRItopogrfic_0);
        map.createPane('pane_ESRIsatllit_1');
        map.getPane('pane_ESRIsatllit_1').style.zIndex = 401;
        var layer_ESRIsatllit_1 = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            pane: 'pane_ESRIsatllit_1',
            opacity: 1.0,
            attribution: '',
            minZoom: 1,
            maxZoom: 28,
            minNativeZoom: 0,
            maxNativeZoom: 19
        });
        layer_ESRIsatllit_1;
        map.addLayer(layer_ESRIsatllit_1);
        function pop_reesdelsparcs_2(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['popup_2'] !== null ? autolinker.link(feature.properties['popup_2'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        function style_reesdelsparcs_2_0() {
            return {
                pane: 'pane_reesdelsparcs_2',
                opacity: 1,
                color: 'rgba(35,35,35,0.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 1.0, 
                fill: true,
                fillOpacity: 1,
                fillColor: 'rgba(14,128,6,0.6)',
                interactive: true,
            }
        }
        map.createPane('pane_reesdelsparcs_2');
        map.getPane('pane_reesdelsparcs_2').style.zIndex = 402;
        map.getPane('pane_reesdelsparcs_2').style['mix-blend-mode'] = 'normal';
        var layer_reesdelsparcs_2 = new L.geoJson(json_reesdelsparcs_2, {
            attribution: '',
            interactive: true,
            dataVar: 'json_reesdelsparcs_2',
            layerName: 'layer_reesdelsparcs_2',
            pane: 'pane_reesdelsparcs_2',
            onEachFeature: pop_reesdelsparcs_2,
            style: style_reesdelsparcs_2_0,
        });
        bounds_group.addLayer(layer_reesdelsparcs_2);
        map.addLayer(layer_reesdelsparcs_2);
        function pop_Parcsverds_3(feature, layer) {
            var popupContent = '<table>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['popup'] !== null ? autolinker.link(feature.properties['popup'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
            var popup = layer.getPopup();
            var content = popup.getContent();
            var updatedContent = removeEmptyRowsFromPopupContent(content, feature);
            popup.setContent(updatedContent);
        }

        function style_Parcsverds_3_0() {
            return {
                pane: 'pane_Parcsverds_3',
        rotationAngle: 0.0,
        rotationOrigin: 'center center',
        icon: L.icon({
            iconUrl: 'map/markers/Parcsverds_3.svg',
            iconSize: [22.799999999999997, 22.799999999999997]
        }),
                interactive: true,
            }
        }
        map.createPane('pane_Parcsverds_3');
        map.getPane('pane_Parcsverds_3').style.zIndex = 403;
        map.getPane('pane_Parcsverds_3').style['mix-blend-mode'] = 'normal';
        var layer_Parcsverds_3 = new L.geoJson(json_Parcsverds_3, {
            attribution: '',
            interactive: true,
            dataVar: 'json_Parcsverds_3',
            layerName: 'layer_Parcsverds_3',
            pane: 'pane_Parcsverds_3',
            onEachFeature: pop_Parcsverds_3,
            pointToLayer: function (feature, latlng) {
                var context = {
                    feature: feature,
                    variables: {}
                };
                return L.marker(latlng, style_Parcsverds_3_0(feature));
            },
        });
        bounds_group.addLayer(layer_Parcsverds_3);
        map.addLayer(layer_Parcsverds_3);
            var title = new L.Control();
            title.onAdd = function (map) {
                this._div = L.DomUtil.create('div', 'info');
                this.update();
                return this._div;
            };
            title.update = function () {
                this._div.innerHTML = '<h2>Parcs de Salou</h2>';
            };
            title.addTo(map);
        var baseMaps = {};
        var overlaysTree = [
            {label: '<img src="map/legend/Parcsverds_3.png" /> Parcs verds', layer: layer_Parcsverds_3},
            {label: '<img src="map/legend/reesdelsparcs_2.png" /> Àrees dels parcs', layer: layer_reesdelsparcs_2},
            {label: "ESRI satèl·lit", layer: layer_ESRIsatllit_1},
            {label: "ESRI topogràfic", layer: layer_ESRItopogrfic_0},]
        var lay = L.control.layers.tree(null, overlaysTree,{
            //namedToggle: true,
            //selectorBack: false,
            //closedSymbol: '&#8862; &#x1f5c0;',
            //openedSymbol: '&#8863; &#x1f5c1;',
            //collapseAll: 'Collapse all',
            //expandAll: 'Expand all',
            collapsed: true,
        });
        lay.addTo(map);
        setBounds();

