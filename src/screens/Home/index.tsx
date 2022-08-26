import React from 'react';
import { View, Text } from 'react-native';

import { styled } from './styles';

export const Home = () => {
  return (
    <View style={styled.container}>
      <Text style={styled.text}>
        HOME
      </Text>
    </View>
  )
};