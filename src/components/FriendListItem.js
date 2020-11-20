import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
display: flex;
justify-content: left;
align-items: center;
margin-left: auto;
margin-right: auto;
  width: 400px;
  height: 100px;
  list-style: none;
  box-shadow: 0 0 10px 5px rgba(221, 221, 221, 1);
  

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const Condition = styled.span`
margin: 0 20px;
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props =>props.isOnline ? "green" : "red"};
`;

const Image = styled.img`
margin-right: 15px;
border-radius: 5px;
`;

const Name = styled.p`
font-size: 28px;
font-weight: 600;
`



const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Condition isOnline = {isOnline}></Condition>
      <Image src={avatar} alt={name} width="80" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // isOnline: PropTypes.bool.isRequired,
}


export default FriendListItem;