import * as c from './styles'
import type { Item } from '../../types/types'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/data'

type Props = {
    item: Item;
}

export const TableItem = ({ item }: Props) => {
    const formatedValue = (value: number) => {
        let fixedValue = value.toFixed(2);
        let formatValue = parseFloat(fixedValue)
        return formatValue.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
    console.log(item.date)

    return (
        <c.TableLine>   
            <c.TableColumn>{formatDate(item.date)}</c.TableColumn>
            <c.TableColumn>
                <c.Category color={categories[item.category].color} >
                    {categories[item.category].title}
                </c.Category> 
            </c.TableColumn>
            <c.TableColumn>{item.title}</c.TableColumn>
            <c.TableColumn>
                <c.Value color={categories[item.category].expense ? '#ff0000' : '#008000'}>
                    {formatedValue(item.value)}
                </c.Value>
            </c.TableColumn>
        </c.TableLine>
    )
}

