import React from 'react';
import styles from './PlaceholderPage.module.css';

export default function PlaceholderPage({ title }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>Track & Manage {title.toLowerCase()}</p>
      </div>
      
      <div className={styles.contentCard}>
        <div className={styles.emptyState}>
          <div className={styles.iconWrapper}>
            {/* simple placeholder icon */}
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#B8BCC6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </div>
          <h3>{title} Data</h3>
          <p>This page is currently showing mock placeholder data. The specific layout for {title} will be constructed soon.</p>
        </div>
      </div>
    </div>
  );
}
