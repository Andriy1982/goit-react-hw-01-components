import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  margin: 0 auto;
  padding: 50px;
  max-width: 300px;
  background-color: rgba(200, 200, 200, 0.5);
`;
const Title = styled.h2`
  margin: 0;
  text-align: center;
  text-transform: uppercase;
  font-size: 20px;
  padding: 20px 0;
  background-color: white;
`;
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
`;

const Label = styled.span`
  /* margin: 0 auto; */
  text-align: center;
  display: block;
  padding: 5px 0;
  color: white;
`;

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      <List>
        {stats.map(({ id, label, percentage }) => (
          <ListItem
            key={id}
            style={{
              backgroundColor: randomRGB(),
            }}
          >
            <Label>{label}</Label>
            <Label>{percentage}%</Label>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,

  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

function randomNum() {
  return Math.floor(Math.random() * 256);
}

function randomRGB() {
  var red = randomNum();
  var green = randomNum();
  var blue = randomNum();
  return `rgb(${red},${green},${blue})`;
}

export default Statistics;