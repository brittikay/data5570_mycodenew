import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddExpenseScreen() {
  const router = useRouter();
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    console.log('Expense Added:', { amount, category, date });
    router.push('/');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Add Expense</Text>

      <Text>Amount:</Text>
      <TextInput 
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} 
        keyboardType="numeric" 
        value={amount} 
        onChangeText={setAmount} 
      />

      <Text>Category:</Text>
      <TextInput 
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} 
        value={category} 
        onChangeText={setCategory} 
      />

      <Text>Date:</Text>
      <TextInput 
        style={{ borderWidth: 1, padding: 8, marginBottom: 10 }} 
        value={date} 
        onChangeText={setDate} 
        placeholder="YYYY-MM-DD"
      />

      <Button title="Save Expense" onPress={handleAddExpense} />
      <Button title="Cancel" onPress={() => router.back()} color="red" />
    </View>
  );
}
