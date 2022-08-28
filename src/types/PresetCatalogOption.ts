type ValueSortLists = 'byHightPrice' | 'byLowPrice' | 'byPopular' | 'byNovelty';

interface PresetCatalogOptionFilter {
    title: string,
    name: string,
    value: boolean
};

interface PresetCatalogOptionSort {
    title: string,
    value: ValueSortLists,
};

interface PresetCatalogOption {
    filter: PresetCatalogOptionFilter[],
    sort: PresetCatalogOptionSort[]
};

export {PresetCatalogOption, PresetCatalogOptionFilter, PresetCatalogOptionSort, ValueSortLists}