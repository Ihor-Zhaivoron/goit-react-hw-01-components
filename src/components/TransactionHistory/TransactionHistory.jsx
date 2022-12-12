import PropTypes from 'prop-types';

import css from "./TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
    return (<table className={css.transactionHistoryTable}>
        <thead className={css.headerSection}>
            <tr className={css.valuesList}>
                <th className={css.valuesItem}>Type</th>
                <th className={css.valuesItem}>Amount</th>
                <th className={css.valuesItem}>Currency</th>
            </tr>
        </thead>

        <tbody>
            {items.map(item => (
                <tr key={item.id} className={css.valuesList}>
                    <td className={css.transactionRow}>{item.type}</td>
                    <td className={css.transactionRow}>{item.amount}</td>
                    <td className={css.transactionRow}>{item.currency}</td>
                </tr>
            ))}
        </tbody>
    </table>);
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string,
            currency: PropTypes.string.isRequired,
        })
    ).isRequired,
    
}