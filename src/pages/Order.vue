<script setup>
import Steps from '@/components/Steps.vue';
import BookTable from '@/components/BookTable.vue';
import Button from '@/components/Button.vue'
import SvgIcon from '@/components/SvgIcon.vue';

</script>

<template>
    <div class="order-page justify-center">
        <div class="page-main">
            <Steps />

            <div class="fill-order">
                <div class="title">填写订单</div>

                <div class="container">
                    <div class="header space-between">
                        <div class="title align-center">收件人信息</div>
                        <div class="action-box">
                            <Button>添加新地址</Button>
                        </div>
                    </div>

                    <div class="content">
                        <div class="receiver-info-box space-between">
                            <div class="flex">
                                <el-checkbox></el-checkbox>
                                <div class="info-list">
                                    <div class="info-item">
                                        <div class="item-label">收件人</div>
                                        <div class="item-value">赵天明</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="item-label">手机号</div>
                                        <div class="item-value">12666666666</div>
                                    </div>
                                    <div class="info-item">
                                        <div class="item-label">收件地址</div>
                                        <div class="item-value">湖南省张家界市慈利县杨柳铺乡 8 单元 248 室</div>
                                    </div>
                                </div>
                            </div>
                            <div class="align-center">
                                <SvgIcon name="icon-edit" class="icon-edit" />
                                <SvgIcon name="icon-delete" class="icon-delete" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="header">
                        <div class="title align-center">图书信息</div>
                    </div>
                    <div class="content">
                        <BookTable />
                    </div>
                </div>

                <div class="container order-details">
                    <div class="detail-item align-center">
                        <div class="item-label">包裹</div>
                        <div class="item-value">预计一个包裹</div>
                    </div>
                    <div class="detail-item align-center">
                        <div class="item-label">配送方式</div>
                        <div class="item-value">快递运输 工作日送货 17:00前下单，预计4月6日前可送达</div>
                    </div>
                    <div class="detail-item align-center">
                        <div class="item-label">邮费</div>
                        <div class="item-value price">免邮费</div>
                    </div>
                </div>

                <div class="container align-center payment-method">
                    <div class="label">支付方式</div>
                    <div class="align-center">
                        <div class="method wechat">
                            <el-checkbox>微信</el-checkbox>
                            <SvgIcon name="icon-wechat" class="icon"/>
                        </div>
                        <div class="method alipay">
                            <el-checkbox>支付宝</el-checkbox>
                            <SvgIcon name="icon-alipay" class="icon"/>
                        </div>
                    </div>
                </div>

                <div class="actions center">
                    <Button buttonStyle="line">返回书单</Button>
                    <Button>确认下单</Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;
}

.fill-order {
    >.title {
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #000000;
        margin-bottom: 20px;
    }

    .container {
        margin-bottom: 20px;
        padding: 24px 30px 30px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);

        .header {
            margin-bottom: 27px;

            .title {
                font-weight: 700;
                font-size: 16px;
                line-height: 23px;
                color: #000000;

                &::before {
                    content: '';
                    width: 4px;
                    height: 18px;
                    background-color: var(--color1);
                    border-radius: 2px;
                    margin-right: 16px;
                }
            }

            .action-box {
                .page-button {
                    width: 120px;
                    height: 32px;
                    border-radius: 18px;
                    font-weight: 500;
                }
            }
        }

        .receiver-info-box {
            background: #FBFBFB;
            border: 1px solid #C1D4EF;
            border-radius: 6px;
            padding: 20px 30px 24px 20px;
            border-radius: 6px;

            .el-checkbox {
                align-self: center;
                width: 20px;
                height: 20px;
                margin-right: 24px;
            }

            .info-item {
                display: flex;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 8px;

                .item-label {
                    width: 80px;
                    color: #8AA2C5;
                    margin-right: 10px;
                }

                .item-value {
                    color: #33608A
                }
            }

            .icon-edit,
            .icon-delete {
                width: 24px;
                height: 24px;
                color: #bbb;
            }

            .icon-edit {
                margin-right: 40px;
            }


        }


        &.order-details {
            padding: 30px 33px 33px;

            .detail-item {
                &:not(:last-child) {
                    margin-bottom: 12px;
                }

                .item-label {
                    width: 64px;
                    margin-right: 40px;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 23px;
                    color: #000000;
                }

                .item-value {
                    font-size: 14px;
                    line-height: 20px;
                    color: #8AA2C5;

                    &.price {
                        color: #F38A0F;
                    }
                }
            }
        }

        &.payment-method {
            .label {
                width: 64px;
                font-weight: 700;
                font-size: 16px;
                line-height: 23px;
                color: #000000;
                margin-right: 40px;
            }

            .method {
                width: 180px;
                height: 60px;
                padding: 20px 16px;
                border: 1px solid #E6EDF5;
                border-radius: 6px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                &:first-child {
                    margin-right: 20px;
                }
                .el-checkbox {
                    width: 20px;
                    height: 20px;
                }

                .icon {
                    width: 24px;
                    height: 24px;
                }

            }
        }

    }

    .actions {
        margin-top: 20px;

        .page-button {
            width: 200px;
            height: 40px;
            font-weight: 700;

            &:first-child {
                margin-right: 20px;
            }
        }
    }
}
</style>
