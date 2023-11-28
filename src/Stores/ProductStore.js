import { types } from 'mobx-state-tree';
import { SingleProduct } from './models/SingleModels';
import { request, Logger } from '../Utils';

const productStore = types.model('ProductStore', {

    data: types.optional(types.array(SingleProduct), []),

    limit: types.optional(types.number, 10),
    page: types.optional(types.number, 1),
    loading: types.optional(types.boolean, false),
}).actions(self => {
    return {
        async fetchDate(clear = false) {
            return new Promise((resolve, reject) => {

                if (clear) this.resetList();

                request.get(`/products?limit=${self.limit}&skip=${self.page}`)
                    .then(res => {
                        Logger(res.data, 'Products');

                        this.fillData(res.data.products);
                        resolve();
                    }).catch(error => console.log('products Error', error));
            });
        },

        async getCategories() {
            return new Promise((resolve, reject) => {
                request.get('/products/categories')
                    .then(res => {
                        Logger(res.data, 'categories');

                        resolve(res.data);
                    }).catch(error => console.log('cats Error', error));
            });
        },

        async getProductsByCategory(category) {
            return new Promise((resolve, reject) => {
                request.get(`/products/category/${category}`)
                    .then(res => {
                        Logger(res.data, 'categories');
                        this.resetList();
                        this.fillData(res.data.products)
                        resolve();
                    }).catch(error => console.log('cats Error', error));
            });
        },

        resetList() {
            self.page = 1;
            self.data = [];
            self.isLastPage = false;
        },

        onEndReached() {
            if (self.isLastPage || self.loading) {
                return false;
            };
            self.page += 1;
            this.fetchDate();
        },
        fillData(data) {
            if (data.length === 0) {
                self.isLastPage = true;
                return false;
            }
            Array.prototype.push.apply(self.data, data.map(item => item));
        },
        changeLoading(value) {
            self.loading = value;
        }
    };
});

export const ProductStore = productStore.create();