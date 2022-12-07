import PropTypes from "prop-types";
import css from "./StatsItem.module.css";

export const StatsItem = ({ label, percentage }) => {
  return (
    <li className={css.item}
      // style={{ backgroundColor:   }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>)
};

// функція рендом колор:
//  

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};