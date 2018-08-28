/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import init from '../../lib/init.json';
let _ImgPath = init.IMG_SERVER;
const { height, width } = Dimensions.get('window');
import EZSwiper from 'react-native-ezswiper';
// 属性	                    类型	              默认值	                描述
// width	            PropTypes.number.       isRequired		        轮播组件宽度
// height	            PropTypes.number.       isRequired		        轮播组件高度
// index	             PropTypes.number	        0	                轮播默认显示项
// horizontal	        PropTypes.bool	           true	                是否横向滚动
// loop	                PropTypes.bool	           true	                是否循环
// autoplayTimeout	    PropTypes.number	        5	                自动轮播时间，单位是秒
// autoplayDirection	PropTypes.bool	        true	                 true代表朝着卡片索引大的方向
// ratio	            PropTypes.number	        1	                轮播卡片缩放，默认不缩放
// cardParams	        PropTypes.object	        {}	                轮播卡片缩放高级参数设置，详见备注
// renderRow	        PropTypes.func.         isRequired		        轮播卡片渲染
// onPress	             PropTypes.func		                            轮播卡片点击事件
// onWillChange	        PropTypes.func		                             轮播某卡片将要显示
// onDidChange	        PropTypes.func		                             轮播某卡片已显示


const images = ["img/banner01.png","img/banner02.png","img/banner03.png","img/banner02.png"]


export default class App extends Component<Props> {
    render() {
        return (
            <EZSwiper style={{width: width,height: 150,backgroundColor: 'white'}}
                      dataSource={['0', '1' ,'2','3']}
                      width={ width }
                      height={150 }
                      renderRow={this.renderRow}
                      onPress={this.onPressRow}
            />
        );
    }
}

const styles = StyleSheet.create({

});
