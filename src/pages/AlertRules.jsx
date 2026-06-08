import React from 'react';
import { ShieldAlert, Plus, ChevronDown, Filter } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { alertRulesData } from '../data/mockData';
import styles from './AlertRules.module.css';

const rulesCards = [
  { title: 'Total Rules', value: '01', icon: ShieldAlert, color: '#1A1F2E', bgColor: '#4E80EE' }
];

const columns = [
  { header: 'Rule Name', accessor: 'name', sortable: true },
  { header: 'Trigger Condition', accessor: 'trigger', sortable: false },
  { 
    header: 'Status', 
    accessor: 'status', 
    sortable: true,
    render: (val) => (
      <span className={val === 'Enabled' ? styles.statusActive : styles.statusInactive}>
        {val}
      </span>
    )
  }
];

export default function AlertRules() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Alert Rules</h1>
          <p className={styles.subtitle}>Configure automated security alerts</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} />
          Create Rule
        </button>
      </div>

      <section className={styles.metricsSection}>
        {rulesCards.map((card, idx) => (
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
            <input type="text" placeholder="Search rules..." className={styles.searchInput} />
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={alertRulesData} />
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
