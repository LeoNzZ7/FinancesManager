import { Item } from '../../types/types'
import { useState } from 'react'
import * as c from './styles'

type Props = {
    onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [value  , setValue] = useState('');
    const [date, setDate] = useState('');

    const handleAddEvent = () => {
        let newItem = {
            date: new Date(date),
            category: category,
            title: title,
            value: parseInt(value)
        }
        
        onAdd(newItem);
    }

    console.log(title, category, value, date)
    
    return (
        <c.Container>
            <input type='text' value={title} onChange={e => setTitle(e.target.value)} className='inputText' placeholder='Digite o nome da operação que você deseja adicionar' />
            <input type='text' onChange={e => setValue(e.target.value)} className='inputNumber' placeholder='Valor da operação' />
            <input type='date' className='inputDate' value={date} onChange={e => setDate(e.target.value)} />
            <select value={category} onChange={e => setCategory(e.target.value)} >
                <option className='option' value={''} hidden>Categoria</option>
                <option className='option' value={'salary'}>Sálario</option>
            </select>
            <button onClick={handleAddEvent}>Adicionar</button>
        </c.Container>
    )
}