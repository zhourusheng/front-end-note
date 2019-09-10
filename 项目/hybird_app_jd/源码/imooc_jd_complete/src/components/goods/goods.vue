<template>
    <div class="goods" :class="[layoutClass, {'goods-scroll' : isScroll}]" :style="{height: goodsViewHeight}" 
    @scroll="onScrollChange" ref="goods"> 
        <div class="goods-item" :class="layoutItemClass"  :style="goodsItemStyles[index]"
        v-for="(item, index) in sortGoodsData" :key="index" 
        ref="goodsItem" @click="onGoodsItemClick(item)">
            <img class="goods-item-img" :src="item.img" alt="" srcset="" :style="imgStyles[index]">
            <div class="goods-item-desc">
                <p class="goods-item-desc-name" :class="{'goods-item-desc-name-hint' : !item.isHave}">
                    <direct v-if="item.isDirect"></direct>
                    <no-have v-if="!item.isHave"></no-have>
                    {{item.name}}
                </p>
                <div class="goods-item-desc-data">
                    <p class="goods-item-desc-data-price">￥{{item.price | priceValue}}</p>
                    <p class="goods-item-desc-data-volume">销量：{{item.volume}}</p>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import direct from '@c/goods/Direct';
import NoHave from '@c/goods/NoHave';
export default {
    components: {
        direct,
        NoHave
    },
    props: {
        sort: {
            type: String,
            default: '1'
        },
        /**
         * 1：列表布局
         * 2：网格布局
         * 3：瀑布流布局
         */
        layoutType: {
            type: String,
            default: '1'
        },
        /**
         * 是否允许 goods 单独滑动
         */
        isScroll: {
            type: Boolean,
            default: true
        }
    },
    data: function () {
        return {
            MIN_IMG_HEIGHT: 178,
            MAX_IMG_HEIGHT: 230,
            goodsData: [],
            layoutClass: 'goods-list',
            layoutItemClass: 'goods-list-item',
            sortGoodsData: [],
            goodsViewHeight: '100%',
            itemMarginBottomSize: 8,
            imgStyles: [],
            goodsItemStyles: [],
            scrollTopValue: 0
        }
    },
    created: function () {
        this.initData();
    },
    activated: function () {
        /**
         * 定位页面滑动位置，需要配合keepAlive 来使用
         */
        this.$refs.goods.scrollTop = this.scrollTopValue;
    },
    methods: {
        initData: function () {
            this.$http.get('/goods')
                .then(data => {
                    this.goodsData = data.list;
                    this.setSortGoodsData();
                    this.initLayout();
                });
        },
        /**
         * 商品排序
         */
        setSortGoodsData: function () {
            switch (this.sort) {
                // 默认
                case '1':
                    // 深拷贝，不改变原数组
                    this.sortGoodsData = this.goodsData.slice(0);
                    break;
                // 价格
                case '1-2':
                    this.getSortGoodsDataFromKey('price');
                    break;
                // 销量
                case '1-3':
                    this.getSortGoodsDataFromKey('volume');
                    break;
                // 有货优先
                case '2':
                    this.getSortGoodsDataFromKey('isHave');
                    break;
                // 直营优先
                case '3':
                    this.getSortGoodsDataFromKey('isDirect');
                    break;
            }
        },
        /**
         * 设置布局
         */
        initLayout: function () {
            this.goodsViewHeight = '100%';
            this.goodsItemStyles = [];
            this.imgStyles = [];
            switch (this.layoutType) {
                case '1':
                    this.layoutClass = 'goods-list',
                    this.layoutItemClass = 'goods-list-item';
                    break;
                case '2':
                    this.layoutClass = 'goods-grid',
                    this.layoutItemClass = 'goods-grid-item';
                    break;
                case '3':
                    this.layoutClass = 'goods-waterfall',
                    this.layoutItemClass = 'goods-waterfall-item';
                    this.initImgStyles();
                    this.$nextTick(() => {
                        this.initWaterfall();
                    })
                    break;
            }
        },
        /**
         * 根据传入的key进行排序，由大到小
         */
        getSortGoodsDataFromKey: function (key) {
            /**
             *  返回 负数 ， 表示 goods1 在 goods2 之前，
             *  返回正数， 表示 goods1 在 goods2 之后，
             *  返回 0， 顺序不变
             */
            return this.sortGoodsData.sort((goods1, goods2) => {
                let v1 = goods1[key],
                v2 = goods2[key];

                // boolean 类型值的处理
                if (typeof v1 === 'boolean') {
                    if (v1) {
                        return -1;
                    }

                    if (v2) {
                        return 1;
                    }

                    return 0;
                    
                }

                // float 类型值的处理
                if (parseFloat(v1) >= parseFloat(v2)) {
                    return -1;
                }
                return 1;
            });
        },
        /**
         * 返回随机的图片高度
         */
        imgHeight: function () {
            let result = Math.floor(Math.random() * (this.MAX_IMG_HEIGHT - this.MIN_IMG_HEIGHT) + this.MIN_IMG_HEIGHT);
            return result;
        },
        /**
         * 根据随机高度，生成图片样式数据
         */
        initImgStyles: function () {
            this.goodsData.forEach(item => {
                this.imgStyles.push(
                    {
                       height: this.imgHeight() + 'px',
                    }
                )
            });
        },
        /**
         * 瀑布流布局
         */
        initWaterfall: function () {
            let $goodsItems = this.$refs.goodsItem;
            if (!$goodsItems) return;
            let leftHeightTotal = 0, rightHeightTotal = 0;
            $goodsItems.forEach(($el, index) => {
                let goodsItemStyle = {};
                let elHeight = $el.clientHeight + this.itemMarginBottomSize;
                if (leftHeightTotal <=  rightHeightTotal) {
                    goodsItemStyle = {
                        left: '0px',
                        top: leftHeightTotal + 'px'
                    }
                    leftHeightTotal += elHeight;
                } else {
                    goodsItemStyle = {
                        right: '0px',
                        top: rightHeightTotal + 'px'
                    }
                    rightHeightTotal += elHeight;
                }


                this.goodsItemStyles.push(goodsItemStyle);
            });
            // 在不需要 goods 自滑动的时候，再去计算 goodsView 的高度
            if (!this.isScroll) {
                this.goodsViewHeight = leftHeightTotal > rightHeightTotal ? leftHeightTotal : rightHeightTotal + 'px';
            }
            
        },
        /**
         * 商品点击事件
         */
        onGoodsItemClick: function (item) {
            if (!item.isHave) {
                alert('该商品暂无库存');
                return;
            }
            this.$store.commit('setSelectGoods', item);
            this.$router.push({
                name: 'goodsDetails',
                params: {
                    routerType: 'push',
                    // goods: item
                },
            })
        },
        /**
         * 滑动变化
         */
        onScrollChange: function ($e) {
            this.scrollTopValue = $e.target.scrollTop;
        },
    },
    watch: {
        sort: function () {
            this.setSortGoodsData();
        },
        /**
         * 监听布局类型切换
         * 1：列表布局
         * 2：网格布局
         * 3：瀑布流布局
         */
        layoutType: function () {
            this.initLayout();
        }
    }
}
</script>


<style lang="scss" scoped>
@import '@css/style.scss';
    .goods {
        background-color: $bgColor;
        &-scroll {
            overflow: hidden;
            overflow-y: auto;
        }
        &-item {
            background-color: white;
            padding: $marginSize;
            box-sizing: border-box;
            
            &-desc {
                width: 100%;
                &-name {
                    font-size: $infoSize;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    word-break: break-word;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    display: -webkit-box;
                    line-height: px2rem(18);

                    &-hint {
                        color: $textHintColor;
                    }
                    
                }

                &-data {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-top: $marginSize;
                    &-price {
                        font-size: $titleSize;
                        color: $mainColor;
                        font-weight: 500;
                    }

                    &-volume {
                        font-size: $infoSize;
                        color: $textHintColor;
                    }
                }
            }
            
            
        }
    }

    .goods-list {
         &-item {
            display: flex;
            border-bottom: 1px solid $lineColor;
            .goods-item-img {
                width: px2rem(120);
                height: px2rem(120);
            }
            .goods-item-desc {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding: $marginSize;
            }
        }
    }

    .goods-grid {
        margin: $marginSize;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        &-item {
            width: 49%;
            border-radius: $radiusSize;
            margin-bottom: $marginSize;
            .goods-item-img {
                width: 100%;
            }
        }
    }

    .goods-waterfall {
        position: relative;
        margin: $marginSize;
        &-item {
            width: 49%;
            border-radius: $radiusSize;
            position: absolute;

            .goods-item-img {
                width: 100%;
            }
        }
    }
</style>
