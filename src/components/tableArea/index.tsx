import * as c from './styles'
import type { Item } from '../../types/types'
import { TableItem } from '../tableItem'

type Props = {
    list: Item[];
}

export const TableArea = ({list}: Props ) => {

    return (
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
    )
} 