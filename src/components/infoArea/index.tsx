import  * as c from './styles';
import {formatCurrentMonth} from '../../helpers/dateFilter';
import { ResumeItem } from '../resumeItem';
import { Item } from '../../types/types';
import { useAppSelector } from '../../redux/hooks/useAppSelector';

type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}

export const InfoArea = ({currentMonth, onMonthChange, income, expense,}: Props) => {
    const searchItem = useAppSelector(state => state.searchItem);

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1 }`)
    };
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1 }`);
    };

    return (
        <c.Container>
            <c.MonthArea>
                <c.MonthArrow onClick={handlePrevMonth} >⬅️</c.MonthArrow>
                <c.MonthTitle>{formatCurrentMonth(currentMonth)}</c.MonthTitle>
                <c.MonthArrow onClick={handleNextMonth} >➡️</c.MonthArrow>
            </c.MonthArea>
            <c.ResumeArea>
                <ResumeItem title='Receitas' value={income} />
                <ResumeItem title='Despesas' value={expense}  />
                <ResumeItem title='Balanço geral' color={(income - expense) < 0 ? '#ff0000' : '#008000'} value={income - expense}  />
            </c.ResumeArea>
        </c.Container>
    )
}

