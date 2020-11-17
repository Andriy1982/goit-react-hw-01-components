import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Container = styled.section`
  margin: 0 auto;
  max-width: 300px;
`;

const Title = styled.h2`
margin: 0;
text-align: center;
padding: 15px 0;
`

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  width: 60px;
  background-color: blue;
  outline: 1px solid red;
`;

const Label = styled.span`
/* margin: 0 auto; */
text-align: center;
display: block;
padding: 5px 0;
color: white;
`

const Statistics = ({ title, stats }) => {
  // const [id, label, percentage] = stats;
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(stat => (
          <ListItem key={stat.id}>
            <Label>{stat.label}</Label>
            <Label>{stat.percentage}%</Label>
          </ListItem>
        ))}
      </List>

      {/* <ul class="stat-list">
    <li class="item">
    <span class="label">{label}</span>
    <span class="percentage">{percentage}</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul> */}
    </Container>
  );
};

Statistics.defaultProps = {
    title: '',
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
 
    stats: PropTypes.arrayOf( PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired, 
    })
      ).isRequired,
    }

export default Statistics;