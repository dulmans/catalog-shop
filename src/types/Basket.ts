import { ResponseDataCatalog } from './ResponseDataCatalog';

interface BasketItem {
    info: ResponseDataCatalog,
    count: number
};

interface BasketLists {
    [key: string]: BasketItem
};

export { BasketLists, BasketItem };