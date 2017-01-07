import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection } from './common';

class MainList extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Text>Item 1</Text>
        </CardSection>
        <CardSection>
          <Text>Item 2</Text>
        </CardSection>
        <CardSection>
          <Text>Item 2</Text>
        </CardSection>
      </Card>
    );
  }
}

export default MainList;
