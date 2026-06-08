import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2, 
  MonitorPlay, 
  Search, 
  BellRing, 
  Target, 
  Car,
  Users,
  UsersRound,
  Link,
  ShieldAlert,
  MapPin,
  Activity
} from 'lucide-react';
import styles from './Sidebar.module.css';

const mainNavItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/analytics-reports', label: 'Analytics & Reports', icon: BarChart2 },
  { path: '/live-cameras', label: 'Live Monitoring', icon: MonitorPlay },
  { path: '/nvr', label: 'Search & Investigation', icon: Search },
  { path: '/alerts', label: 'Alerts', icon: BellRing, badge: 1 },
  { path: '/detection-analytics', label: 'Detections', icon: Target },
  { path: '/parking-management', label: 'Parking Management', icon: Car },
  { path: '/occupancy', label: 'Occupancy', icon: Activity },
];

const settingsNavItems = [
  { path: '/user-management', label: 'User Management', icon: Users },
  { path: '/groups', label: 'Groups', icon: UsersRound },
  { path: '/escalation-chain', label: 'Escalation chain', icon: Link },
  { path: '/alert-rules', label: 'Alert Rules', icon: ShieldAlert },
  { path: '/manage-locations', label: 'Manage locations', icon: MapPin },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className={styles.logoContainer}>
        {/* Mocking the du Tech logo using text for now to match colors */}
        <div className={styles.logo}>
          <div className={styles.logoIcon}>du</div>
          <span className={styles.logoText}>Tech</span>
        </div>
      </div>

      <div className={styles.searchContainer}>
        <div className={styles.searchBox}>
          <Search size={16} className={styles.searchIcon} />
          <input type="text" placeholder="Search" className={styles.searchInput} />
        </div>
      </div>

      <nav className={styles.navSection}>
        <ul className={styles.navList}>
          {mainNavItems.map(item => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
              >
                <div className={styles.navItemContent}>
                  <item.icon size={20} className={styles.navIcon} />
                  <span>{item.label}</span>
                </div>
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className={styles.settingsHeader}>SETTINGS</div>
        <ul className={styles.navList}>
          {settingsNavItems.map(item => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                className={({isActive}) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}
              >
                <div className={styles.navItemContent}>
                  <item.icon size={20} className={styles.navIcon} />
                  <span>{item.label}</span>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
