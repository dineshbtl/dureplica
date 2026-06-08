import React from 'react';
import styles from './MetricCard.module.css';

export default function MetricCard({ title, value, icon: Icon, color, bgColor }) {
  return (
    <button className={styles.metricCard}>
      <div className={styles.cardInner}>
        <p className={styles.cardTitle}>{title}</p>
        <div 
          className={styles.cardIconWrapper} 
          style={{ backgroundColor: bgColor }}
        >
          {Icon && <Icon size={20} color="white" />}
        </div>
        <p className={styles.cardValue}>
          <span style={{ color: color }}>{value}</span>
        </p>
      </div>
    </button>
  );
}
