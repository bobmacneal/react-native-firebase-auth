import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CardSection } from './common'

class MainList extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Text>Item 1</Text>
        </CardSection>
        <CardSection>
          <Text>Item 2</Text>
        </CardSection>
        <CardSection>
          <Text>Item 2</Text>
        </CardSection>
      </View>
    );
  }
}

export default MainList;
