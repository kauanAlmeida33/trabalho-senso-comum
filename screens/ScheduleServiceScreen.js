import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ScheduleServiceScreen = ({ route }) => {
  const { serviceId } = route.params;
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSchedule = async () => {
    try {
      await firestore().collection('appointments').add({
        serviceId,
        userId: auth().currentUser.uid,
        date,
        status: 'agendado',
      });
      setMessage('Serviço agendado com sucesso!');
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <View>
      <TextInput placeholder="Data (DD-MM-AAAA)" value={date} onChangeText={setDate} />
      <Button title="Agendar" onPress={handleSchedule} />
      <Text>{message}</Text>
    </View>
  );
};

export default ScheduleServiceScreen;
