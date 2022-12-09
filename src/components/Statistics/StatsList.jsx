import PropTypes from 'prop-types';

import { StatsItem } from './StatsItem';
import css from "./StatsList.module.css";

export const StatsList = ({ title, stats }) => {
  return (<section className={css.statistics}>
    {title ? <h2 className={css.title}>Upload stats</h2> : ''}

    <ul className={css.statList}>
      {stats.map(stat => (
        <StatsItem
          key={stat.id}
          label={stat.label}
          percentage={stat.percentage}
        />
      ))}
    </ul>
  </section>);
};

StatsList.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  )
};
