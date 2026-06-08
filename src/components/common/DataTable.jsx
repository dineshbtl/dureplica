import React from 'react';
import { Settings, Search, MoreHorizontal, ChevronUp, ChevronDown } from 'lucide-react';
import styles from './DataTable.module.css';

export default function DataTable({ columns, data, renderActions }) {
  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableHeader}>
        <div className={styles.tableActionsLeft}>
          <button className={styles.iconBtn}>
            <Settings size={18} />
          </button>
          <button className={styles.iconBtn}>
            <Search size={18} />
          </button>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.checkboxCell}>
                <input type="checkbox" className={styles.checkbox} />
              </th>
              {columns.map((col, idx) => (
                <th key={idx} className={styles.th}>
                  <div className={styles.thContent}>
                    {col.header}
                    {col.sortable && (
                      <div className={styles.sortIcons}>
                        <ChevronUp size={12} className={styles.sortIcon} />
                        <ChevronDown size={12} className={styles.sortIcon} />
                      </div>
                    )}
                  </div>
                </th>
              ))}
              <th className={styles.th}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className={styles.tr}>
                <td className={styles.checkboxCell}>
                  <input type="checkbox" className={styles.checkbox} />
                </td>
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className={styles.td}>
                    {col.render ? col.render(row[col.accessor], row) : row[col.accessor]}
                  </td>
                ))}
                <td className={styles.td}>
                  {renderActions ? (
                    renderActions(row)
                  ) : (
                    <button className={styles.actionBtn}>
                      <MoreHorizontal size={18} />
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className={styles.pagination}>
        <div className={styles.pageInfo}>
          Showing <span>1</span> to <span>{data.length}</span> of <span>{data.length}</span>
        </div>
        <div className={styles.rowsSelect}>
          <select className={styles.select}>
            <option>10 Rows</option>
          </select>
        </div>
      </div>
    </div>
  );
}
