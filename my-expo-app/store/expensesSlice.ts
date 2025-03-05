import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Expense {
  id: string;
  amount: string;
  category: string;
  date: string;
}

interface ExpensesState {
  list: Expense[];
}

const initialState: ExpensesState = {
  list: [],
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.list.push(action.payload);
    },
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
