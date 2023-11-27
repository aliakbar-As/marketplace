import React from 'react';
import {
    View, Text,
    Image,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image'



export const ProductCard = ({
    thumbnail,
    title,
    description,
    brand,
    rating,
    price,
    priceConvertor,
    discountPercentage,
    onPress
}) => {
    return (
        <TouchableHighlight
            onPress={onPress}
            underlayColor={'transparent'}>
            <View style={styles.card}>
                <FastImage
                    source={{
                        uri: thumbnail,
                        priority: FastImage.priority.normal,
                        cache: FastImage.cacheControl.cacheOnly
                    }}
                    style={styles.productImage}
                />
                
                <View style={styles.rightContainer}>
                    <Text numberOfLines={1} style={styles.title}>{title}</Text>

                    <Text style={styles.description} numberOfLines={1}>
                        {description}
                    </Text>


                    <View style={styles.middleContainer}>
                        <Text style={styles.brand}>Brand : {brand}</Text>


                        <View style={styles.starView}>
                            <Icon
                                name={'star'}
                                color={'yellow'}
                                size={15}
                                style={{ marginRight: 5 }}
                            />
                            <Text style={styles.ratingTitle}>{rating}</Text>
                        </View>

                    </View>



                    <View style={styles.priceContainer}>
                        <View>
                            <Text style={styles.priceTitle}>${priceConvertor.toFixed(1)}</Text>
                            <Text style={styles.realPriceTitle}>${price}</Text>
                        </View>


                        <View style={styles.discountView}>
                            <Text style={styles.discountTitle}>{discountPercentage}%</Text>
                        </View>
                    </View>
                </View>

            </View>
        </TouchableHighlight>
    );
};


const styles = {
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
};
