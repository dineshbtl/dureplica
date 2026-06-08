import React from 'react';
import { MapPin, Navigation, Clock, Timer } from 'lucide-react';
import styles from './VehicleInfoModal.module.css';

export default function VehicleInfoModal({ vehicle, onViewTimeline }) {
  if (!vehicle) return null;

  return (
    <div className={styles.container}>
      <div className={styles.registrationCard}>
        <div className={styles.regInfo}>
          <span className={styles.regLabel}>REGISTRATION</span>
          <span className={styles.regValue}>{vehicle.plate}</span>
        </div>
        <button className={styles.timelineBtn} onClick={onViewTimeline}>
          View Timeline
        </button>
      </div>

      <div className={styles.imageWrapper}>
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop" 
          alt="Vehicle" 
          className={styles.vehicleImage} 
        />
        <div className={styles.boundingWrapper}>
          <div className={styles.boundingBox}></div>
          <span className={styles.plateOverlay}>{vehicle.plate}</span>
        </div>
      </div>
      <p className={styles.zoomHint}>Double-click the image to zoom, then drag it while zoomed.</p>

      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <MapPin size={14} className={styles.infoIcon} />
            <span className={styles.infoLabel}>SITE NAME</span>
          </div>
          <p className={styles.infoValue}>RAKTA</p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <Navigation size={14} className={styles.infoIcon} />
            <span className={styles.infoLabel}>EMIRATES</span>
          </div>
          <p className={styles.infoValue}>{vehicle.emirate}</p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <Clock size={14} className={styles.infoIcon} />
            <span className={styles.infoLabel}>BAY OCCUPIED AT</span>
          </div>
          <p className={styles.infoValue}>{vehicle.occupied}</p>
        </div>

        <div className={styles.infoCard}>
          <div className={styles.infoHeader}>
            <Timer size={14} className={styles.infoIcon} />
            <span className={styles.infoLabel}>DEPARTURES FROM BAY</span>
          </div>
          <p className={styles.infoValue}>{vehicle.departed}</p>
        </div>
      </div>
    </div>
  );
}
