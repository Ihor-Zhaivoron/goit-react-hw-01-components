import PropTypes from "prop-types";
import css from "./StatsItem.module.css";

export const StatsItem = ({ label, percentage }) => {
  return (
    <li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>);
};

// функція рендом колор:
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};