<template>
    <div class="activity z-index-2">
        <slot></slot>
    </div>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
@import '@css/style.scss';
    .activity {
        max-height: px2rem(160);
        position: relative;
        
    }
</style>
