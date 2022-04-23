import { Item } from '../../types/types'
import { useState } from 'react'
import * as c from './styles'
import { useAppSelector } from '../../redux/hooks/useAppSelector'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value  , setValue] = useState('');
    const [date, setDate] = useState('');

    const theme = useAppSelector(state => state.theme);

    const handleAddEvent = () => {
        let newItem = {
            date: new Date(date),
            category: category,
            title: title,
            value: parseInt(value)
        }
        
        onAdd(newItem);
    }
    
    return (
        <c.Container theme={theme} >
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} className='inputText' placeholder='Digite o nome da operação que você deseja adicionar' />
            <input type='text' onChange={e => setValue(e.target.value)} className='inputNumber' placeholder='Valor da operação' />
            <input type='date' className='inputDate' value={date} onChange={e => setDate(e.target.value)} />
            <select value={category} onChange={e => setCategory(e.target.value)} >
                <option className='option' selected hidden value={''}>Categoria</option>
                <option className='option' value={'salary'}>Sálario</option>
                <option className='option' selected value={''}>Alimentação</option>
                <option className='option' value={'salary'}>Roupas</option>
                <option className='option' selected value={''}>Lucros e dividendos</option>
                <option className='option' value={'salary'}>Veiculos e manutenção</option>
                <option className='option' selected value={''}>Serviços</option>
                <option className='option' value={'salary'}>Impostos e tributos</option>
            </select>
            <button onClick={handleAddEvent}>Adicionar</button>
        </c.Container>
    )
}