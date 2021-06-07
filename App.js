import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import PageHotelInfo from './components/Pages/PageHotelInfo';
import PageHotelList, { HotelsData } from './components/Pages/PageHotelList';

const PAGES = {
  HOTEL_LIST: 0,
  HOTEL_INFO: 1
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: PAGES.HOTEL_LIST,
      hotelData: {}
    }
  }

  onSelectHotel = (id) => {
    this.setState({
      page: PAGES.HOTEL_INFO,
      hotelData: HotelsData[id]
    });
  }

  onReturn = () => {
    this.setState({
      page: PAGES.HOTEL_LIST,
      hotelData: {}
    })
  }

  render() {
    const { page, hotelData } = this.state;
    return (
      <View style={styles.app}>
        {(page == PAGES.HOTEL_LIST) && (
          <PageHotelList
            onSelectHotel={this.onSelectHotel}
          />
        )}
        {(page == PAGES.HOTEL_INFO) && (
          <PageHotelInfo
            data={hotelData}
            onReturn={this.onReturn}
          />
        )}
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'column'
  },
});