import React from 'react';
import { Bell } from 'lucide-react';
import styles from './TopNav.module.css';

export default function TopNav() {
  return (
    <header className="top-header">
      <div className={styles.leftSection}>
        <div className={styles.appLogo}>
          <span className={styles.appLogoText}>uav</span>
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <button className={styles.notificationBtn} aria-label="Notifications">
          <Bell size={20} />
          <span className={styles.notificationBadge}>6</span>
        </button>

        <div className={styles.userProfile}>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Yesh Reddy</p>
            <p className={styles.userRole}>Admin</p>
          </div>
          <div className={styles.avatarContainer}>
            <div className={styles.avatar}>YR</div>
            <span className={styles.statusDot}></span>
          </div>
        </div>
      </div>
    </header>
  );
}
