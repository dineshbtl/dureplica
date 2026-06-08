import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin, BetweenVerticalStart, Cctv, EvCharger, Siren, Search, Maximize2 } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import styles from './Dashboard.module.css';
import { cameraMarkerIcon } from '../components/common/CameraMarkerIcon';

import MetricCard from '../components/common/MetricCard';

const metricCards = [
  {
    title: 'Total Locations',
    value: '01',
    icon: MapPin,
    color: '#4E80EE',
    bgColor: '#4E80EE'
  },
  {
    title: 'Bays Monitored',
    value: '02',
    icon: BetweenVerticalStart,
    color: '#7C5CFC',
    bgColor: '#7C5CFC'
  },
  {
    title: 'Cameras Online',
    value: '02',
    icon: Cctv,
    color: '#10B3A3',
    bgColor: '#10B3A3'
  },
  {
    title: 'Charger Occupancy',
    value: '100%',
    icon: EvCharger,
    color: '#4E80EE',
    bgColor: '#4E80EE'
  },
  {
    title: 'Alerts Triggered',
    value: '05',
    icon: Siren,
    color: '#EF4444',
    bgColor: '#EF4444'
  }
];

export default function Dashboard() {
  const [mapStyle, setMapStyle] = React.useState('Terrain');
  const mapCenter = [25.7533, 55.9786]; // Approximate coordinates from screenshot

  const tileLayers = {
    Terrain: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    Street: 'https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
    Satellite: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    Dark: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
  };

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Dashboard</h1>
        <p className={styles.subtitle}>Track & Manage the analytics</p>
      </div>

      <section className={styles.metricsSection}>
        {metricCards.map((card, idx) => (
          <MetricCard 
            key={idx}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
            bgColor={card.bgColor}
          />
        ))}
      </section>

      <section className={styles.mapSection}>
        <div className={styles.mapWrapper}>
          
          {/* Custom Map Overlays */}
          <div className={styles.mapSearchOverlay}>
            <div className={styles.mapSearchBox}>
              <Search size={18} className={styles.mapSearchIcon} />
              <input type="text" placeholder="Search Site" className={styles.mapSearchInput} />
            </div>
            <div className={styles.mapPill}>
              1 Sites | 2 Cameras
            </div>
          </div>

          <button className={styles.fullScreenBtn}>
            <Maximize2 size={16} />
            <span>Full Screen View</span>
          </button>

          {/* Map Layer Toggle */}
          <div className={styles.layerToggle}>
            {['Terrain', 'Street', 'Satellite', 'Dark'].map((style) => (
              <button 
                key={style}
                className={`${styles.layerBtn} ${mapStyle === style ? styles.layerBtnActive : ''}`}
                onClick={() => setMapStyle(style)}
              >
                {style}
              </button>
            ))}
          </div>

          <MapContainer 
            center={mapCenter} 
            zoom={13} 
            scrollWheelZoom={false} 
            className={styles.leafletMap}
            zoomControl={false}
          >
            <TileLayer
              key={mapStyle} // force re-render when style changes
              attribution='&copy; OpenStreetMap / ESRI / CartoDB'
              url={tileLayers[mapStyle]}
            />
            <Marker position={mapCenter} icon={cameraMarkerIcon}>
              <Popup>
                Site 1 <br /> 2 Cameras online.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </div>
  );
}
