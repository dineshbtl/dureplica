import React, { useState, useEffect } from 'react';
import { ChevronDown, X, Eye, Trash2 } from 'lucide-react';
import DataTable from '../components/common/DataTable';
import Modal from '../components/common/Modal';
import VehicleInfoModal from '../components/detections/VehicleInfoModal';
import VehicleTimelineModal from '../components/detections/VehicleTimelineModal';
import { detectionsData } from '../data/mockData';
import styles from './Detections.module.css';

export default function Detections() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [modalView, setModalView] = useState('info'); // 'info' or 'timeline'
  const [actionsOpenForId, setActionsOpenForId] = useState(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActionsOpenForId(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleOpenInfo = (vehicle, e) => {
    if (e) e.stopPropagation();
    setSelectedVehicle(vehicle);
    setModalView('info');
    setActionsOpenForId(null);
  };

  const columns = [
    { 
      header: 'Number plate', 
      accessor: 'plate', 
      sortable: true,
      render: (val, row) => (
        <button 
          className={styles.plateLink}
          onClick={(e) => handleOpenInfo(row, e)}
        >
          {val}
        </button>
      )
    },
    { header: 'Bay Name', accessor: 'bay', sortable: true },
    { header: 'Emirate', accessor: 'emirate', sortable: true },
    { header: 'Bay Occupied At', accessor: 'occupied', sortable: true },
    { header: 'Departed At', accessor: 'departed', sortable: true }
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
            <button className={styles.dropdownItem} onClick={(e) => handleOpenInfo(row, e)}>
              <Eye size={14} className={styles.dropdownIcon} />
              View
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
    <div className={styles.detectionsContainer}>
      <div className={styles.headerRow}>
        <div className={styles.header}>
          <h1 className={styles.title}>Detection Analytics</h1>
          <p className={styles.subtitle}>Track and analyze detected objects over time</p>
        </div>
        
        <div className={styles.selectWrapper}>
          <select className={styles.select}>
            <option>Last 24 Hours</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
          <ChevronDown size={16} className={styles.selectIcon} />
        </div>
      </div>

      <div className={styles.advancedFilterCard}>
        <div className={styles.filterTopRow}>
          <button className={styles.closeFilterBtn}>
            <X size={16} />
          </button>
          
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>Select Column</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>

          <div className={styles.searchBox}>
            <SearchIcon />
            <input type="text" placeholder="Search" className={styles.searchInput} />
          </div>

          <div className={styles.spacer}></div>

          <span className={styles.allSitesText}>All Sites</span>
          
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
                <option>Number plate</option>
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

      <DataTable columns={columns} data={detectionsData} renderActions={renderActions} />

      <Modal 
        isOpen={!!selectedVehicle} 
        onClose={() => setSelectedVehicle(null)}
        title={modalView === 'info' ? 'Vehicle Information' : 'Vehicle Timeline'}
      >
        {modalView === 'info' ? (
          <VehicleInfoModal 
            vehicle={selectedVehicle} 
            onViewTimeline={() => setModalView('timeline')} 
          />
        ) : (
          <VehicleTimelineModal 
            vehicle={selectedVehicle} 
            onGoBack={() => setModalView('info')} 
          />
        )}
      </Modal>

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
