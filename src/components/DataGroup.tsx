import { FC } from 'react'
import { DataCard } from './DataCard'
import styles from './style.module.css'

type DataGroupProps = {
  data: CategoryPopulation,
  category: CategoryType
}

const categoryColors: { [key in string]: StyleType } = {
  men: 'green',
  women: 'violet',
  youth: 'blue'
}

export const DataGroup: FC<DataGroupProps> = ({ data, category }) => {
  return (
    <div className={`${styles["data-group"]}`}>
      <div className={styles["data-header"]}>
        <div className={styles["title"]}>
          {data.total}
        </div>
        <div className={styles["category"]}>
          {category}
        </div>
      </div>
      <DataCard
        data={data.countries}
        style={categoryColors[category]}
      />
    </div>
  )
}