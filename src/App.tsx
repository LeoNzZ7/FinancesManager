import * as c from './app.styles'
import { TableArea } from './components/tableArea';
import { InfoArea } from './components/infoArea';
import { InputArea } from './components/inputArea';
import type { Item } from './types/types';
import { categories, items } from './data/data';
import { useState, useEffect } from 'react';
import { getCurrentMonth, FilterListByMonth } from './helpers/dateFilter';
import { ThemeSwitcher } from './components/themeSwitcher';
import { useAppSelector } from './redux/hooks/useAppSelector';

export const App = () => {  
  const [list, setList] = useState<Item[]>(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, SetIncome] = useState(0);
  const [expense, SetExpense] = useState(0);

  const theme = useAppSelector(state => state.theme);

  useEffect(() => {
    setFilteredList(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let  incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      } 
    }
    SetIncome(incomeCount);
    SetExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList)
  };

  return (
    <c.Container theme={theme}>
      <c.Header theme={theme}>
        <c.HeaderArea>
          <c.HeaderText>Gestor de Finanças</c.HeaderText>
          <ThemeSwitcher />
        </c.HeaderArea>
      </c.Header>
      <c.Body>
        <InfoArea income={income} expense={expense} onMonthChange={handleMonthChange} currentMonth={currentMonth} />
        <InputArea onAdd={handleAddItem} />
        <TableArea list={filteredList} />
      </c.Body>
    </c.Container>
  )
}
export default App;
