import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
    return ( 
        <table className={css.transactionHistory}>
            <thead className={css.transactionTableHead}>
                <tr className={css.tableHeadList}>
                <th className={css.tableHeadItem}>Type</th>
                <th className={css.tableHeadItem}>Amount</th>
                <th className={css.tableHeadItem}>Currency</th>
                </tr>
            </thead>

            <tbody className={css.transactionTableBody}>
                {items.map((item) => (
                    <TableBody
                        key={item.id}
                        id={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />  
                ))}

            </tbody>
        </table>

    )
}


const TableBody = ({ id, type, amount, currency }) => {
    return (
        <tr id={id} className={css.tableBodyList}>
            <td className={css.tableBodyItem}>{type}</td>
            <td className={css.tableBodyItem}>{amount}</td>
            <td className={css.tableBodyItem}>{currency}</td>
        </tr>
  );
};


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};


TableBody.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};