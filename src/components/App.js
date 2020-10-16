import React from 'react';
import Product from './Product';
// import BooksList from './BooksList';
import BookList from './BooksList';
import favouriteBooks from '../books.json';
import user from '../user.json';

import Profile from './Profile';

console.log(user);

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
      <h1>Hello World</h1>
      <BookList books={favouriteBooks} />
      <Product
        name="Takson new car"
        price={56.55}
        url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      />
      <Product
        name="Ford Mustang"
        price={7845}
        url="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
      />
    </>
  );
};
export default App;
