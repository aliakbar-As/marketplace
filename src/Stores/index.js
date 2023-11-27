import { createContext } from 'react';
import { ProductStore } from './ProductStore';

export const stores = {
    ProductStore,
};

export default StoreContext = createContext(stores);
