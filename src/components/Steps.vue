<script setup>
import SvgIcon from '@/components/SvgIcon.vue';
</script>

<template>
    <div class="step-box space-between">
        <div class="step align-center">
            <SvgIcon name="icon-step-booklist-fill" class="icon fill" />
            <span>我的书单</span>
        </div>
        <div class="step align-center">
            <SvgIcon name="icon-step-order-line" class="icon line" />
            <span>填写订单</span>
        </div>
        <div class="step align-center">
            <SvgIcon name="icon-step-success-line" class="icon line" />
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
    color: #c1c1c1;
    font-weight: 700;

    .icon {
        width: 50px;
        height: 50px;
        margin-right: 10px;

        &.fill {
            color: var(--color1);
        }

        &.line {
            color: #ddd;
        }

    }
}
</style>

