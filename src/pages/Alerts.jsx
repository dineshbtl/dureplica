import React from 'react';
import { ShieldAlert, Activity, CheckCircle, ChevronDown, Filter } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { alertsData } from '../data/mockData';
import styles from './Alerts.module.css';

const alertCards = [
  { title: 'Total Alerts', value: '05', icon: ShieldAlert, color: '#1A1F2E', bgColor: '#4E80EE' },
  { title: 'Active', value: '01', icon: Activity, color: '#1A1F2E', bgColor: '#EF4444' },
  { title: 'Acknowledged', value: '04', icon: CheckCircle, color: '#1A1F2E', bgColor: '#112469' }
];

const columns = [
  { 
    header: 'Alert Title', 
    accessor: 'title', 
    sortable: true,
    render: (val) => <span className={styles.alertTitleText}>{val}</span>
  },
  { 
    header: 'Priority', 
    accessor: 'priority', 
    sortable: true,
    render: (val) => (
      <span className={val === 'High' ? styles.priorityHigh : styles.priorityNormal}>
        {val}
      </span>
    )
  },
  { header: 'Site Name', accessor: 'site', sortable: true },
  { header: 'Camera', accessor: 'camera', sortable: true }
];

export default function Alerts() {
  return (
    <div className={styles.alertsContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Alerts</h1>
        <p className={styles.subtitle}>Monitor and manage all security alerts</p>
      </div>

      <section className={styles.metricsSection}>
        {alertCards.map((card, idx) => (
          <div key={idx} className={styles.cardWrapper}>
            <MetricCard 
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
              bgColor={card.bgColor}
            />
          </div>
        ))}
      </section>

      <div className={styles.controlsBar}>
        <div className={styles.filtersLeft}>
          <button className={styles.filterBtn}>
            <Filter size={16} />
          </button>
          
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>Select Column</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Search Alerts..." className={styles.searchInput} />
          </div>
        </div>

        <div className={styles.filtersRight}>
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>All Sites</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
          
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>Actions</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={alertsData} />
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.searchIcon}>
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}
