
import { Table } from "./TransactionHistory.styled"
import TransactionRow from "./TransactionRow"
import PropTypes from 'prop-types';

const TransactionHistory = ({items}) => {
  return (
    <Table>
  <thead>
    <tr>
      <th >Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    
  {items.map(TransactionRow)}
 
  </tbody>
</Table>
  )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
  };
export default TransactionHistory
