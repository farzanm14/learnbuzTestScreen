import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import primary from '../assets/colors/primary'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class RoundedBtn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onPressMethod = this.onPressMethod.bind(this)
    }

    onPressMethod() {
        this.props.onPress()
        // alert('U have press the rounded btn')
    }

    render() {
        return (
            <TouchableOpacity
                style={[styles.roundedBtnContainer, this.props.style,
                {
                    //these two styles are requierd so if parent hasn't define value the defulte one will render
                    backgroundColor: this.props.style.backgroundColor ? this.props.style.backgroundColor : primary.green_btns,
                    borderRadius: this.props.style.borderRadius ? this.props.style.borderRadius : wp('10%'),
                }]}
                onPress={this.onPressMethod}
            >
                <Text style={styles.roundedBtnTitle}> {this.props.title} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    roundedBtnContainer: {

        justifyContent: 'center',
    },
    roundedBtnTitle: {
        color: primary.white_icons,
        textAlign: 'center'
    }
})