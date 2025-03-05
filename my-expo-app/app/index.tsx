import { View, Text, Button, FlatList } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { addExpense } from "../store/expensesSlice";
import ExpenseItem from "../components/ExpenseItem"; // Child component

export default function HomeScreen() {
  const router = useRouter();
  const expenses = useSelector((state: RootState) => state.expenses.list);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await AsyncStorage.removeItem("user");
    router.replace("/login");
  };

  const handleAddExpense = () => {
    dispatch(
      addExpense({ id: Date.now().toString(), amount: "30", category: "Shopping", date: "2025-03-05" })
    );
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 10 }}>Expense List</Text>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ExpenseItem amount={item.amount} category={item.category} date={item.date} />
        )}
      />

      <Button title="Add Random Expense" onPress={handleAddExpense} />
      <Button title="Logout" onPress={handleLogout} color="red" />
    </View>
  );
}
