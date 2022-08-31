import { ResponseDataCatalog } from './ResponseDataCatalog';

interface UpdateCount {
    id: string,
    newCount: number
};

interface BasketItem {
    info: ResponseDataCatalog,
    count: number
};

interface BasketLists {
    [key: string]: BasketItem
};

export { BasketLists, BasketItem, UpdateCount };