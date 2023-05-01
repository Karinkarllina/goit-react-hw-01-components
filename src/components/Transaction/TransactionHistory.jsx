import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return ( 
        <table className="transaction-history">
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>

            <tbody>
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
        <tr id={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
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