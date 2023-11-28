import { types } from 'mobx-state-tree';

export const SingleProduct = types.model('SingleProduct', {
    id: types.maybeNull(types.number),
    price: types.maybeNull(types.number),
    thumbnail: types.maybeNull(types.string),
    title: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    brand: types.maybeNull(types.string),
    rating: types.maybeNull(types.number),
    discountPercentage: types.maybeNull(types.number),
});

export const SingleCart = types.model('SingleCart', {
    id: types.maybeNull(types.number),
    price: types.maybeNull(types.number),
    thumbnail: types.maybeNull(types.string),
    title: types.maybeNull(types.string),
    description: types.maybeNull(types.string),
    brand: types.maybeNull(types.string),
    rating: types.maybeNull(types.number),
    discountPercentage: types.maybeNull(types.number),
    status: types.optional(types.number, 0), // 0 = pending | 1 = delivered | -1 = canceled
});