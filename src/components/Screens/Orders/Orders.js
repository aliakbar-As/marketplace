import React, { useContext, useEffect, useRef, useState } from "react";
import { FlatList, View } from "react-native";
import { Header } from "../../Commons";
import Stores from "../../../Stores";
import { ProductCard } from "../../Elements";
import { Observer } from "mobx-react-lite"


const Orders = () => {
    const { OrderStore } = useContext(Stores);

    const [refreshing, setRefreshing] = useState(false);
    const [orderStatus, setOrderStatus] = useState(0);

    const myInterval = useRef();


    useEffect(() => {
        myInterval.current = setInterval(() => {
            getOrderList(false);
        }, 5000);

        if (OrderStore.data.length === 0) return getOrderList(true);

        return () => clearInterval(myInterval.current);

    }, []);


    const getOrderList = (clear) => {
        if (clear) setRefreshing(true);

        OrderStore.fetchDate(clear).then(res => {

            setRefreshing(false);
        });
    };

    return (
        <View>
            <Header title={'Orders'} />

            <FlatList
                keyExtractor={(item, index) => index}
                data={OrderStore.data}
                onRefresh={() => getOrderList()}
                refreshing={refreshing}
                renderItem={({ item }) => {
                    const price = (item.price * item.discountPercentage) / 100;
                    let status = 0;

                    setInterval(() => {
                        status = status === 0 ? 1 : status === 1 ? -1 : 0;
                        setOrderStatus(status)
                }, 30000);

                    return <Observer>{() =>
                        <ProductCard
                            priceConvertor={price}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            description={item.description}
                            rating={item.rating}
                            price={item.price}
                            discountPercentage={item.discountPercentage}
                            status={orderStatus}
                        />

                    }</Observer>;
                }}
            />
        </View>
    );
}

export default Orders;