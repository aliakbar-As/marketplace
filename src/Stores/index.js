import { createContext } from 'react';
import { ProductStore } from './ProductStore';
import { OrderStore } from './OrderStore';

export const stores = {
    ProductStore,
    OrderStore,
};

export default StoreContext = createContext(stores);
