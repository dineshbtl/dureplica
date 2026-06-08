import React from 'react';
import { ChevronDown, Search, Maximize2, Camera, Wifi } from 'lucide-react';
import { liveCameras } from '../data/mockData';
import styles from './LiveMonitoring.module.css';

export default function LiveMonitoring() {
  return (
    <div className={styles.monitoringContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Live Monitoring</h1>
        <p className={styles.subtitle}>All camera feeds in one view with zone-based filtering</p>
      </div>

      <div className={styles.controlsBar}>
        <div className={styles.filtersLeft}>
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>All Sites</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
          
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>All Zones</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.searchBox}>
            <Search size={16} className={styles.searchIcon} />
            <input type="text" placeholder="Search car" className={styles.searchInput} />
          </div>
        </div>

        <div className={styles.filtersRight}>
          <div className={`${styles.statusBadge} ${styles.badgePurple}`}>
            <Camera size={14} />
            <span>2</span>
          </div>
          <div className={`${styles.statusBadge} ${styles.badgeGreen}`}>
            <Wifi size={14} />
            <span>2</span>
          </div>
          <div className={`${styles.statusBadge} ${styles.badgeRed}`}>
            <Wifi size={14} />
            <div className={styles.strikeThrough}></div>
            <span>0</span>
          </div>

          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>1 X 2 Grid</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <button className={styles.fullScreenBtn}>
            Full Screen View
          </button>
        </div>
      </div>

      <div className={styles.cameraGrid}>
        {liveCameras.map((cam) => (
          <div key={cam.id} className={styles.cameraCard}>
            <div className={styles.videoWrapper}>
              <img src={cam.thumbnail} alt={cam.name} className={styles.videoPlaceholder} />
              
              <div className={styles.videoOverlaysTop}>
                <div className={styles.liveTag}>
                  <span className={styles.liveDot}></span>
                  LIVE
                </div>
                <div className={styles.onlineTag}>Online</div>
                
                <button className={styles.expandBtn}>
                  <Maximize2 size={12} color="white" />
                </button>
              </div>

              <div className={styles.videoTimestamp}>
                {cam.timestamp}
              </div>
            </div>

            <div className={styles.cameraInfo}>
              <div className={styles.cameraDetails}>
                <p className={styles.cameraId}>{cam.id}</p>
                <p className={styles.cameraName}>{cam.name}</p>
              </div>
              <div className={styles.zoneDetails}>
                <p className={styles.zoneLabel}>Parking Zone</p>
                <p className={styles.zoneName}>{cam.zone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
