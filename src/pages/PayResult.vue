<script setup>
import Steps from '@/components/Steps.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import Button from '@/components/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
    <div class="pay-result-page justify-center">
        <div class="page-main">
            <Steps :step="3" />

            <div class="pay-result-box flex-column center">
                <SvgIcon name="icon-success" class="result-icon" />
                <div class="result-title">您的订单已经提交成功！</div>
                <div class="result-subtitle">我们将尽快安排配送图书</div>
                <div class="order-info-box">
                    <div class="info-item space-between">
                        <div class="label">订单编号</div>
                        <div class="value">687498943121</div>
                    </div>
                    <div class="info-item space-between">
                        <div class="label">订单时间</div>
                        <div class="value">2023年2月10日 12:39:10</div>
                    </div>
                </div>
                <div class="actions center">
                    <Button buttonStyle="line" class="button" @click="router.push('/')">返回首页</Button>
                    <Button class="button" @click="router.push('/order-detail')">查看订单</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1000px;
}

.pay-result-box {
    height: 400px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);

    .result-icon {
        width: 50px;
        height: 50px;
        color: #38CA20;
        margin-bottom: 16px;
    }

    .result-title {
        font-weight: 700;
        font-size: 20px;
        line-height: 29x;
        color: #000000;
        margin-bottom: 8px;
    }

    .result-subtitle {
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #B8CCEB;
        margin-bottom: 20px;
    }

    .order-info-box {
        width: 300px;
        height: 94px;
        padding: 17px 16px;
        padding-bottom: 21px;
        border: 1px solid #C1D4EF;
        border-radius: 8px;
        font-size: 14px;
        line-height: 20px;
        color: #8AA2C5;
        margin-bottom: 20px;
        .info-item:not(:last-child) {
            margin-bottom: 16px;
        }

        .value {
            font-weight: 500;
        }
    }

    .actions {
        .button {
            width: 100px;
            height: 36px;
            border-radius: 18px;
            font-weight: 500;
            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }

}
</style>