import type { Item } from "../types/types"
import type { Category } from "../types/types"

export const items: Item[] = [
    {date: new Date(2022, 3, 1), category: 'food', title: 'Compras do mês', value: 500},
    {date: new Date(2022, 3, 1), category: 'rent', title: 'Aluguel', value: 1000},
    {date: new Date(2022, 3, 1), category: 'cloats', title: 'Roupas Novas', value: 750},
    {date: new Date(2022, 3, 1), category: 'salary', title: 'Sálario', value: 5000}
];

export const categories: Category = {
    food: { title: 'Alimentação', color: '#0000ff', expense: true },
    rent: { title: 'Aluguel', color: '#ff0000', expense: true },
    cloats: { title: 'Roupas', color: '#fff000', expense: true },
    salary: { title: 'Salário', color: '#008000', expense: false },
};