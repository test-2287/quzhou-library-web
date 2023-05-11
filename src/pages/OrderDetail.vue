<script setup>
import UserCenter from '@/components/UserCenter.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Button from '@/components/Button.vue'
import BookTable from '@/components/BookTable.vue'

import { ref } from 'vue'

const deliveryDialogShow = ref(false)
</script>

<template>
    <UserCenter>
        <div class="order-detail-page">
            <div class="back-to-list">返回订单列表</div>
            <div class="message-box align-center unpay">
                <SvgIcon name="message-alert" class="icon" />
                <span>订单尚未完成支付，请在1小时内完成支付。</span>
            </div>
            <div class="message-box align-center space-between delivery">
                <div class="align-center">
                    <SvgIcon name="message-delivery" class="icon" />
                    <span>正在等待包裹揽收</span>
                </div>
                <span class="check-delivery" @click="deliveryDialogShow = true">查看物流</span>
            </div>
            <div class="order-info space-between">
                <div>
                    <div class="info-item">
                        <span class="label">订单编号: </span>
                        <span class="value">2947587461</span>
                    </div>
                    <div class="info-item">
                        <span class="label">订单时间: </span>
                        <span class="value">2023年1月10日 10:28:04</span>
                    </div>
                </div>
                <div>
                    <Button class="status unpay">待支付</Button>
                    <Button class="status processed">已处理</Button>
                </div>
            </div>
            <div class="receiver-info">
                <div class="title">收件人信息</div>
                <div class="info-detail">
                    <div class="info-item">
                        <span class="label">收件人: </span>
                        <span class="value">2947587461</span>
                    </div>
                    <div class="info-item">
                        <span class="label">手机号: </span>
                        <span class="value">16183837373</span>
                    </div>
                    <div class="info-item">
                        <span class="label">收件地址: </span>
                        <span class="value">湖南省张家界市慈利县杨柳铺乡 8 单元 248 室</span>
                    </div>
                </div>
            </div>
            <div class="book-info">
                <div class="title">图书信息</div>
                <BookTable />
            </div>
            <div class="package-info">
                <div class="title">配送信息</div>
                <div class="info-list">
                    <div class="info-item">
                        <span class="label">包裹</span>
                        <span class="value">预计1个包裹</span>
                    </div>
                    <div class="info-item">
                        <span class="label">配送方式</span>
                        <span class="value">快速运输 工作日送货 17:00下单，预计4月6日可送达</span>
                    </div>
                    <div class="info-item">
                        <span class="label">邮费</span>
                        <span class="value price">免邮费</span>
                    </div>
                </div>
            </div>
            <div class="pending-payment">
                <div class="payment-method flex">
                    <div class="method wechat space-between align-center">
                        <el-checkbox class="round">微信</el-checkbox>
                        <SvgIcon name="icon-wechat" class="icon" />
                    </div>
                    <div class="method alipay space-between aligin-center">
                        <el-checkbox class="round">支付宝</el-checkbox>
                        <SvgIcon name="icon-alipay" class="icon" />
                    </div>
                </div>
                <div class="actions">
                    <Button class="button button-cancel" buttonStyle="line">取消订单</Button>
                    <Button class="button button-pay">立即支付</Button>
                </div>
            </div>

            <el-dialog title="物流信息" v-model="deliveryDialogShow">
                <div class="delivery-info-box">
                    <div class="order-status">
                        <div class="status align-center">
                            <SvgIcon name="icon-success-fill" class="icon" />
                            <span>已签收</span>
                        </div>
                        <div class="order-info">
                            <div class="info-item">
                                <span class="label">订单编号: </span>
                                <span class="value">15926542567</span>
                            </div>
                            <div class="info-item">
                                <span class="label">物流编号: </span>
                                <span class="value">230943847375746545497</span>
                            </div>
                        </div>
                    </div>

                    <div class="delivery-steps">
                        <div class="step">
                            <span class="content">收货地址：湖南省张家界市慈利县杨柳铺乡 8 单元 248 室</span>
                        </div>
                        <div class="step">
                            <span class="content">【合肥市】安排投递员王某上门配送，电话：<a>12384752731</a> 服务电话：<a>0755-21228495</a></span>
                            <span class="time">2023-1-10 13:29:49</span>
                        </div>
                        <div class="step">
                            <span class="content">【合肥市】离开巢湖营业部，下一站合肥市营业部</span>
                            <span class="time">2023-1-10 13:29:49</span>
                        </div>
                        <div class="step">
                            <span class="content">收货地址：湖南省张家界市慈利县杨柳铺乡 8 单元 248 室</span>
                            <span class="time">2023-1-10 13:29:49</span>
                        </div>

                    </div>

                </div>
            </el-dialog>

        </div>
    </UserCenter>
</template>

<style lang="scss" scoped>
.order-detail-page {
    padding: 24px;
    padding-bottom: 35px;
    background-color: #fff;
    border-radius: 8px;

    >div {
        margin-bottom: 30px;

        &:first-child {
            margin-bottom: 20px;
        }

        .title {
            display: flex;
            align-items: center;
            font-weight: 700;
            font-size: 16px;
            line-height: 23px;
            margin-bottom: 20px;

            &::before {
                content: '';
                width: 4px;
                height: 16px;
                border-radius: 2px;
                margin-right: 16px;
                background-color: var(--color1);
            }
        }
    }

    .back-to-list {
        font-size: 12px;
        line-height: 17px;
        color: #1264E0;
        cursor: pointer;
    }

    .message-box {
        height: 50px;
        background: #F6FAFF;
        border-radius: 4px;
        padding: 0 23px;

        font-size: 14px;
        line-height: 20px;
        color: #33608A;

        .icon {
            color: #1264E0;
            margin-right: 12px;
        }

        .check-delivery {
            font-size: 14px;
            line-height: 20px;
            color: #1264E0;
            cursor: pointer;
        }

        &.unpay {
            .icon {
                width: 20px;
                height: 20px;
            }
        }

        &.delivery {
            .icon {
                width: 23px;
                height: 16px;
            }
        }
    }

    .order-info {
        .info-item {
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 20px;
            display: flex;

            .label {
                width: 80px;
                color: #8AA2C5;
            }

            .value {
                color: #33608A;
            }
        }

        .status {
            padding: 6px 10px;
            border-radius: 16px;
            font-size: 14px;
            line-height: 20px;

            &.unpay {
                color: #50C75C;
                background-color: #E3F8E0;
            }

            &.processed {
                background-color: #E5F3FF;
                color: #629FFF;
            }
        }
    }

    .receiver-info {
        .info-item {
            margin-bottom: 8px;
            font-size: 14px;
            line-height: 20px;
            display: flex;

            .label {
                width: 80px;
                color: #8AA2C5;
            }

            .value {
                color: #33608A;
            }
        }
    }

    .book-info {}

    .package-info {
        .info-item {
            margin-bottom: 10px;
            font-size: 14px;
            line-height: 20px;
            display: flex;

            .label {
                width: 104px;
                color: #33608A;
                ;
            }

            .value {
                color: #8AA2C5;

                &.price {
                    color: #F38A0F;
                }
            }
        }
    }

    .pending-payment {
        .payment-method {
            margin-bottom: 40px;
        }

        .method {
            width: 180px;
            height: 60px;
            padding: 14px 22px 14px 20px;
            border-radius: 6px;
            border: 1px solid #E6EDF5;
            margin-right: 20px;
            cursor: pointer;

            &.active {
                border-color: var(--color1);
            }

            .icon {
                width: 32px;
                height: 32px;
            }
        }

        .actions {
            display: flex;
            justify-content: center;

            .button {
                width: 150px;
                height: 40px;
                font-weight: bold;

                &.button-cancel {
                    margin-right: 20px;
                }
            }
        }
    }

    &:deep(.el-dialog) {
        width: 750px;
        border-radius: 8px;


        .el-dialog__header {
            border-bottom: 1px solid #E6EDF5;
        }

        .el-dialog__body {
            padding: 20px;
        }

        .el-dialog__footer {
            padding-top: 0;
        }

        .el-dialog__title {
            font-weight: 700;
            font-size: 16px;
            line-height: 23px;
            color: #33608A;
        }
    }

    .delivery-info-box {
        .order-status {
            padding: 20px;
            padding-bottom: 14px;
            border-radius: 8px;
            background-color: #F7F7F7;
            margin-bottom: 16px;

            .status {
                font-weight: 700;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 14px;

                .icon {
                    width: 24px;
                    height: 24px;
                    margin-right: 12px;
                    color: #fff;
                }

            }

            .order-info {
                .info-item {
                    margin-bottom: 4px;
                    font-size: 12px;
                    line-height: 17px;
                    color: #8AA2C5;
                    display: flex;

                    .label {
                        width: 60px;
                        margin-right: 6px;
                    }
                }
            }

        }

        .delivery-steps {
            padding: 20px;

            .step {
                padding-bottom: 16px;
                padding-left: 40px;
                width: 280px;
                position: relative;
                display: flex;
                flex-direction: column;

                &::before {
                    position: absolute;
                    content: '';
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background-color: #8AA2C5;
                    left: 0;
                    top: 6px;
                    z-index: 1;
                }

                &::after {
                    position: absolute;
                    content: '';
                    width: 1px;
                    height: 100%;
                    background-color: #D9D9D9;
                    left: 4px;
                    top: 6px;
                    z-index: 0;
                }

                &:last-child::after {
                    display: none;
                }

                .content {
                    font-size: 14px;
                    line-height: 20px;
                    color: #8AA2C5;
                }

                .time {
                    font-size: 12px;
                    line-height: 17px;
                    color: #B8CCEB;
                    margin-top: 8px;
                }


            }
        }


    }

}
</style>