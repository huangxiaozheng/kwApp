/**
 * Created By huangxiaozheng  on 2018-08-23
 */
'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    Dimensions,
    ScrollView,
    TextInput,
    Image,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Button,
    StatusBar
} from 'react-native';
import init from '../lib/init.json';
let _ImgPath = init.IMG_SERVER;
let windowWidth = Dimensions.get('window').width;
let windowHeight = Dimensions.get('window').height;

import ScrollableTabView , { DefaultTabBar } from 'react-native-scrollable-tab-view'
export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                   1
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
