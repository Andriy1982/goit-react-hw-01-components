import React from 'react';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';

import transactions from '../datajson/transactions.json';

import TransactionHistory from './TransactionHistory';

import user from '../datajson/user.json';
import statisticalData from '../datajson/statistical-data.json';
import friends from '../datajson/friends.json';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
export default App;
