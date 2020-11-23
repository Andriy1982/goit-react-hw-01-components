import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
    display: table;
    margin-left: auto;
    margin-right: auto;
   
`;

const TableHeadline = styled.thead`
background-color: palevioletred;
text-transform: uppercase;
`;

const TableRow = styled.tr`


    :nth-child(odd) {
        /* outline: 1px solid red; */
        background-color: #eee;
    }
`;

const TableHead = styled.th`
 padding: 10px;
 height: 20px;
    text-align: center;
    color: #fff;
    background-color: #706d97;
`;

const TableCell = styled.td`
 padding: 10px;
 height: 20px;
 text-align: center;
    min-width: 200px;
    color: #696969;
    border-bottom: 1px solid #eee;
`

const TransactionHistory = ({ items }) => {
    // const {id, type, amount, currency} = items;
  return (
    <Table>
      <TableHeadline>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </TableHeadline>

      <tbody>
        {items.map(({id, type, amount, currency} ) => (
          <TableRow key={id}>
            <TableCell>{type}</TableCell>
            <TableCell>{amount}</TableCell>
            <TableCell>{currency}</TableCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
}

export default TransactionHistory;
