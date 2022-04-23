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
            <select value={category} defaultValue={category} onChange={e => setCategory(e.target.value)} >
                <option className='option' selected hidden value={''}>Categoria</option>
                <option className='option' value={'salary'}>Sálario</option>
                <option className='option' selected value={'food'}>Alimentação</option>
                <option className='option' value={'rent'}>Aluguel</option>
                <option className='option' selected value={'cloats'}>Roupas</option>
                <option className='option' value={'profit'}>Lucros e dividendos</option>
                <option className='option' selected value={'velhice'}>Veiculos</option>
                <option className='option' value={'tax'}>Impostos e tributos</option>
                <option className='option' selected value={'investments'}>Investimentos</option>
                <option className='option' value={'services'}>Serviços</option>
            </select>
            <button onClick={handleAddEvent}>Adicionar</button>
        </c.Container>
    )
}