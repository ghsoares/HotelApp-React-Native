import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import HotelItem from './HotelItem';

export default class HotelsContainer extends React.Component {
    sortData = (a,b) => {
        return a.price - b.price;
    }

    renderItem = (item) => {
        const {name,cheapestPrice,address,listId} = item.item;
        return (
            <HotelItem
                name={name}
                price={cheapestPrice}
                address={address}
                onPress={() => this.props.onSelectHotel(listId)}
            />
        );
    }
    
    render() {
        return (
            <FlatList
                style={styles.list}
                data={this.props.data.sort(this.sortData)}
                renderItem={this.renderItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }
}

const styles = StyleSheet.create({
    list: {
        paddingTop: 16
    }
});