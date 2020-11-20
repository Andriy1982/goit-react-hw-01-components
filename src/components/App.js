import React from 'react';
import Product from './Product';
import Section from './Section';
import BookList from './BooksList';
import favouriteBooks from '../datajson/books.json';
import user from '../datajson/user.json';
import statisticalData from '../datajson/statistical-data.json'
import friends from '../datajson/friends.json'
import  transactions from '../datajson/transactions.json'

import Profile from './Profile';
import Statistics from './Statistics';
import TransactionHistory from './TransactionHistory';
import FrendListItem from './FriendListItem';
import FrendList from './FriendList';

import foto from '../image/nature.jpg';
import FriendList from './FriendList';

// console.log(FrendList);
// console.log(FrendListItem);

// console.log(foto);

// console.log(friends[0]);
// console.log(statisticalData);
// Statistics(statisticalData)

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={foto}
        stats={user.stats}
      />
      {/* <h1>Hello World</h1> */}
      {/* <BookList books={favouriteBooks} /> */}
      {/* <Product
        name="Takson new car"
        price={56.55}
        url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      />
      <Product
        name="Ford Mustang"
        price={7845}
        url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      /> */}
    
    {/* <Section title = "TTTTTT"> */}
    <Statistics
    title = "Upload stats"
    stats = {statisticalData}
    />


       {/* <Statistics
    title = "Bebebebe"
    stats = {statisticalData}
    /> */}
    {/* </Section> */}
<FriendList
friends = {friends}
/>

<TransactionHistory
items = {transactions}
/>

    {/* <FrendListItem
      avatar = {foto}
      name = {friends[0].name}

/> */}
    </>
   
  );
};
export default App;
