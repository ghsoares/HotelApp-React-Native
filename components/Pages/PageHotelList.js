import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import HotelsContainer from '../HotelsContainer';

const HotelsData = [
    {
        id: 0,
        listId: 0,
        name: "IBIS Styles São Paulo Anhembi",
        cheapestPrice: 170,
        address: "Av República, Nova Sapucaia, Sapucaia do Sul, RS",
        telephone: "(85) 69890-9528",
        stars: 3,
        imgUrl: "https://exp.cdn-hotels.com/hotels/2000000/1400000/1397800/1397721/3ea9dad5_z.jpg"
    },
    {
        id: 1,
        listId: 1,
        name: "Comfort Ibirabuera",
        cheapestPrice: 192,
        address: "Rua Marcelino Fidelez, Treze de Maio, João Pessoa, PB",
        telephone: "(13) 61249-2145",
        stars: 3,
        imgUrl: "https://cf.bstatic.com/images/hotel/max1280x900/202/202264542.jpg"
    },
    {
        id: 2,
        listId: 2,
        name: "Blue Tree Premium Morumbi",
        cheapestPrice: 260,
        address: "Travessa Elpídio Biasutti, Retiro do Congo, Vila Velha, ES",
        telephone: "(54) 61812-8720",
        stars: 3,
        imgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/05/68/77/3c/hotel-blue-tree-towers.jpg"
    },
]

export default class PageHotelList extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Header title="Hotéis" backgroundColor="#FF3336">
                    <Text style={styles.title}>Hotéis</Text>
                </Header>
                <HotelsContainer
                    data={HotelsData}
                    onSelectHotel={this.props.onSelectHotel}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
});

export {
    HotelsData
}