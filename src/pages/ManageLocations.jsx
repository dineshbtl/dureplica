import React from 'react';
import { MapPin, Plus, ChevronDown, Filter } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { locationsData } from '../data/mockData';
import styles from './ManageLocations.module.css';

const locationCards = [
  { title: 'Total Locations', value: '01', icon: MapPin, color: '#1A1F2E', bgColor: '#4E80EE' }
];

const columns = [
  { header: 'Location Name', accessor: 'name', sortable: true },
  { header: 'Address', accessor: 'address', sortable: false },
  { header: 'Cameras', accessor: 'cameras', sortable: true },
  { 
    header: 'Status', 
    accessor: 'status', 
    sortable: true,
    render: (val) => (
      <span className={val === 'Active' ? styles.statusActive : styles.statusInactive}>
        {val}
      </span>
    )
  }
];

export default function ManageLocations() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Manage Locations</h1>
          <p className={styles.subtitle}>Configure sites and physical locations</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} />
          Add Location
        </button>
      </div>

      <section className={styles.metricsSection}>
        {locationCards.map((card, idx) => (
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
          
          <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Search locations..." className={styles.searchInput} />
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={locationsData} />
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
