import * as c from './styles';
import type { Item } from '../../types/types';
import { TableItem } from '../tableItem';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { setTitle, setCategory } from '../../redux/reducers/searchReducer';

type Props = {
    list: Item[];
    deleteItem: (title: string) => void;
}

export const TableArea = ({ list, deleteItem }: Props ) => {
    const searchItem = useAppSelector(state => state.searchItem);
    const theme = useAppSelector(state => state.theme)
    const dispatch = useDispatch();

    const [title, setTitleSearch] = useState('');
    const [category, setCategorySearch] = useState('');

    useEffect(() => {
        dispatch(setTitle(title))
        dispatch(setCategory(category))
    }, [title, category]);

    return (
        <c.Container theme={theme} >
            <c.SearchArea  theme={theme} >
                <input type='text' value={title} onChange={e => setTitleSearch(e.target.value)} placeholder='Qual o nome da operçao que deseja buscar?' />
                <select value={category} defaultValue={category} onChange={e => setCategorySearch(e.target.value)} >
                    <option className='option' selected value={''}>Todos</option>
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
            </c.SearchArea>
            <c.Table>
                <thead>
                    <tr>
                        <c.TableHeadColumn width={100} >Data</c.TableHeadColumn>
                        <c.TableHeadColumn width={130} >Categoria</c.TableHeadColumn>
                        <c.TableHeadColumn>Título</c.TableHeadColumn>
                        <c.TableHeadColumn width={130}>Valor</c.TableHeadColumn>
                        <c.TableHeadColumn width={25}></c.TableHeadColumn>
                    </tr>
                </thead>
                <tbody>
                    {list &&
                    list.map((item, index) => (
                        <TableItem handleDeleteItem={deleteItem} key={index} item={item} />
                    ))}
                </tbody>
            </c.Table>
        </c.Container>
    )
} 