import React, { useState } from 'react';
import { MapPin, BetweenVerticalStart, Cctv, EvCharger, Siren, Link2, Clock, Timer, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import MetricCard from '../components/common/MetricCard';
import { analyticsStats } from '../data/mockData';
import styles from './Analytics.module.css';

const metricCards = [
  { title: 'Total Locations', value: '01', icon: MapPin, color: '#1A1F2E', bgColor: '#4E80EE' },
  { title: 'Bays Monitored', value: '02', icon: BetweenVerticalStart, color: '#1A1F2E', bgColor: '#7C5CFC' },
  { title: 'Cameras Online', value: '02', icon: Cctv, color: '#10B3A3', bgColor: '#10B3A3' },
  { title: 'Charger Occupancy', value: '100%', icon: EvCharger, color: '#4E80EE', bgColor: '#4E80EE' },
  { title: 'Alerts Triggered', value: '05', icon: Siren, color: '#EF4444', bgColor: '#EF4444' }
];

export default function Analytics() {
  const [activeTab, setActiveTab] = useState('bay');
  
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Analytics & Reports</h1>
        <p className={styles.subtitle}>Monitor and manage all security alerts</p>
      </div>

      <section className={styles.metricsSection}>
        {metricCards.map((card, idx) => (
          <MetricCard 
            key={idx}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
            bgColor={card.bgColor}
          />
        ))}
      </section>

      <div className={styles.controlsBar}>
        <div className={styles.tabs}>
          <button 
            className={`${styles.tab} ${activeTab === 'bay' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('bay')}
          >
            Bay Analytics
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'vehicle' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('vehicle')}
          >
            Vehicle Analytics
          </button>
          <button 
            className={`${styles.tab} ${activeTab === 'detection' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('detection')}
          >
            Detection Analytics
          </button>
        </div>
        
        <div className={styles.filters}>
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>All Sites</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
          <div className={styles.selectWrapper}>
            <select className={styles.select}>
              <option>Last 24hrs</option>
            </select>
            <ChevronDown size={16} className={styles.selectIcon} />
          </div>
        </div>
      </div>

      <div className={styles.mainGrid}>
        
        <div className={styles.leftColumn}>
          <div className={`${styles.statsCard} ${styles.durationCard}`}>
            <div className={styles.statsIconWrapper} style={{ backgroundColor: '#7C5CFC' }}>
              <Link2 size={16} color="white" />
            </div>
            <p className={styles.statsLabel}>Average Charging Duration</p>
            <p className={styles.statsValue}>35 min</p>
          </div>
          
          <div className={`${styles.statsCard} ${styles.dwellCard}`}>
            <div className={styles.statsIconWrapper} style={{ backgroundColor: '#10B3A3' }}>
              <Clock size={16} color="white" />
            </div>
            <p className={styles.statsLabel}>Average Dwell Time</p>
            <p className={styles.statsValue}>35 min</p>
          </div>

          <div className={`${styles.statsCard} ${styles.ratioCard}`}>
            <div className={styles.statsIconWrapper} style={{ backgroundColor: '#4E80EE' }}>
              <Timer size={16} color="white" />
            </div>
            <p className={styles.statsLabel}>Average Charging to Parking Time Ratio</p>
            <p className={styles.statsValue}>100%</p>
          </div>
        </div>

        <div className={styles.middleColumn}>
          <div className={styles.turnoverCard}>
            <h3 className={styles.turnoverTitle}>Vehicle Turnover</h3>
            
            <div className={styles.turnoverSection}>
              <h4 className={styles.turnoverSubtitle}>TOP 3 LOCATIONS</h4>
              <ul className={styles.locationList}>
                {analyticsStats.topLocations.map((loc, i) => (
                  <li key={i} className={styles.locationItem}>
                    <div className={styles.locNameWrapper}>
                      <span className={styles.dot} style={{ backgroundColor: '#10B3A3' }}></span>
                      {loc.name}
                    </div>
                    <span className={styles.locCount} style={{ color: '#10B3A3' }}>{loc.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.turnoverSection}>
              <h4 className={styles.turnoverSubtitle}>BOTTOM 3 LOCATIONS</h4>
              <ul className={styles.locationList}>
                {analyticsStats.bottomLocations.map((loc, i) => (
                  <li key={i} className={styles.locationItem}>
                    <div className={styles.locNameWrapper}>
                      <span className={styles.dot} style={{ backgroundColor: '#EF4444' }}></span>
                      {loc.name}
                    </div>
                    <span className={styles.locCount} style={{ color: '#EF4444' }}>{loc.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <div className={styles.chartCard}>
            <div className={styles.chartHeader}>
              <div className={styles.chartTabs}>
                <button className={`${styles.chartTab} ${styles.activeChartTab}`}>Popular Times</button>
                <button className={styles.chartTab}>Bay Occupancy Rate</button>
              </div>
              <div className={styles.selectWrapper}>
                <select className={styles.select}>
                  <option>Thursday</option>
                </select>
                <ChevronDown size={16} className={styles.selectIcon} />
              </div>
            </div>
            
            <div className={styles.liveStatusWrapper}>
              <span className={styles.liveLabel}>Live 3:00 PM:</span> As busy as it gets
            </div>

            <div className={styles.chartWrapper}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsStats.chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                    dy={10}
                    interval="preserveStartEnd"
                  />
                  <Tooltip cursor={{ fill: 'rgba(0,0,0,0.05)' }} />
                  <Bar dataKey="value" radius={[10, 10, 10, 10]} barSize={8}>
                    {analyticsStats.chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              
              <div className={styles.chartDots}>
                 <span className={styles.pagerDot}></span>
                 <span className={styles.pagerDot}></span>
                 <span className={styles.pagerDot}></span>
                 <span className={`${styles.pagerDot} ${styles.activePagerDot}`}></span>
                 <span className={styles.pagerDot}></span>
                 <span className={styles.pagerDot}></span>
                 <span className={styles.pagerDot}></span>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
