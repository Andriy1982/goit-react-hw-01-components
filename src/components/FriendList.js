import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FriendListItem from './FriendListItem'
import foto from '../image/nature.jpg';

console.log(foto);

const List = styled.ul`
margin: 0;
padding: 20px 0;
list-style: none;
`

const FriendList = ({friends}) => {
    return (
        <List>
        {friends.map(({id, avatar, name, isOnline}) => <FriendListItem 
        key = {id}
        avatar = {foto}
        name = {name}
        isOnline = {isOnline}
        />)}
        </List>
    )
}

export default  FriendList;