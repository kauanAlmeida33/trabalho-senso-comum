import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const ServiceCard = ({ service, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{service.name}</Text>
        <Text>{service.description}</Text>
        <Text>{`R$${service.price}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ServiceCard;
