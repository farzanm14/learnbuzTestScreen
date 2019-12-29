import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import primary from '../assets/colors/primary'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { dimond, treasure, medal, message, bag, setting } from '../assets/svg/svgXmlData'
import SvgUri from 'react-native-svg-uri';

import RoundedBtn from '../components/RoundedBtn'
import IconicBtn from '../components/IconicBtn'
import CircleImage from '../components/CircleImage'

export default class MainScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerRow}>
          {/* header items */}
          <View style={styles.headerContainer}>

            {/* avatar image */}
            <CircleImage borderSize={wp('20%')} imageSize={hp('7.5%')}
              imagePath='https://media.giphy.com/media/S64maTAaJAXwgPRnTn/giphy.gif' />

            {/* user name */}
            <Text style={styles.usernameText}>farid</Text>

            {/* medal ic and number of medals */}
            <View style={styles.cntrHolder}>
              <SvgUri svgXmlData={medal} width={wp('8%')} height={wp('8%')} />
              <Text style={styles.cntrText}>1</Text>
            </View>

            {/* dimond ic and number of dimonds */}
            <View style={styles.cntrHolder}>
              <SvgUri svgXmlData={dimond} width={wp('6%')} height={wp('6%')} />
              <Text style={styles.cntrText}>2</Text>
            </View>

            {/* treasure box icon */}
            <View style={styles.iconHolder}>
              <SvgUri svgXmlData={treasure} width={wp('8%')} height={wp('8%')} />
            </View>

          </View>
        </View>

        {/* main action button */}
        <View style={styles.startButtonRow}>
          <RoundedBtn style={{ flex: 0.8 }} title='شروع بازی' onPress={() => alert('start game pressed!')} />
        </View>


        {/* other options of screen in fotter */}
        <View style={styles.iconsRow}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <IconicBtn icon={setting} size={wp('5%')} fill={primary.white_icons} onPress={() => alert('setting')} />
            <IconicBtn icon={bag} size={wp('5%')} fill={primary.white_icons} />
            <IconicBtn icon={message} size={wp('5%')} fill={primary.white_icons} />
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1, height: hp('100%'),
    backgroundColor: primary.blue_background,
    justifyContent: 'space-between', marginVertical: hp('3%')
  },
  headerRow: {
    flex: 8,
    paddingHorizontal: '5%',
    width: '100%',
    alignContent: 'center',
    alignSelf: 'flex-start',

  },
  startButtonRow: {
    flex: 1, flexDirection: 'row', justifyContent: 'center'
  },
  iconsRow: {
    flex: 3, justifyContent: 'flex-end'
  },
  headerContainer: {
    height: hp('8%'),
    width: '100%',
    borderRadius: wp('10%'),
    backgroundColor: primary.green_btns,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    paddingHorizontal: wp('1%'),
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  cntrHolder: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',

  },
  cntrText: {
    color: primary.white_icons,
    fontSize: wp('5%')
  }, usernameText: {
    flex: 1,
    color: primary.white_icons,
    fontSize: wp('5%'),
    marginLeft: wp('2%')
  },
  iconHolder: {
    flex: 1.1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'
  }
})