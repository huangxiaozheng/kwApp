/**
 * Created by Lsy on 2018/07/22.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import init from '../lib/init.json';

let _ImgPath = init.IMG_SERVER;

import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view';

import CustomTabBar from '../component/homePage/Tabbar';
import LoadingMore from '../util/HomeLoadingMore'
const scrollTop = 0;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchShow: this.props.show || false,
            TheamMode: false,   //主题色  true/false
            TheamFont: 15,   //字体
            TjData: [
                {
                    top: true,
                    showModal: 0,
                    id: "123",
                    title: "挖毕业这司机肯定是蓝翔毕业这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: '',
                },
                {
                    showModal: 3,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 1,
                    id: "123",
                    title: "挖掘机上蓝 翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
                {
                    showModal: 3,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 0,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: '',
                },
                {
                    showModal: 1,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
                {
                    showModal: 3,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 0,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: '',
                },
                {
                    showModal: 0,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
            ],
            RdData: [
                {
                    top: true,
                    showModal: 0,
                    id: "123",
                    title: "挖毕业这司机肯定是蓝翔毕业这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: '',
                },
                {
                    showModal: 3,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 1,
                    id: "123",
                    title: "挖掘机上蓝 翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
            ],
            SsData: [
                {
                    top: true,
                    showModal: 3,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png", _ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 1,
                    id: "123",
                    title: "挖掘机上蓝 翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
            ],
            StData: [
                {
                    top: true,
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上卡车，这司机肯定是蓝翔毕业",
                    from: "Spruce",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝 翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
            ],
            WjData: [
                {
                    top: true,
                    showModal: 1,
                    id: "123",
                    title: "挖掘机上蓝 翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 1,
                    id: "123",
                    title: "挖掘机上蓝 翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕的这司机肯定是蓝翔毕业的这司机肯定是蓝翔毕业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [_ImgPath + "img/DetailPic.png"],
                    video: '',
                },
                {
                    showModal: 2,
                    id: "123",
                    title: "挖掘机上蓝翔毕业的业的",
                    from: "搜狐新闻",
                    time: "7分钟前",
                    count: 5520,
                    img: [],
                    video: _ImgPath + "img/DetailPic.png",
                },
            ]
        }
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1, flexDirection: 'column', paddingTop: 25, backgroundColor: '#fff'}}>

                {/*搜索*/}
                {/*{this.state.searchShow && <Search />}*/}
                {this.state.searchShow &&
                <View style={Styles.container} {...this.props}>
                    <TouchableOpacity
                        onPress={() => navigate('HotSearch', {title: '', des: ''})}
                        style={Styles.centerView}>
                        <Image source={{uri: _ImgPath + "component/icon-search.png"}}
                               style={{height: 15, width: 15, resizeMode: 'stretch'}}/>
                        <Text style={{fontSize: 14, paddingLeft: 10}}>搜索你感兴趣的...</Text>
                    </TouchableOpacity>
                    <View style={Styles.rightView}>
                        <TouchableOpacity activeOpacity={1} onPress={() => {
                            alert('前往快听')
                        }}>
                            <Image source={{uri: _ImgPath + "component/icon-kt.png"}}
                                   style={{height: 18, width: 20, resizeMode: 'stretch'}}/>
                        </TouchableOpacity>
                    </View>
                </View>}

                {/*列表*/}
                <ScrollableTabView
                    onScroll={() => {
                        !this.state.searchShow && this.setState({searchShow: true})
                    }}
                    renderTabBar={() => (<CustomTabBar
                        backgroundColor={'#fff'}
                        tabUnderlineDefaultWidth={20}
                        tabUnderlineScaleX={5}
                        activeColor={"#000"}
                        inactiveColor={"#333"}
                        activeLine={"#ffb300"}
                        intiveLine={"#fff"}
                    />)}
                >
                    <LoadingMore tabLabel='推荐' data={this.state.TjData}
                                 TheamMode={this.state.TheamMode}
                                 navigate={navigate}
                                 banner={true}/>
                    <LoadingMore tabLabel='热点' data={this.state.RdData}
                                 TheamMode={this.state.TheamMode}
                                 navigate={navigate}/>
                    <LoadingMore tabLabel='时事' data={this.state.SsData}
                                 TheamMode={this.state.TheamMode}
                                 navigate={navigate}/>
                    <LoadingMore tabLabel='视听' data={this.state.StData}
                                 TheamMode={this.state.TheamMode}
                                 navigate={navigate}/>
                    <LoadingMore tabLabel='挖机' data={this.state.WjData}
                                 TheamMode={this.state.TheamMode}
                                 navigate={navigate}/>
                </ScrollableTabView>
            </View>
        )
    }
}
const Styles = StyleSheet.create({
    body: {
        backgroundColor: '#f5f5f5',//f5f5f5  bbb
        flex: 1
    },
    box: {
        backgroundColor: '#fcfcfc'//fff  ccc
    },
    boxline: {
        backgroundColor: '#f5f5f5'//f5f5f5  c3c3c3
    },
    body1: {
        backgroundColor: '#999',//f5f5f5  bbb
        flex: 1
    },
    box1: {
        backgroundColor: '#ccc'//fff  ccc
    },
    boxline1: {
        backgroundColor: '#c3c3c3'//f5f5f5  c3c3c3
    },
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        paddingTop: 5,
        paddingHorizontal: 15
    },
    /*左边*/
    // leftView:{
    //     flex:1,
    // },
    /*中间*/
    centerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
        paddingHorizontal: 10,
        borderRadius: 18,
        flex: 1,
        marginRight: 10,
        // borderWidth:2,
        backgroundColor: '#f5f5f5',
        // paddingLeft:'28%',
    },
    /*右边*/
    rightView: {
        alignItems: 'center',
    },
})