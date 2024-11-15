import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import ServiceCard from '../components/ServiceCard';

const ServicesListScreen = ({ navigation }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await firestore().collection('services').get();
      const servicesList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setServices(servicesList);
    };
    fetchData();
  }, []);

  return (
    <FlatList
      data={services}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ServiceCard
          service={item}
          onPress={() => navigation.navigate('Schedule', { serviceId: item.id })}
        />
      )}
    />
  );
};

export default ServicesListScreen;
