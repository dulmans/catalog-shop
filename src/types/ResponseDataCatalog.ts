export default interface ResponseDataCatalog {
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
        novelty: boolean,
        inStock: boolean,
        contract: boolean,
        exclusive: boolean,
        sales: boolean
    }
};