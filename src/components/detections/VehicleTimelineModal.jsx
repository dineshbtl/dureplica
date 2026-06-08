import React from 'react';
import { ArrowLeft } from 'lucide-react';
import styles from './VehicleTimelineModal.module.css';

export default function VehicleTimelineModal({ vehicle, onGoBack }) {
  if (!vehicle) return null;

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={onGoBack}>
        <ArrowLeft size={16} />
        Go Back
      </button>

      <div className={styles.timelineWrapper}>
        <div className={styles.timelineLine}></div>
        
        <div className={styles.timelineEvent}>
          <div className={styles.dotOccupiedWrapper}>
            <div className={styles.dotOccupied}></div>
          </div>
          <div className={styles.eventCardOccupied}>
            <p className={styles.eventLabel}>Bay Occupied At</p>
            <p className={styles.eventTimeOccupied}>{vehicle.occupied}</p>
          </div>
        </div>

        <div className={styles.timelineEvent}>
          <div className={styles.dotDepartedWrapper}>
            <div className={styles.dotDeparted}></div>
          </div>
          <div className={styles.eventCardDeparted}>
            <p className={styles.eventLabel}>Departures from Bay</p>
            <p className={styles.eventTimeDeparted}>{vehicle.departed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
