import { FC } from 'react'
import { DataCell } from './DataCell'
import styles from './style.module.css'

type DataCardProps = {
  data: CountryPopulation[]
}

export const DataCard: FC<DataCardProps> = ({ data }) => {
  return (
    <div className={`${styles["data-card"]}`}>
      <div className={styles["subtitle"]}>
        By country
      </div>
      <div className={styles["cell-list"]}>
        {data.map((datum, key) => (
          <DataCell
            key={key}
            label={datum.country}
            value={datum.population}
            style='green'
          />
        ))}
      </div>
    </div>
  )
}