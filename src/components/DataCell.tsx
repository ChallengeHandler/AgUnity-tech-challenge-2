import { FC } from 'react'
import styles from './style.module.css'

type DataCellProps = {
  label: string,
  value: string,
  style: StyleType
}

export const DataCell: FC<DataCellProps> = ({ label, value, style = 'green' }) => {
  return (
    <div className={`${styles["data-cell"]} ${styles[style]}`}>
      <div className={styles["data-container"]}>
        <div className={styles["data-value"]}>
          {value}
        </div>
        <div className={styles["data-label"]}>
          {label}
        </div>
      </div>
    </div>
  )
}