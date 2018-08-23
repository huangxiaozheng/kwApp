/**
 * Created By huangxiaozheng  on 2018-08-23
 */
'use strict';
/**
 * Created By Lsy on 2018-07-17
 */
import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {
    StackNavigator,
    TabBarBottom,
    TabNavigator
} from 'react-navigation';
import init from './lib/init.json';
let _ImgPath = init.IMG_SERVER;
//页面切换动画API
// import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
import HomeScreen from "./pages/Home";      //首页
import RepairScreen from "./pages/Repair";  //维修专家
import ZoneScreen from "./pages/Zone";      //挖友圈
import MineScreen from "./pages/Mine";      //个人中心
 class TabBarItem extends Component {
     constructor(props) {
         super(props);
         this.state={
             focused:false,
             selectedImage:null,
             normalImage:null,
         }
     }
    render() {
        return (
            <Image source={{uri:this.props.focused ? this.props.selectedImage : this.props.normalImage }}
                   style={ {width: 23, height: 25,resizeMode:'contain'} }
            />
        );
    }
}

const Tab = TabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: '首页',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={_ImgPath + "icon-home.png"}
                        selectedImage={_ImgPath + "icon-homed.png"}

                    />
                ),
            },
        },
        Repair: {
            screen: RepairScreen,
            navigationOptions: {
                tabBarLabel: '维修专家',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={_ImgPath + "icon-repair.png"}
                        selectedImage={_ImgPath + "icon-repaird.png"}
                    />
                ),
            },
        },

        Zone: {
            screen: ZoneScreen,
            navigationOptions: {
                tabBarLabel: '挖友圈',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={_ImgPath + "icon-zone.png"}
                        selectedImage={_ImgPath + "icon-zoned.png"}
                    />
                ),
            },
        },

        Mine: {
            screen: MineScreen,
            navigationOptions: {
                tabBarLabel: '我的',
                tabBarIcon: ({focused, tintColor}) => (
                    <TabBarItem
                        tintColor={tintColor}
                        focused={focused}
                        normalImage={_ImgPath + "icon-mine.png"}
                        selectedImage={_ImgPath + "icon-mined.png"}
                    />
                ),
            },
        },

    },
    {
        initialRouteName: 'Home',
        tabBarComponent: TabBarBottom,  // TabBarBottom
        tabBarPosition: 'bottom',       // 显示位置，android 默认是显示在页面顶端的
        swipeEnabled: false,             // 是否可以左右滑动切换tab
        animationEnabled: false,         // 切换页面时是否有动画效果
        lazy: true,                     // 懒加载
        backBehavior: 'nome',           // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
        tabBarOptions: {
            activeTintColor: '#2a2a2a', //  激活版块的颜色
            inactiveTintColor: '#979797', // 非激活版块的颜色
            style: {backgroundColor: '#ffffff'},// 背景颜色
            labelStyle: {fontSize: 12}          // 文字大小
        },
    });





const TaNavigator = StackNavigator(

    {
        Tab: {screen: Tab},


        // AddAct: {screen: AddAct},

    },
    {
        // headerMode: 'screen',
        initialRouteName: 'Tab',
        mode: 'card',
        // cardStyle: 'card',
//	    transitionConfig: (() => ({
//	        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
//	    })),
//         transitionConfig: (() => ({
//             screenInterpolator: CardStackStyleInterpolator.forHorizontal,
//             transitionSpec: {
//                 duration: 250,
// //		      easing: Easing.bounce,
// //		      timing: Animated.timing,
//             },
//         })),
        navigationOptions: {
            headerTitle:"App",
            // header: null,
            headerTintColor: '#333333', //标题字体颜色
            // headerLeft:'<Text>123</Text>',
            showIcon: true,
            swipeEnabled: false,
            animationEnabled: false,
            headerStyle: {height: 0},
            gesturesEnabled: true,
            // backgroundColor: '#fff',
            // cardStack: {
            //     gesturesEnabled: true
            // },

            // header: {
            //     style: {
            //         backgroundColor: '#fff'
            //     },
            //     titleStyle: {
            //         color: 'green'
            //     }
            // },
        },
        // indicatorStyle:{height:0},
        // onTransitionStart: ()=>{ console.log('导航栏切换开始'); },
        // onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }
    });




export default TaNavigator;

