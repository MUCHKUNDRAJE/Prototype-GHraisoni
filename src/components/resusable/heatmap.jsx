import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, useMapEvent, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { HeatmapLayer } from "react-leaflet-heatmap-layer-v3";
import L from "leaflet";
import "leaflet-spline";
import { GetApiCall } from "../../utils/Interceptor";
import axios from "axios";

const cityCoordinates = {
  Mahal: [21.1498, 79.0806],
  Itwari: [21.15484, 79.11225],
  Sadar: [21.14548, 79.11989],
  Dharampeth: [21.158, 79.09662],
};

const heatmapData = [
    [21.1580, 79.09662, 0.5],
    [21.1350, 79.0845, 0.6],
    [21.1500, 79.0970, 0.7],
    [21.1600, 79.0780, 0.8],
    [21.1600, 79.0780, 0.7],
    [21.1700, 79.0900, 0.6],
    [21.1380, 79.0980, 0.5],
    [21.1450, 79.0800, 0.6],
    [21.1560, 79.0850, 0.7],
    [21.1705, 79.0895, 0.8],
    [21.1150, 79.1000, 0.5],
    [21.1250, 79.1100, 0.6],
    [21.1300, 79.1200, 0.7],
    [21.1455, 79.1300, 0.8],
    [21.1600, 79.1350, 0.9],
    [21.1305, 79.0900, 0.7],
    [21.1255, 79.0850, 0.6],
    [21.1450, 79.0825, 0.5],
    [21.1550, 79.0920, 0.8],
    [21.1355, 79.0700, 0.6],
    [21.1258, 79.0720, 0.5],
    [21.1455, 79.0650, 0.7],
    [21.1550, 79.0680, 0.6],
    [21.1508, 79.0805, 0.4],
    [21.1625, 79.0910, 0.6],
    [21.1750, 79.0850, 0.8],
    [21.1800, 79.0950, 0.7],
    [21.1800, 79.1000, 0.6],
    [21.1700, 79.1100, 0.7],
    [21.1600, 79.1200, 0.8],
    [21.1550, 79.1250, 0.6],
    [21.1155, 79.0800, 0.5],
    [21.1250, 79.0750, 0.6],
    [21.1355, 79.0850, 0.7],
    [21.1450, 79.0900, 0.8],
    [21.1650, 79.1000, 0.7],
    [21.1750, 79.0950, 0.6],
    [21.1800, 79.0900, 0.8],
    [21.1555, 79.1025, 0.9],
    [21.1550, 79.1125, 0.5],
    [21.1455, 79.1200, 0.6],
    [21.1350, 79.1275, 0.7],
    [21.1255, 79.1350, 0.6],
    [21.1550, 79.1250, 0.7],
    [21.1650, 79.1200, 0.6],
    [21.1700, 79.1100, 0.8],
    [21.1800, 79.1000, 0.9],
    [21.1100, 79.0800, 0.6],
    [21.1000, 79.0750, 0.7],
    [21.0900, 79.0700, 0.8],
    [21.0850, 79.0650, 0.9],
    [21.1755, 79.0550, 0.6],
    [21.1850, 79.0500, 0.7],
    [21.1950, 79.0450, 0.8],
    [21.2000, 79.0400, 0.6],
    [21.2050, 79.0350, 0.7],
];



const nagpurBorders = [
  [21.0700, 79.0500], [21.0700, 79.1300], [21.2300, 79.1300],
  [21.2300, 79.0500], [21.0700, 79.0500],
];

const NagpurHeatmap = ({ selectedCity, showAddPopup }) => {
  const [radius, setRadius] = useState(60);
   console.log(showAddPopup)

   const fetchVisualizationData = async () => {
    try {
      const response = await axios.get('http://192.168.155.48:8000/api/get-visualization-data/');
    //   console.log('Visualization Data:', response.data);
    
    } catch (error) {
      console.error('Error fetching visualization data:', error);
    }
  };
  
  // Call the function
  fetchVisualizationData();





  const MapZoomHandler = () => {
    const map = useMap();
    useEffect(() => {
      const updateRadius = () => {
        const zoom = map.getZoom();
        if (zoom <= 12) setRadius(40);
        else if (zoom <= 14) setRadius(60);
        else if (zoom <= 16) setRadius(80);
        else setRadius(100);
      };
      map.on("zoomend", updateRadius);
      updateRadius();
      return () => map.off("zoomend", updateRadius);
    }, [map]);

    useEffect(() => {
      if (selectedCity && cityCoordinates[selectedCity]) {
        map.setView(cityCoordinates[selectedCity], 15);
      }
    }, [selectedCity, map]);

    return null;
  };

  const CurvedNagpurBorder = () => {
    const map = useMap();
    useEffect(() => {
      const spline = L.spline(nagpurBorders, {
        color: "red",
        weight: 2,
        opacity: 0.7,
        dashArray: "5, 5",
      });
      spline.addTo(map);
      return () => map.removeLayer(spline);
    }, [map]);
    return null;
  };

  const ClickLogger = () => {
    const [clickedPosition, setClickedPosition] = useState(null);
    const [facilities, setFacilities] = useState(() => {
      const stored = localStorage.getItem("uhis");
      return stored ? JSON.parse(stored) : [];
    });
  
    const [formData, setFormData] = useState({
      name: "",
      contact: "",
      address: "",
    });
  
    const map = useMap();
  
    useMapEvent("click", (e) => {
      setClickedPosition([e.latlng.lat, e.latlng.lng]);
    });
  
    const handleAddFacility = () => {
      const newFacility = {
        ...formData,
        lat: clickedPosition[0],
        lng: clickedPosition[1],
      };
  
      const updatedFacilities = [...facilities, newFacility];
      setFacilities(updatedFacilities);
      localStorage.setItem("uhis", JSON.stringify(updatedFacilities));
      setClickedPosition(null);
      setFormData({ name: "", contact: "", address: "" });
    };
  
    return (
      <>
        {clickedPosition && (
          <Popup position={clickedPosition} onClose={() => setClickedPosition(null)}>
            <div className="w-48">
              <h2 className="font-semibold text-sm mb-2">Add UHI</h2>
              <label>Justification:</label>
              <input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border p-1 rounded w-full text-sm mb-2"
              />
              <button
                onClick={handleAddFacility}
                className="bg-blue-500 text-white px-2 py-1 text-sm rounded"
              >
                Add
              </button>
            </div>
          </Popup>
        )}
  
        {/* Display stored UHI as blue popups */}
        {facilities.map((facility, index) => (
          <Marker key={index} position={[facility.lat, facility.lng]} icon={L.divIcon({
            className: 'custom-blue-popup',
            html: `<div class="h-10 w-10 rounded-full bg-blue-500 border-2 border-white">
                   <img src=""https://lh3.googleusercontent.com/a/ACg8ocImUg6EdS9hTa2JqZDvptSBZL9gWRwJRNdNVbc_1bhvbjJNPA=s96-c" alt="" />
               </div>`
            ,
          })}>
            <Popup>
              <div  style={{padding:"10px"}}>
              {facility.name}
               <img src="" alt="" />
              </div>
            </Popup>
          </Marker>
        ))}
      </>
    );
  };
  
  
  
  

  return (
    <MapContainer
      center={[21.1458, 79.0882]}
      zoom={13}
      minZoom={13}
      maxZoom={18}
      className="z-0"
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <HeatmapLayer
        points={heatmapData}
        longitudeExtractor={(m) => m[1]}
        latitudeExtractor={(m) => m[0]}
        intensityExtractor={(m) => m[2]}
        radius={radius}
        blur={15}
        max={1.0}
      />

      {Object.entries(cityCoordinates).map(([city, coords]) => (
        <Marker key={city} position={coords}>
          <Popup>{city}</Popup>
        </Marker>
      ))}

      {showAddPopup && (
        <Marker position={[21.1458, 79.0882]}>
          <Popup>
            <div className="w-48">
              <h2 className="font-semibold text-sm mb-2">Add UHI</h2>
              <label>Facility name:</label>
              <input className="border p-1 rounded w-full text-sm mb-2" />
              <label>Contact:</label>
              <input className="border p-1 rounded w-full text-sm mb-2" />
              <label>Address:</label>
              <input className="border p-1 rounded w-full text-sm mb-2" />
              <button className="bg-blue-500 text-white px-2 py-1 text-sm rounded">Add</button>
            </div>
          </Popup>
        </Marker>
      )}

      <MapZoomHandler />
      <CurvedNagpurBorder />
      <ClickLogger />
    </MapContainer>
  );
};

export default NagpurHeatmap;
