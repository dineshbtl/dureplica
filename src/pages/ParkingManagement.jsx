import React from 'react';
import { Building2, SquareParking, Zap, CarFront, ChevronDown, Filter } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { parkingData } from '../data/mockData';
import styles from './ParkingManagement.module.css';

const parkingCards = [
  { title: 'Total Sites', value: '01', icon: Building2, color: '#1A1F2E', bgColor: '#112469' },
  { title: 'Total Bays', value: '02', icon: SquareParking, color: '#1A1F2E', bgColor: '#112469' },
  { title: 'Available Bays', value: '00', icon: Zap, color: '#1A1F2E', bgColor: '#10B3A3' },
  { title: 'Occupied Bays', value: '02', icon: CarFront, color: '#1A1F2E', bgColor: '#EF4444' }
];

const columns = [
  { 
    header: 'Site Name', 
    accessor: 'site', 
    sortable: true,
    render: (val) => <span className={styles.siteText}>{val}</span>
  },
  { header: 'Total Bays', accessor: 'totalBays', sortable: true },
  { header: 'Available Bays', accessor: 'availableBays', sortable: true },
  { header: 'Occupied Bays', accessor: 'occupiedBays', sortable: true }
];

export default function ParkingManagement() {
  return (
    <div className={styles.parkingContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Parking Management</h1>
        <p className={styles.subtitle}>Real-time parking occupancy and monitoring</p>
      </div>

      <section className={styles.metricsSection}>
        {parkingCards.map((card, idx) => (
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
              <option>All Columns</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Search sites..." className={styles.searchInput} />
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

      <DataTable columns={columns} data={parkingData} />
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
