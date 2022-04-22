export type Item = {
    date: Date;
    title: string;
    value: number;
    category: string;
};

export type Category = {
    [tag: string]: {
        title: string;
        color: string;
        expense: boolean;
    }
}