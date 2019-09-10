<template>
  <div class="home" @scroll="onScrollChange" ref="home">
    <navgation-bar :isDefault="false" :navBarStyle="navBarStyle">
        <template v-slot:nav-left>
            <img :src="navBarCurrentSlot.leftIcon">
        </template>
        <template v-slot:nav-center>
            <search :bgColor="navBarCurrentSlot.search.bgColor" :hintColor="navBarCurrentSlot.search.hintColor"
            :icon="navBarCurrentSlot.search.icon"></search>
        </template>
        <template v-slot:nav-right>
            <img :src="navBarCurrentSlot.rightIcon">
        </template>
    </navgation-bar>
    <div class="home-content" >
        <!-- 轮播 -->
         <my-swiper :swiperImgs="swiperImgs" :height="swiperHeight"></my-swiper>

        <!-- 活动 -->
        <activity>
            <div class="activity-520">
                <img v-for="(item, index) in activityDatas" :key="index" :src="item.icon" alt="">
            </div>
        </activity>

        <!-- 功能选项 -->
        <mode-options></mode-options>

        <!-- 秒杀 -->
        <seconds :dataSource="secondsDatas"></seconds>

        <!-- 活动 -->
        <activity>
            <div class="activity-ping-gou-jie">
                <img src="@img/haoHuoQiang.gif" alt="">
            </div>
        </activity>

        <!-- 商品展示 -->
        <goods :layoutType="'3'" :isScroll="false"></goods>
    </div>
  </div>
</template>


<script>
import NavgationBar from '@c/currency/NavigationBar'
import Search from '@c/currency/Search'
import MySwiper from '@c/swiper/MySwiper';
import Activity from '@c/currency/Activity'
import ModeOptions from '@c/currency/ModeOptions'
import Seconds from '@c/seconds/Seconds'
import goods from '@c/goods/goods'
export default {
    components: {
        NavgationBar,
        Search,
        MySwiper,
        Activity,
        ModeOptions,
        Seconds,
        goods
    },
    data: function () {
        return {
            navBarSlotData: {
              normal: {
                  leftIcon: require('@img/more-white.svg'),
                  search: {
                      bgColor: '#ffffff',
                      hintColor: '#999999',
                      icon: require('@img/search.svg')
                  },
                  rightIcon: require('@img/message-white.svg')
              },
              highlight: {
                  leftIcon: require('@img/more.svg'),
                  search: {
                      bgColor: '#d7d7d7',
                      hintColor: '#ffffff',
                      icon: require('@img/search-white.svg')
                  },
                  rightIcon: require('@img/message.svg')
              }
            },
            navBarCurrentSlot: {},
            /**
             * 此处仅涉及图片展示，父子组件交互会在购物车的时候讲解
             */
            swiperDatas: [
            ],
            swiperHeight: window.isIphoneX ? '228px' : '184px',
            activityDatas: [
            ],
            secondsDatas: [],
            // 顶部样式
            navBarStyle: {
                backgroundColor: '',
                position: 'fixed',
            },
            // 滚动值
            scrollTopValue: -1,
            ANCHOR_SCROLL_TOP: 160
        }
    },
    created: function () {
        this.navBarCurrentSlot = this.navBarSlotData.normal;
        this.initData();
    },
    activated: function () {
        this.$refs.home.scrollTop = this.scrollTopValue;
    },
    methods: {
        initData: function () {
            // this.$http.get('/swiper')
            //     .then(data => {
            //         this.swiperDatas = data.list;
            //     }).catch((err) => {
            //         console.log(err);
            //     });

            // this.$http.get('/activitys')
            //     .then(data => {
            //         this.activityDatas = data.list;
            //     })
            // this.$http.get('/seconds')
            //     .then(data => {
            //         this.secondsDatas = data.list;
            //     })
            /**
             * 多个并行请求
             * 剩余参数语法 ...rest 
             */
            this.$http.all([
                this.$http.get('/swiper'),
                this.$http.get('/activitys'),
                this.$http.get('/seconds'),
            ]).then (this.$http.spread((swiperData, activityDatas, secondsDatas) => {
                this.swiperDatas = swiperData.list;
                this.activityDatas = activityDatas.list;
                this.secondsDatas = secondsDatas.list;
            }));
        },
        onScrollChange: function ($e) {
            this.scrollTopValue = $e.target.scrollTop;

            let opacity = this.scrollTopValue / this.ANCHOR_SCROLL_TOP;
            if (opacity >= 1) {
                this.navBarCurrentSlot = this.navBarSlotData.highlight;
            } else {
                this.navBarCurrentSlot = this.navBarSlotData.normal;
            }

            this.navBarStyle.backgroundColor = 'rgba(255, 255, 255, ' + opacity + ')';
            // this.navBarStyle = {
            //     backgroundColor: 'rgba(255, 255, 255, ' + opacity + ')', 
            // }
        },
    },
    computed: {
        swiperImgs: function () {
            return this.swiperDatas.map(item => item.icon);
        }
    }
};
</script>

<style lang="scss">
@import '@css/style.scss';
.home {
  height: 100%;
  overflow: hidden;
   overflow-y: auto;
  &-content {
       height: 100%;

       // 520 活动
       .activity-520 {
            background-color: #F5F5F5;
            margin-top: px2rem(-8);
            border-top-left-radius: px2rem(8);
            border-top-right-radius: px2rem(8);
            
            img {
                display: inline-block;
                width: 33.33%;
            }
        }

        // 拼购节
        .activity-ping-gou-jie {
            background-color: white;
            margin-top: $marginSize;
            img {
                width: 100%;
            }
        }
  }

  

}


</style>
