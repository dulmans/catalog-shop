import { CategoryFilter } from '@/types/ResponseDataCatalog';

type FillObjectOption = {
    title: string,
    bgColor?: string,
}

type CategoryOption = {
    [key in CategoryFilter]: FillObjectOption;
};

export { CategoryOption, FillObjectOption};