"use client";

import { useState } from "react";
import { 
  MapContainer, 
  TileLayer, 
  Marker, 
  Popup, 
  Polyline
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ambulanceIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div style="background-color: #0066FF; width: 40px; height: 40px; border-radius: 12px; display: flex; items-center: center; justify-content: center; box-shadow: 0 0 20px rgba(0,102,255,0.6); border: 2px solid white;">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 10 7 7M14 14l3 3M7 14l-3 3M17 7l3 3M2 9v11l2 2h16l2-2V9M7 18h0M17 18h0M12 2v7"/></svg>
         </div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const hospitalIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: #FF3B30; width: 40px; height: 40px; border-radius: 12px; display: flex; items-center: center; justify-content: center; box-shadow: 0 0 20px rgba(255,59,48,0.6); border: 2px solid white;">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.8A2.4 2.4 0 0 0 2.4 5.2V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5.2a2.4 2.4 0 0 0-2.4-2.4H4.8Z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>
           </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
});

export default function MapView() {
  const [position] = useState<[number, number]>([28.6139, 77.2090]); // Delhi defaults
  const [route] = useState<[number, number][]>([
    [28.6139, 77.2090],
    [28.6250, 77.2200],
    [28.6350, 77.2300],
    [28.6450, 77.2450],
  ]);

  return (
    <div className="h-full w-full rounded-3xl overflow-hidden glass border border-white/5 relative">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false} 
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
        
        <Marker position={position} icon={ambulanceIcon}>
          <Popup>Ambulance V-102</Popup>
        </Marker>

        <Marker position={[28.6450, 77.2450]} icon={hospitalIcon}>
          <Popup>City Hospital ER</Popup>
        </Marker>

        <Polyline 
            positions={route} 
            color="#0066FF" 
            weight={6} 
            opacity={0.6}
            dashArray="10, 10"
        />
      </MapContainer>
      
      {/* HUD Overlays */}
      <div className="absolute top-6 left-6 z-10 space-y-2 pointer-events-none">
          <div className="glass px-4 py-2 rounded-xl text-xs font-bold text-white/80 border border-primary/20 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Satellite Link Active
          </div>
          <div className="glass px-4 py-2 rounded-xl text-xs font-bold text-white/50 border border-white/10 uppercase tracking-widest">
              GPS: 28.6139° N, 77.2090° E
          </div>
      </div>
    </div>
  );
}
