import React, { PureComponent } from 'react';
import { View, TouchableOpacity } from 'react-native';
import SvgUri from 'react-native-svg-uri';


export default class IconicBtn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <SvgUri
                    svgXmlData={this.props.icon} //value of svg come from parent component
                    width={this.props.size} height={this.props.size}
                    fill={this.props.fill} //not requierd -> if fill null then display by icon's own color
                />
            </TouchableOpacity>
        );
    }
}
