import React from 'react';
import styles from './Occupancy.module.css';

const TimelineCard = ({ title, segments, isCurrentOccupied }) => {
  const hours = Array.from({ length: 25 }, (_, i) => i);

  return (
    <div className={styles.bayCard}>
      <div className={styles.cardHeader}>
        <div className={styles.dot}></div>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>

      <div className={styles.timelineSection}>
        <div className={styles.timelineTrack}>
          {segments.map((seg, idx) => (
            <div 
              key={idx} 
              className={`${styles.segment} ${styles[seg.color]}`} 
              style={{ width: `${seg.percentage}%` }}
              title={`${seg.percentage}%`}
            ></div>
          ))}
        </div>

        <div className={styles.timeMarkers}>
          {hours.map(hour => (
            <div key={hour} className={styles.marker}>
              <div className={styles.markerLine}></div>
              <span>{hour.toString().padStart(2, '0')}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.legendContainer}>
        <div className={`${styles.legendItem} ${isCurrentOccupied ? styles.currentOccupied : ''}`}>
          <div className={`${styles.legendDot} ${isCurrentOccupied ? styles.red : styles.green}`}></div>
          <span>Current: {isCurrentOccupied ? 'Occupied' : 'Vacant'}</span>
        </div>
        
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.red}`}></div>
          <span>Occupied</span>
        </div>
        
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.green}`}></div>
          <span>Vacant / Empty</span>
        </div>
        
        <div className={styles.legendItem}>
          <div className={`${styles.legendDot} ${styles.gray}`}></div>
          <span>Unknown / Future</span>
        </div>
      </div>
    </div>
  );
};

export default function Occupancy() {
  // Mock data to match the visual representation in the image
  const bay1Segments = [
    { color: 'gray', percentage: 10 },
    { color: 'green', percentage: 15 },
    { color: 'red', percentage: 10 },
    { color: 'green', percentage: 25 },
    { color: 'red', percentage: 5 },
    { color: 'green', percentage: 10 },
    { color: 'red', percentage: 8 },
    { color: 'green', percentage: 15 },
    { color: 'red', percentage: 2 }
  ];

  const bay2Segments = [
    { color: 'gray', percentage: 10 },
    { color: 'green', percentage: 40 },
    { color: 'red', percentage: 5 },
    { color: 'green', percentage: 5 },
    { color: 'red', percentage: 10 },
    { color: 'green', percentage: 15 },
    { color: 'red', percentage: 5 }
  ];

  return (
    <div className={styles.occupancyContainer}>
      <TimelineCard 
        title="Bay 1 Occupancy" 
        segments={bay1Segments} 
        isCurrentOccupied={true} 
      />
      <TimelineCard 
        title="Bay 2 Occupancy" 
        segments={bay2Segments} 
        isCurrentOccupied={true} 
      />
    </div>
  );
}
