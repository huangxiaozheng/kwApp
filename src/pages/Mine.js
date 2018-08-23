/**
 * Created By huangxiaozheng  on 2018-08-23
 */
'use strict';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
type Props = {};
export default class Mine extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    2
                </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

});
