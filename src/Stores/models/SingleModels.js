import { types } from 'mobx-state-tree';

export const SingleProduct = types.model('SingleProduct', {
    price: types.maybeNull(types.number),
    thumbnail: types.maybeNull(types.string),
    title: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    brand: types.maybeNull(types.string),
    rating: types.maybeNull(types.number),
    discountPercentage: types.maybeNull(types.number),
});
