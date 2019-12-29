import React, { PureComponent } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default class CircleImage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={[styles.imageHolder, { borderRadius: this.props.borderSize }, this.props.style]}>
                {/* in ios , in addition of image the continer of image should has borderRadius  */}
                <Image
                    resizeMode="contain"
                    style={[styles.imgStyle, {
                        height: this.props.imageSize,
                        width: this.props.imageSize,
                        borderRadius: this.props.borderSize
                    }]}
                    // if the imagePath wasn't avilable the image show image which define in default source
                    defaultSource={require('../assets/images/devgirl.jpg')}
                    source={require('../assets/images/devgirl.jpg')}
                    // source={{ uri: this.props.imagePath }}  //if should display online image
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageHolder: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgStyle: {
        justifyContent: 'center',
    },
})