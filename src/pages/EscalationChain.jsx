import React from 'react';
import { GitBranchPlus, Plus, ChevronDown, Filter } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { escalationData } from '../data/mockData';
import styles from './EscalationChain.module.css';

const escalationCards = [
  { title: 'Total Chains', value: '01', icon: GitBranchPlus, color: '#1A1F2E', bgColor: '#4E80EE' }
];

const columns = [
  { header: 'Rule Name', accessor: 'ruleName', sortable: true },
  { header: 'Level', accessor: 'level', sortable: true },
  { header: 'Contact', accessor: 'contact', sortable: false }
];

export default function EscalationChain() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>Escalation Chain</h1>
          <p className={styles.subtitle}>Manage alert escalation rules and contacts</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} />
          Create Chain
        </button>
      </div>

      <section className={styles.metricsSection}>
        {escalationCards.map((card, idx) => (
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
            <input type="text" placeholder="Search chains..." className={styles.searchInput} />
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={escalationData} />
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
