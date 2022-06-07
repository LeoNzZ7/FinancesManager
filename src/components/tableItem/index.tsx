import * as c from './styles';
import type { Item } from '../../types/types';
import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/data';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { Pencil, Trash } from 'phosphor-react';

type Props = {
    item: Item;
    handleDeleteItem: (itemTilte: string) => void;
}

export const TableItem = ({ item, handleDeleteItem }: Props) => {
    const searchItem = useAppSelector(state => state.searchItem);

    const formatedValue = (value: number) => {
        let fixedValue = value.toFixed(2);
        let formatValue = parseFloat(fixedValue);
        return formatValue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }

    const deleteItem = ({ title }: Item) => {
        handleDeleteItem(title);
    };

    return (
        <>
            {searchItem.title.length === 0 && searchItem.category.length === 0 &&
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
                    <c.TableColumn>
                        <div className='icon'>
                            <Pencil size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                    <c.TableColumn>
                        <div onClick={() => deleteItem(item)} className='icon'>
                            <Trash size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                </c.TableLine>
            } {item.title === searchItem.title && searchItem.category.length === 0 &&
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
                    <c.TableColumn>
                        <div className='icon'>
                            <Pencil size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                    <c.TableColumn>
                        <div onClick={() => deleteItem(item)} className='icon'>
                            <Trash size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                </c.TableLine>
            } {searchItem.category === item.category && searchItem.title.length === 0 &&
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
                    <c.TableColumn>
                        <div className='icon'>
                            <Pencil size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                    <c.TableColumn>
                        <div onClick={() => deleteItem(item)} className='icon'>
                            <Trash size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                </c.TableLine>
            } {searchItem.category === item.category && searchItem.title === item.title &&
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
                    <c.TableColumn>
                        <div className='icon'>
                            <Pencil size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                    <c.TableColumn>
                        <div onClick={() => deleteItem(item)} className='icon'>
                            <Trash size={25} weight="regular"/>
                        </div>
                    </c.TableColumn>
                </c.TableLine>
            }
        </>
    )
}

