<script setup>
import { defineProps, reactive, provide } from 'vue';
import { useTabs } from '@/pages/homepage/useTabs.js'

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    position: {
        type: String,
        default: 'left' // left | right
    },
    tabs: {
        type: Array,
        default: () => []
    }
});

const { tabs, selectTab, selectedTabIndex, registerTab, unregisterTab } = useTabs();

provide('registerTab', registerTab);
provide('unregisterTab', unregisterTab);
provide('selectedTabIndex', selectedTabIndex);


</script>

<template>
    <div class="section-tabs">
        <div class="section-header space-between" v-if="title">
            <div class="section-title align-center"> {{ title }}</div>
            <div class="tabs flex">
                <div class="tab" v-for="(tab, index) in tabs" :class="{ 'active': selectedTabIndex === index }"
                    @click="selectTab(index)">{{ tab.title }}
                </div>
            </div>
        </div>
        <div v-else class="tabs-header" :class="{'right': position === 'right'}">
            <div class="tab center" v-for="(tab, index) in tabs" :class="{ 'active': selectedTabIndex === index }"
                @click="selectTab(index)">{{ tab.title }}
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.section-header {
    height: 50px;
    background-color: #E8F0FF;
    border-radius: 8px 8px 0 0;
    padding: 0 20px;

}

.section-title {
    font-size: var(--font-size3);
    line-height: 50px;
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

.tabs {
    align-items: flex-end;

    .tab {
        width: 120px;
        height: 36px;
        background-color: #A5C3FC;
        border-radius: 6px 6px 0 0;
        font-size: var(--font-size2);
        font-weight: 500;
        line-height: 36px;
        text-align: center;
        color: #fff;
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 8px;
        }

        &.active {
            background-color: #fff;
            color: #000;
        }
    }
}

.tabs-header {
    display: flex;
    border-radius: 8px 8px 0 0;
    &.right {
        justify-content: flex-end;
    }

    .tab {
        width: 150px;
        height: 40px;
        background-color: #A5C3FC;
        border-radius: 8px 8px 0 0;
        font-size: var(--font-size2);
        font-weight: 500;
        color: #fff;
        cursor: pointer;

        &:not(:last-child) {
            margin-right: 15px;
        }

        &.active {
            background-color: #fff;
            color: #33608A;
        }
    }
}
</style>