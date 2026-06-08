import React from 'react';
import { User, ShieldCheck, UserX, ChevronDown, Filter, Plus } from 'lucide-react';
import MetricCard from '../components/common/MetricCard';
import DataTable from '../components/common/DataTable';
import { usersData } from '../data/mockData';
import styles from './UserManagement.module.css';

const userCards = [
  { title: 'Total Users', value: '02', icon: User, color: '#1A1F2E', bgColor: '#4E80EE' },
  { title: 'Admin Users', value: '01', icon: ShieldCheck, color: '#1A1F2E', bgColor: '#7C5CFC' },
  { title: 'Inactive Users', value: '01', icon: UserX, color: '#1A1F2E', bgColor: '#EF4444' }
];

const columns = [
  { header: 'Name', accessor: 'name', sortable: true },
  { header: 'Email', accessor: 'email', sortable: true },
  { 
    header: 'Role', 
    accessor: 'role', 
    sortable: true,
    render: (val) => <span className={styles.roleTag}>{val}</span>
  },
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

export default function UserManagement() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1 className={styles.title}>User Management</h1>
          <p className={styles.subtitle}>Manage system users and access roles</p>
        </div>
        <button className={styles.addBtn}>
          <Plus size={16} />
          Add User
        </button>
      </div>

      <section className={styles.metricsSection}>
        {userCards.map((card, idx) => (
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
              <option>All Roles</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Search users..." className={styles.searchInput} />
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={usersData} />
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
