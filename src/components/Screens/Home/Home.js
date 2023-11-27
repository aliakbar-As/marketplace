import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Dimensions
} from 'react-native';
import Swiper from 'react-native-swiper';

import { ProductCard } from '../../Elements';
import Stores from '../../../Stores';
import FastImage from 'react-native-fast-image';


const { width } = Dimensions.get('window');


const sliderItems = [
    {
        id: 0,
        title: 'banner 1',
        image: 'https://freedesignfile.com/upload/2020/07/Online-Shopping-Banner-Mobile-App-Vector.jpg',
    },
    {
        id: 1,
        title: 'banner 2',
        image: 'https://img.freepik.com/premium-vector/online-shopping-banner_82574-3393.jpg?w=1060',
    },
    {
        id: 2,
        title: 'banner 3',
        image: 'https://t4.ftcdn.net/jpg/02/30/72/41/360_F_230724124_ZWlHSZBIvqvdJQj9at15WaKRqAtCUKTu.jpg',
    },
];

const Home = ({ navigation }) => {
    const { ProductStore } = useContext(Stores);

    const [refreshing, setRefreshing] = useState(false);


    useEffect(() => {
        getProducts();

    }, []);

    const getProducts = () => {
        setRefreshing(true);
        ProductStore.fetchDate(true).then(res => {
            setRefreshing(false);
        });
    };


    return (
        <View style={styles.container}>

            <FlatList
                ListHeaderComponent={() => (
                    <Swiper
                        key={sliderItems.length}
                        loop
                        dot={<View style={styles.dot} />}
                        activeDot={<View style={styles.activeDot} />}
                        height={200}>
                        {sliderItems.map(item => (
                            <FastImage
                                key={item.id}
                                source={{
                                    uri: item.image,
                                    priority: FastImage.priority.low,
                                    cache: FastImage.cacheControl.cacheOnly
                                }}
                                style={styles.imagesSlider}
                            />
                        ))}
                    </Swiper>
                )}
                keyExtractor={(item, index) => index}
                data={ProductStore.data}
                onEndReachedThreshold={0.3}
                onEndReached={() => ProductStore.onEndReached()}
                onRefresh={() => getProducts()}
                refreshing={refreshing}
                renderItem={({ item }) => {
                    const price = (item.price * item.discountPercentage) / 100;
                    return (
                        <ProductCard
                            priceConvertor={price}
                            thumbnail={item.thumbnail}
                            title={item.title}
                            description={item.description}
                            brand={item.brand}
                            rating={item.rating}
                            price={item.price}
                            discountPercentage={item.discountPercentage}
                        // onPress={() => navigation.navigate('details')}
                        />
                    )
                }}
            />
        </View>

    );
};


const styles = {
    imagesSlider: {
        width: width,
        height: 200,
        alignSelf: 'center',
    },
    activeDot: {
        backgroundColor: 'yellow',
        width: 7,
        height: 7,
        borderRadius: 5,
        margin: 3
    },
    dot: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 7,
        height: 7,
        borderRadius: 5,
        margin: 3
    },
    brand: {
        fontSize: 14,
        color: '#575757',
        textAlign: 'left',
    },
    ratingTitle: {
        fontSize: 10,
        color: '#575757',
        textAlign: 'left',
    },
    starView: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    middleContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginVertical: 5,
    },
    discountTitle: {
        fontSize: 10,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    discountView: {
        backgroundColor: 'red',
        width: 40,
        height: 20,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    priceContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },
    realPriceTitle: {
        textAlign: 'left',
        color: '#505050',
        fontWeight: 'bold',
        fontSize: 14,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    description: {
        textAlign: 'left',
        fontSize: 16,
        color: '#575757'
    },
    priceTitle: {
        textAlign: 'left',
        color: '#2d2d2d',
        fontWeight: 'bold',
        fontSize: 14,
    },
    title: {
        textAlign: 'left',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    rightContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginLeft: 10,
        width: '63%'
    },
    productImage: {
        width: 120,
        height: 120,
        alignSelf: 'flex-start',
        borderRadius: 10
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        justifyContent: 'flex-start',

    },
    container: {
        flex: 1,
    }
}
export default Home;