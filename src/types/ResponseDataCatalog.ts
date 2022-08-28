type CategoryFilter = 'novelty' | 'inStock' | 'contract' | 'exclusive' | 'sales';

interface ResponseDataCatalog {
    id: string,
    mainInfo: {
        title: string,
        price: string,
        image: {
            main: string,
            hover: string
        }
    },
    category: {
        [key in CategoryFilter]: boolean
    }
};

export {CategoryFilter, ResponseDataCatalog}