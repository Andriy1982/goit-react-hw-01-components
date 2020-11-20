import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TransactionHistory = ({items}) => {
    return (
        <table >
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      { items.map(item => ( <tr key ={item.id}>
        <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
      </tr>      
      )
      )}
  </tbody>
</table>
    )
}

export default TransactionHistory;