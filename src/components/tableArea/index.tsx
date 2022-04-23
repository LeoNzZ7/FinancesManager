import * as c from './styles';
import type { Item } from '../../types/types';
import { TableItem } from '../tableItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setTitle, setCategory } from '../../redux/reducers/searchReducer';

type Props = {
    list: Item[];
}

export const TableArea = ({list}: Props ) => {
    const searchItem = useAppSelector(state => state.searchItem);
    const theme = useAppSelector(state => state.theme)
    const dispatch = useDispatch();

    const [title, setTitleSearch] = useState('');
    const [category, setCategorySearch] = useState('');

    useEffect(() => {
        dispatch(setTitle(title))
        dispatch(setCategory(category))
    }, [title, category]);

    console.log(searchItem.category, searchItem.title)

    return (
        <c.Container theme={theme} >
            <c.SearchArea  theme={theme} >
                <input type='text' value={title} onChange={e => setTitleSearch(e.target.value)} placeholder='Qual o nome da operçao que deseja buscar?' />
                <select value={category} onChange={e => setCategorySearch(e.target.value)} >
                    <option className='option'  selected value={''}>Todos</option>
                    <option className='option' value={'salary'}>Sálario</option>
                    <option className='option' selected value={''}>Alimentação</option>
                    <option className='option' value={'salary'}>Roupas</option>
                    <option className='option' selected value={''}>Lucros e dividendos</option>
                    <option className='option' value={'salary'}>Veiculos e manutenção</option>
                    <option className='option' selected value={''}>Serviços</option>
                    <option className='option' value={'salary'}>Impostos e tributos</option>
                </select>   
            </c.SearchArea>
            <c.Table>
                <thead>
                    <tr>
                        <c.TableHeadColumn width={100} >Data</c.TableHeadColumn>
                        <c.TableHeadColumn width={130} >Categoria</c.TableHeadColumn>
                        <c.TableHeadColumn>Título</c.TableHeadColumn>
                        <c.TableHeadColumn width={150} >Valor</c.TableHeadColumn>
                    </tr>
                </thead>
                <tbody>
                    {list &&
                    list.map((item, index) => (
                        <TableItem key={index} item={item} />
                    ))}
                </tbody>
            </c.Table>
        </c.Container>
    )
} 