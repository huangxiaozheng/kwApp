import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';

import {PullList} from 'react-native-pull';  //上拉刷新，下来加载更多组件
import Banner from './Banner'

const {height, width} = Dimensions.get('window');
import init from '../lib/init.json';

let _ImgPath = init.IMG_SERVER;

export default class  HomeLoadingMore extends Component {
    constructor(props) {
        super(props);
        this.dataSource = this.props.data;
        this.state = {
            list: (new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.props.banner && this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.topIndicatorRender = this.topIndicatorRender.bind(this);
        // this.loadMore();
    }

    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 1000);
    }


    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: -10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray"/>
                <Text ref={(c) => {
                    this.txtPulling = c;
                }}>当前PullList状态: pulling...</Text>
                <Text ref={(c) => {
                    this.txtPullok = c;
                }}>当前PullList状态: pullok...</Text>
                <Text ref={(c) => {
                    this.txtPullrelease = c;
                }}>当前PullList状态: pullrelease...</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <PullList
                    // style={{}}
                    onPullRelease={this.onPullRelease}
                    topIndicatorRender={this.topIndicatorRender}
                    topIndicatorHeight={60}
                    renderHeader={this.renderHeader}
                    dataSource={this.state.list}
                    // pageSize={5}
                    // initialListSize={5}
                    renderRow={this.renderRow}      //每行显示的数据
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                />
            </View>
        );
    }

    renderHeader() {         //渲染头部的方法
        return (
            <View style={{height: 0.43 * width}}>
                {/*<Text style={{fontWeight: 'bold'}}>This is header</Text>*/}
                <Banner/>
            </View>
        );
    }

    renderRow(item, sectionID, rowID, highlightRow) {       //渲染每一行 样式有 4 种排版
        let showModal = item.showModal
        return (
            showModal === 0 ?   //无图
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => this.props.navigate('DetailScreen', {title: item.title, des: item.title})}
                    style={{
                        marginHorizontal: 15, paddingVertical: 12, flexDirection: 'row',
                        justifyContent: 'space-between', borderBottomColor: 'rgba(235,235,235,1)', borderBottomWidth: 1
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 80,
                        marginRight: 10
                    }}>
                        <View>
                            <Text numberOfLines={2}
                                  style={{color: '#1a1a1a', lineHeight: parseInt(17 * 1.6), fontSize: 17,}}>
                                <Text> {item.title}</Text>
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            {item.top&&<Text style={{fontSize:11,color:'#409FFF',marginRight:10}}>置顶</Text>}
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#999', fontSize: 11}}>{item.from} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity><Text
                                style={{color: '#999', fontSize: 11}}> {item.time}</Text></TouchableOpacity>
                            <Text style={{flex: 5, flexShrink: 1}}></Text>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={{uri: _ImgPath + 'kzone/icon-leaveMessage.png'}}
                                       style={{height: 11, width: 11, marginRight: 5, resizeMode: 'stretch'}}/>
                                <Text style={{color: '#999', fontSize: 11}}>{item.count} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
                : showModal === 1 ? //一张图
                <TouchableOpacity
                    activeOpacity={.8}
                    onPress={() => this.props.navigate('DetailScreen', {title: item.title, des: item.title})}
                    style={{
                        marginHorizontal: 15, paddingVertical: 12, flexDirection: 'row',
                        justifyContent: 'space-between', borderBottomColor: 'rgba(235,235,235,1)', borderBottomWidth: 1
                    }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        height: 80,
                        marginRight: 10
                    }}>
                        <View>
                            <Text numberOfLines={2}
                                  style={{color: '#1a1a1a', lineHeight: parseInt(17 * 1.6), fontSize: 17,}}>
                                <Text> {item.title}</Text>
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                            {item.top&&<Text style={{fontSize:11,color:'#409FFF',marginRight:10}}>置顶</Text>}
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{color: '#999', fontSize: 11}}>{item.from} </Text>
                            </TouchableOpacity>
                            <TouchableOpacity><Text
                                style={{color: '#999', fontSize: 11}}> {item.time}</Text></TouchableOpacity>
                            <Text style={{flex: 5, flexShrink: 1}}></Text>
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image source={{uri: _ImgPath + 'kzone/icon-leaveMessage.png'}}
                                       style={{height: 11, width: 11, marginRight: 5, resizeMode: 'stretch'}}/>
                                <Text style={{color: '#999', fontSize: 11}}>{item.count} </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Image source={{uri: item.img[0]}} style={{height: 80, width: 120, resizeMode: 'stretch'}}/>
                    </View>
                </TouchableOpacity>
                : showModal === 3 ?     //三张图
                    <TouchableOpacity
                        activeOpacity={.8}
                        onPress={() => this.props.navigate('DetailScreen', {title: item.title, des: item.title})}
                        style={{
                            marginHorizontal: 15, paddingVertical: 12, flexDirection: 'row',
                            justifyContent: 'space-between', borderBottomColor: 'rgba(235,235,235,1)', borderBottomWidth: 1
                        }}>
                        <View style={{flexDirection: 'column', justifyContent: 'space-between', flex: 1}}>
                            <View style={{flexDirection: 'row', alignItems: 'flex-end'}}>
                                <Text numberOfLines={2}
                                      style={{color: '#1A1A1A', lineHeight: parseInt(17 * 1.6), fontSize: 17,}}>
                                    <Text> {item.title}</Text>
                                </Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                height: width * 0.21,
                                marginTop: 10
                            }}>
                                <Image source={{uri: item.img[0]}}
                                       style={{width: (width - 50) / 3, resizeMode: 'stretch'}}/>
                                <Image source={{uri: item.img[1]}}
                                       style={{width: (width - 50) / 3, resizeMode: 'stretch'}}/>
                                <Image source={{uri: item.img[2]}}
                                       style={{width: (width - 50) / 3, resizeMode: 'stretch'}}/>
                            </View>
                            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                {item.top&&<Text style={{fontSize:11,color:'#409FFF',marginRight:10}}>置顶</Text>}
                                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Text style={{color: '#999', fontSize: 11}}>{item.from} </Text>
                                </TouchableOpacity>
                                <TouchableOpacity><Text
                                    style={{color: '#999', fontSize: 11}}> {item.time}</Text></TouchableOpacity>
                                <Text style={{flex: 5, flexShrink: 1}}></Text>
                                <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image source={{uri: _ImgPath + 'kzone/icon-leaveMessage.png'}}
                                           style={{height: 11, width: 11, marginRight: 5, resizeMode: 'stretch'}}/>
                                    <Text style={{color: '#999', fontSize: 11}}>{item.count} </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                    : showModal === 2 ?     //视频
                        <TouchableOpacity
                            activeOpacity={.8}
                            onPress={() => this.props.navigate('Detail1Screen', {title: item.title, des: item.title})}
                            style={{
                                marginHorizontal: 15, paddingVertical: 12, flexDirection: 'row',
                                justifyContent: 'space-between', borderBottomColor: 'rgba(235,235,235,1)', borderBottomWidth: 1
                            }}>
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                                {/*{alert(getJsonLength(item.img))}*/}
                                <View>
                                    <Text numberOfLines={2}
                                          style={{color: '#1A1A1A', lineHeight: parseInt(17 * 1.6), fontSize: 17,}}>
                                        <Text> {item.title}</Text>
                                    </Text>
                                </View>
                                <View style={{position:'relative'}}>
                                    <Image source={{uri: item.video}} style={{
                                        height: width * 0.44,
                                        width: '100%',
                                        marginTop: 10,
                                        resizeMode: 'stretch'
                                    }}/>
                                    <Image source={{uri: _ImgPath + 'khome/play.png'}} style={{
                                        height: 40,
                                        width: 40,
                                        resizeMode: 'stretch',
                                        position:'absolute',
                                        left:width * 0.5-20,
                                        top:width * 0.22-10,
                                    }}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                                    {item.top&&<Text style={{fontSize:11,color:'#409FFF',marginRight:10}}>置顶</Text>}
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Text style={{color: '#999', fontSize: 11}}>{item.from} </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity><Text
                                        style={{color: '#999', fontSize: 11}}> {item.time}</Text></TouchableOpacity>
                                    <Text style={{flex: 5, flexShrink: 1}}></Text>
                                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                        <Image source={{uri: _ImgPath + 'kzone/icon-leaveMessage.png'}}
                                               style={{height: 11, width: 11, marginRight: 5, resizeMode: 'stretch'}}/>
                                        <Text style={{color: '#999', fontSize: 11}}>{item.count} </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </TouchableOpacity>
                        : null
        )
    }

    renderFooter() {
        if (this.state.nomore) {
            return null;
        }
        return (
            <View style={{
                height: 60,
                paddingTop: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start'
            }}>
                <Text>正在加载更多</Text><ActivityIndicator/>
            </View>
        );
    }

    loadMore() {
        this.dataSource.push(
            {
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
                title: "挖掘机上蓝 翔毕业的",
                from: "搜狐新闻",
                time: "7分钟前",
                count: 5520,
                img: [_ImgPath + "img/DetailPic.png"],
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
                showModal: 0,
                id: "123",
                title: "挖掘机上蓝 翔毕业的",
                from: "搜狐新闻",
                time: "7分钟前",
                count: 5520,
                img: [],
                video: '',
            },
        )
        setTimeout(() => {
            this.setState({
                list: this.state.list.cloneWithRows(this.dataSource)
            });
        }, 1000);
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fdfdfd',
    },
});