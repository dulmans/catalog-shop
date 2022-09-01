type ValueSortLists = 'byHightPrice' | 'byLowPrice' | 'byPopular' | 'byNovelty';

interface PresetCatalogOptionFilter {
    title: string,
    name: string,
    value: boolean
};

interface PresetCatalogOptionSortItemLists {
    title: string,
    value: ValueSortLists,
};

interface PresetCatalogOptionSort {
    lists: PresetCatalogOptionSortItemLists[],
    currentValue: ValueSortLists
};

interface PresetCatalogOption {
    filter: PresetCatalogOptionFilter[],
    sort: PresetCatalogOptionSort
};

export { PresetCatalogOption, PresetCatalogOptionFilter, PresetCatalogOptionSort, ValueSortLists, PresetCatalogOptionSortItemLists }