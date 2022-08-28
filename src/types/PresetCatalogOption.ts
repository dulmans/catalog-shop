interface PresetCatalogOptionFilter {
    title: string,
    name: string,
    value: boolean
};

interface PresetCatalogOptionSort {
    title: string,
    value: string,
    checked?: true
};

interface PresetCatalogOption {
    filter: PresetCatalogOptionFilter[],
    sort: PresetCatalogOptionSort[]
};

export {PresetCatalogOption, PresetCatalogOptionFilter, PresetCatalogOptionSort}