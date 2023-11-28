import React, { useContext, useEffect, useState } from 'react';
import {
    View,
    FlatList,
    Dimensions,
    Text, ScrollView, TouchableWithoutFeedback,
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

    const [categories, setCategories] = useState([]);
    const [categorySelectedTitle, setCategorySelectedTitle] = useState('');

    useEffect(() => {
        getCategories();

    }, []);

    const getCategories = () => {
        setRefreshing(true);
        ProductStore.getCategories().then(res => {
            setCategories(res);
            getProducts();
        });
    };

    const getProducts = () => {
        ProductStore.fetchDate(true).then(() => {
            setRefreshing(false);
        });
    };


    const onCatSelected = (category) => {
        setCategorySelectedTitle(category);
        setRefreshing(true);
        ProductStore.getProductsByCategory(category).then(() => {
            setRefreshing(false);
        });
    };

    return (
        <View style={styles.container}>

            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <Swiper
                            key={sliderItems.length}
                            loop autoplay
                            autoplayTimeout={5}
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

                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={{ marginTop: 10 }}>
                            {categories.map((item, index) => (
                                <TouchableWithoutFeedback
                                    key={index}
                                    onPress={() => onCatSelected(item)}>
                                    <View style={[styles.catContainer,
                                    { backgroundColor: categorySelectedTitle === item ? 'red' : '#fff' }]}>
                                        <Text style={[styles.catTitles,
                                        { color: categorySelectedTitle === item ? '#fff' : '#2d2d2d' }]}>{item}</Text>
                                    </View>
                                </TouchableWithoutFeedback>
                            ))}
                        </ScrollView>
                    </View>
                )}
                keyExtractor={(item, index) => index}
                data={ProductStore.data}
                onEndReachedThreshold={0.3}
                onEndReached={() => ProductStore.onEndReached()}
                onRefresh={() => { setRefreshing(true); getProducts() }}
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
                            onPress={() => navigation.navigate('map')}
                        />
                    )
                }}
            />
        </View >

    );
};


const styles = {
    catContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginHorizontal: 8,
        backgroundColor: '#fff'
    },
    catTitles: {
        color: '#2d2d2d',
        textAlign: 'center',
    },
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
    container: {
        flex: 1,
    }
}
export default Home;