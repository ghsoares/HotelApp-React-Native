import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class HotelItem extends React.Component {
    render() {
        return (
            <TouchableOpacity 
                style={styles.container}
                activeOpacity={.8}
                onPress={this.props.onPress}
            >
                <Text style={styles.text}>{this.props.name}</Text>
                <Text style={styles.price}>{`R$ ${this.props.price}`}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FF5B49',
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 8,
        borderRadius: 999
    },
    text: {
        fontSize: 16,
        color: 'white'
    },
    price: {
        fontSize: 16,
        color: 'white',
        fontWeight: "bold"
    }
})