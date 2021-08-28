// default data for filter elements
import categories from "./CategorySearch/categories";
export const priceInit = {
  0: '0VND',
  100: '10000000VND',
};

export const getPropertyType = {
  id: 2,
  name: 'Loại',
  identifier: 'property-type',
  options: [
    { label: 'Villa', value: 'villa' },
    { label: 'Hotel', value: 'hotel' },
    { label: 'Resort', value: 'resort' },
    { label: 'Cottage', value: 'cottage' },
    { label: 'Duplex', value: 'duplex' },
    { label: 'Landscape', value: 'landscape' },
  ],
  
};
