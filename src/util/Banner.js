/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    ScrollView,
    Dimensions,
    Image
} from 'react-native';
import init from '../lib/init.json';
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
    constructor(props) {
        super(props)
    }

    //轮播卡片渲染
    renderImageRow(obj, index) {
        let ic = 0;
        return (
            <View style={[styles.cell,{backgroundColor: 'gray',overflow:'hidden',borderRadius:5}]}>
                <Image
                    style={{position:'absolute',top:0,right:0,bottom:0,left:0,width: width,height: .4 * width}}
                     resizeMode={'cover'}
                    source={{uri:_ImgPath +  obj}}/>

                {/*<Text style={{backgroundColor:'transparent',color:'white'}}>{'Victoria\'s Secre ' + index}</Text>*/}


                <View style={{flexDirection:'row',position:'absolute',bottom:0}}>
                    {/*<Text style={{backgroundColor: index===0?'#007aff':'#fff', width: 8, height: 8,borderRadius: 4, margin: 3,}} />*/}
                    {/*<Text style={{backgroundColor: index===1?'#007aff':'#fff', width: 8, height: 8,borderRadius: 4, margin: 3,}} />*/}
                    {/*<Text style={{backgroundColor: index/1===0?'#007aff':'#fff', width: 8, height: 8,borderRadius: 4, margin: 3,}} />*/}
                    {/*<Text style={{backgroundColor: index/1===1?'#007aff':'#fff', width: 8, height: 8,borderRadius: 4, margin: 3,}} />*/}
                    {/*<Text style={{backgroundColor: index/2===1?'#007aff':'#fff', width: 8, height: 8,borderRadius: 4, margin: 3,}} />*/}
                </View>
            </View>
        )
    }


    onPressRow(obj, index) {
        console.log('onPressRow=>obj:'+ obj + ' ,index:' + index);
        alert('onPressRow=>obj:'+ obj + ' ,index:' + index);
    }

    onWillChange(obj, index) {
        console.log('onWillChange=>obj:'+ obj + ' ,index:' + index);
        // alert('onWillChange=>obj:'+ obj + ' ,index:' + index);
    }

    onDidChange(obj, index) {
        console.log('onDidChange=>obj:'+ obj + ' ,index:' + index);
        // alert('onDidChange=>obj:'+ obj + ' ,index:' + index);
    }
  render() {
    return (
      <ScrollView style={styles.container}>
          <EZSwiper style={[styles.swiper,{width: width,height: .4 * width,marginTop:15 }]}
                    dataSource={images}
                    width={ width }
                    height={.4 * width }
                    renderRow={this.renderImageRow}
                    onPress={this.onPressRow}
                    ratio={0.867}
                    autoplayTimeout={3}
                    loop={true}
                    onWillChange={this.onWillChange}
          />
      </ScrollView>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    swiper: {
        backgroundColor: 'white',
    },
    cell: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
