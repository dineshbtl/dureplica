import React from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';

const CameraMarkerJSX = () => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '60px', height: '140px', position: 'relative' }}>
    {/* Info badge */}
    <div style={{ width: '18px', height: '18px', backgroundColor: '#10B3A3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '11px', fontWeight: 'bold', zIndex: 10, marginBottom: '-4px', border: '1px solid white' }}>
      i
    </div>
    
    {/* Black module */}
    <div style={{ position: 'relative', width: '28px', height: '54px', backgroundColor: '#1A1F2E', borderRadius: '14px', border: '3px solid #10B3A3', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 5, boxShadow: '0 4px 6px rgba(0,0,0,0.3)' }}>
      
      {/* udev text */}
      <span style={{ color: 'white', fontSize: '9px', fontWeight: 'bold', letterSpacing: '1px', transform: 'rotate(-90deg)' }}>udev</span>
      
      {/* Lightning badge */}
      <div style={{ position: 'absolute', right: '-10px', bottom: '8px', width: '18px', height: '18px', backgroundColor: '#10B3A3', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: '2px solid white' }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
      </div>

      {/* Solar Panel & Camera Arm */}
      <div style={{ position: 'absolute', right: '-26px', top: '2px', width: '30px', height: '24px' }}>
        {/* Arm */}
        <div style={{ position: 'absolute', left: '-2px', top: '10px', width: '16px', height: '3px', backgroundColor: '#374151', transform: 'rotate(-25deg)', transformOrigin: 'left center' }}></div>
        {/* Solar Panel */}
        <div style={{ position: 'absolute', left: '10px', top: '-4px', width: '20px', height: '8px', backgroundColor: '#0284C7', border: '1px solid #0369A1', transform: 'rotate(-25deg)', borderRadius: '1px', boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.4)' }}></div>
        {/* Camera Base */}
        <div style={{ position: 'absolute', left: '12px', top: '12px', width: '8px', height: '10px', backgroundColor: '#1A1F2E', borderRadius: '2px', transform: 'rotate(15deg)' }}></div>
        {/* Camera Lens */}
        <div style={{ position: 'absolute', left: '13px', top: '19px', width: '6px', height: '4px', backgroundColor: '#9CA3AF', borderRadius: '1px', transform: 'rotate(15deg)' }}></div>
      </div>
    </div>

    {/* Pole */}
    <div style={{ width: '6px', height: '50px', background: 'linear-gradient(to right, #9CA3AF, #F3F4F6, #9CA3AF)', borderLeft: '1px solid #6B7280', borderRight: '1px solid #6B7280', zIndex: 4, marginTop: '-2px' }}></div>

    {/* Base cylinder */}
    <div style={{ width: '20px', height: '26px', backgroundColor: '#10B3A3', borderRadius: '4px', zIndex: 5, marginTop: '-2px', border: '1px solid #0D9488', boxShadow: 'inset 3px 0 5px rgba(255,255,255,0.3), inset -3px 0 5px rgba(0,0,0,0.2)' }}></div>

    {/* Ground circle */}
    <div style={{ position: 'absolute', bottom: '2px', left: '50%', transform: 'translateX(-50%)', width: '36px', height: '12px', backgroundColor: 'rgba(255,255,255,0.9)', border: '2px solid #E5E7EB', borderRadius: '50%', zIndex: 3, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></div>
  </div>
);

export const cameraMarkerIcon = new L.divIcon({
  className: '', // pass empty string to remove default Leaflet styles
  html: renderToString(<CameraMarkerJSX />),
  iconSize: [60, 140],
  iconAnchor: [30, 134], // Anchor near the bottom (at the ground circle)
  popupAnchor: [0, -140],
});
