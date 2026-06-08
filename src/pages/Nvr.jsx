import React, { useState, useEffect } from 'react';
import { ChevronDown, Filter, Trash2, Edit } from 'lucide-react';
import DataTable from '../components/common/DataTable';
import { nvrData } from '../data/mockData';
import styles from './Nvr.module.css';

export default function Nvr() {
  const [actionsOpenForId, setActionsOpenForId] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActionsOpenForId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const columns = [
    { 
      header: 'NVR Name', 
      accessor: 'nvrName', 
      sortable: true,
      render: (val) => (
        <button className={styles.blueLink}>{val}</button>
      )
    },
    { header: 'Site Name', accessor: 'siteName', sortable: true },
    { header: 'NVR IP', accessor: 'nvrIp', sortable: true },
    { header: 'Site Contact', accessor: 'contact', sortable: true },
    { header: 'Created At', accessor: 'createdAt', sortable: true },
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

  const renderActions = (row) => {
    const isOpen = actionsOpenForId === row.id;

    return (
      <div className={styles.actionsCell} onClick={(e) => e.stopPropagation()}>
        <button 
          className={styles.dotsBtn} 
          onClick={() => setActionsOpenForId(isOpen ? null : row.id)}
        >
          •••
        </button>
        {isOpen && (
          <div className={styles.dropdownMenu}>
            <button className={styles.dropdownItem}>
              <Edit size={14} className={styles.dropdownIcon} />
              Edit
            </button>
            <button className={`${styles.dropdownItem} ${styles.dropdownItemDanger}`}>
              <Trash2 size={14} className={styles.dropdownIcon} />
              Delete
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h1 className={styles.title}>Search & Investigation</h1>
          <p className={styles.subtitle}>Manage site NVR records and monitoring status</p>
        </div>
      </div>

      <div className={styles.advancedFilterCard}>
        <div className={styles.filterTopRow}>
          <button className={styles.filterBtnIcon}>
            <Filter size={16} />
          </button>
          
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>NVR Name</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Search..." className={styles.searchInput} />
          </div>

          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>All Status</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.spacer}></div>
          
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>Actions</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>

        <div className={styles.filterBuilder}>
          <p className={styles.filterLabel}>All of these conditions must be met</p>
          
          <div className={styles.conditionRow}>
            <div className={styles.selectWrapper}>
              <select className={styles.select}>
                <option>NVR Name</option>
                <option>Site Name</option>
                <option>NVR IP</option>
                <option>Site Contact</option>
                <option>Created At</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>

            <div className={styles.selectWrapper}>
              <select className={styles.select}>
                <option>Starts with</option>
              </select>
              <ChevronDown size={16} className={styles.selectIcon} />
            </div>

            <input type="text" placeholder="Value" className={styles.valueInput} />

            <div className={styles.logicBtns}>
              <button className={styles.logicBtn}>AND</button>
              <button className={styles.logicBtn}>OR</button>
            </div>
          </div>
          
          <div className={styles.filterActions}>
            <button className={styles.resetBtn}>Reset</button>
            <button className={styles.applyFilterBtn}>Filter</button>
          </div>
        </div>
      </div>

      <DataTable columns={columns} data={nvrData} renderActions={renderActions} />
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
