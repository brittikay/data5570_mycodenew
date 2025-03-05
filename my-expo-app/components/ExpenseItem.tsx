import { View, Text } from 'react-native';

export default function ExpenseItem({ amount, category, date }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1 }}>
      <Text>{category}: ${amount}</Text>
      <Text>Date: {date}</Text>
    </View>
  );
}
