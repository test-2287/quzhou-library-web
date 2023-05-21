<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '标题展示'
    },
    showMore: {
        type: Boolean,
        default: false
    },
});

const emit = defineEmits(['onMore']);
const onMore = () => {
    emit('onMore');
}

</script>

<template>
    <div class="homepage-section">
        <div class="section-header space-between align-center">
            <div class="section-title align-center">{{ title }}</div>
            <div class="more" v-if="showMore" @click="onMore">更多</div>
        </div>
        <slot></slot>
    </div>
</template>

<style scoped lang="scss">
/* .homepage-section {
    
} */
.section-header {
    height: 44px;
    padding: 0 17px 0 20px;
    background-color: #D8E5FF;
    border-radius: 8px 8px 0 0;
}

.section-title {
    font-size: var(--font-size3);
    line-height: var(--line-height3);
    font-weight: 700;
    color: #000;

    &::before {
        content: '';
        width: 6px;
        height: 18px;
        border-radius: 3px;
        background-color: var(--color1);
        margin-right: 10px;
    }
}

.more {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #fff;
    font-size: var(--font-size1);
    line-height: var(--line-height1);
    font-weight: 400;
    color: #79A1DD;
    &:hover {
        cursor: pointer;
    }
}
</style>
