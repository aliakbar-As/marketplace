import { types, applySnapshot } from 'mobx-state-tree';
import { SingleCart } from './models/SingleModels';
import { request, Logger } from '../Utils';

const orderStore = types.model('OrderStore', {

    data: types.optional(types.array(SingleCart), []),

}).actions(self => {
    return {
        async fetchDate(clear = false) {
            return new Promise((resolve, reject) => {

                if (clear) this.resetList();

                request.get(`/carts`)
                    .then(res => {
                        Logger(res.data, 'carts');
                        const data = res.data.carts.map(item => item.products);
                        const limitData = data[0].filter(item => item.id === 18 || item.id === 59);


                        this.fillData(limitData);
                        resolve(limitData);
                    }).catch(error => console.log('carts Error', error));
            });
        },


        resetList() {
            self.data = [];
        },

        
        fillData(data) {
            // if (data.length === 0) {
            //     return false;
            // }
            // Array.prototype.push.apply(self.data, data.map(item => item));
            applySnapshot(self.data, data)
        },
    };
});

export const OrderStore = orderStore.create();