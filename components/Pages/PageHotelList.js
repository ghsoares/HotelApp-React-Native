import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../Header';
import HotelsContainer from '../HotelsContainer';

export default class PageHotelList extends React.Component {
    render() {
        return (
            <View styles={styles.container}>
                <Header title="Hotéis" backgroundColor="#FF3336">
                    <Text style={styles.title}>Hotéis</Text>
                </Header>
                <HotelsContainer
                    data={this.props.data}
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
