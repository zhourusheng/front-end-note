<template>
    <div class="parallax" @scroll="onScrollChange"> 
        <!-- 缓慢移动内容 -->
        <div class="parallax-slow" ref="slow" 
        :style="{top: slowTop}" >
            <slot name="parallax-slow"></slot>
        </div>
        <!-- 正常移动内容 -->
        <div class="parallax-content z-index-2" >
            <slot></slot>
        </div>
    </div>
</template>


<script>
export default {
    data: function () {
        return {
            // 速度差
            SPEED_DIFF: 2,
            // 页面滚动距离
            parallaxScroll: 0,
        }
    },
    methods: {
        onScrollChange: function ($e) {
            this.parallaxScroll = $e.target.scrollTop;
            this.$emit('onScrollChange', this.parallaxScroll);
        }
    },
    computed: {
        /**
         * 返回 slow 距离顶部的距离
         */
        slowTop: function () {
            // 当前页面的滑动距离 / 速度差 = 该内容区实际应该滑动的距离
            // 当前页面的滑动距离 - 该内容区实际应该滑动的距离 = slow 距离顶部的距离
            return (this.parallaxScroll - (this.parallaxScroll / this.SPEED_DIFF)) + 'px';
        }
    }
}
</script>


<style lang="scss" scoped>
    .parallax {
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        .parallax-slow {
            width: 100%;
            position: relative;
        }

        .parallax-content {
            height: 100%;
            position: relative;
        }
    }
</style>
