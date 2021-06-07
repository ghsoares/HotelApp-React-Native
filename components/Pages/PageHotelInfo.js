import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from '../Header';

export default class PageHotelInfo extends React.Component {
    render() {
        const { name, stars, imgUrl } = this.props.data;
        const { address, telephone, price } = this.props.data;
        return (
            <View style={styles.container}>
                <Header title="Hotéis" backgroundColor="#FF3336">
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.stars}>{`${stars} Estrelas`}</Text>
                </Header>

                <Image
                    style={styles.img}
                    source={{ uri: imgUrl }}
                />
                <View style={styles.infoRow}>
                    <Text style={styles.textTopic}>Endereço:</Text>
                    <Text style={styles.textInfo}>{address}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.textTopic}>Telefone:</Text>
                    <Text style={styles.textInfo}>{telephone}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.textTopic}>Preço:</Text>
                    <Text style={styles.textInfo}>{`R$ ${price.toString()}`}</Text>
                </View>

                <TouchableOpacity
                    style={styles.returnButton}
                    activeOpacity={.8}
                    onPress={this.props.onReturn}
                >
                    <Text style={styles.returnText}>Voltar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#F00',
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    },
    stars: {
        textAlign: 'center',
        fontSize: 16,
        color: 'white'
    },
    img: {
        height: 200,
        left: 0,
        right: 0
    },
    infoRow: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 8
    },
    textTopic: {
        fontWeight: 'bold',
        width: 100
    },
    textInfo: {
        flex: 1,
    },
    returnButton: {
        backgroundColor: '#FF3336',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 999,
        alignSelf: 'center',
        marginTop: 'auto',
        marginBottom: 32
    },
    returnText: {
        color: 'white',
        fontSize: 20,
    }
});