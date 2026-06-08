import React from 'react';
import { Users, Shield, Plus, ChevronDown, Filter } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { groupsData } from '../data/mockData';
import styles from './Groups.module.css';

const groupCards = [
  { title: 'Total Groups', value: '02', icon: Users, color: '#1A1F2E', bgColor: '#4E80EE' },
  { title: 'System Groups', value: '01', icon: Shield, color: '#1A1F2E', bgColor: '#7C5CFC' }
];

const columns = [
  { header: 'Group Name', accessor: 'name', sortable: true },
  { header: 'Users Count', accessor: 'usersCount', sortable: true },
  { header: 'Description', accessor: 'description', sortable: false }
];

export default function Groups() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Groups</h1>
          <p className={styles.subtitle}>Manage access control groups</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} />
          Create Group
        </button>
      </div>

      <section className={styles.metricsSection}>
        {groupCards.map((card, idx) => (
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
            <input type="text" placeholder="Search groups..." className={styles.searchInput} />
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={groupsData} />
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
