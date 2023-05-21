<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
import { defineProps } from 'vue';

const props = defineProps({
    step: {
        type: Number,
        default: 1
    }
});
</script>

<template>
    <div class="step-box space-between">
        <div class="step align-center" :class="{ 'active': step >= 1 }">
            <SvgIcon :name="`icon-step-booklist-fill`" class="icon" />
            <span>我的书单</span>
        </div>
        <div class="step align-center" :class="{ 'active': step >= 2 }">
            <SvgIcon :name="`icon-step-order-${step >= 2 ? 'fill' : 'line'}`" class="icon" />
            <span>填写订单</span>
        </div>
        <div class="step align-center" :class="{ 'active': step >= 3 }">
            <SvgIcon :name="`icon-step-success-${step >= 3 ? 'fill' : 'line'}`" class="icon" />
            <span>提交订单</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.step-box {
    margin: 24px 0 20px;
    padding: 25px 51px;
    padding-left: 59px;
    background-color: #fff;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
    border-radius: 8px;

    .step {
        padding: 5px 10px;
        font-size: 20px;
        line-height: 29px;
        font-weight: 700;
        color: #c1c1c1;
        position: relative;

        .icon {
            width: 50px;
            height: 50px;
            margin-right: 10px;
            color: #ddd;
        }

        &:not(:last-child) {

            &::before,
            &::after {
                position: absolute;
                top: 50%;
                content: '';
            }

            &::before {
                left: calc(100% + 60px);
                width: 105px;
                height: 2px;
                background-color: #ddd;
            }

            &::after {
                left: calc(100% + 60px + 98px);
                width: 10px;
                height: 10px;
                border-right: 2px solid #ddd;
                border-bottom: 2px solid #ddd;
                transform: rotate(-45deg) translateY(calc(-50% - 1px));
            }
        }

        &.active {
            color: #6EA1EE;

            &::before {
                background-color: #79B3E8;
            }

            &::after {
                border-color: #79B3E8;
            }

            .icon {
                color: #fff;
            }
        }
    }

}</style>

