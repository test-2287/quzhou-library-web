<script setup>
import Steps from '@/components/Steps.vue';
import BookTable from '@/components/BookTable.vue';
import Button from '@/components/Button.vue'
import SvgIcon from '@/components/SvgIcon.vue';
import PopConfirm from '@/components/PopConfirm.vue';
import ReceiverForm from '@/components/ReceiverForm.vue';
import { ref, reactive } from 'vue';

const paymentMethod = ref('')
const receiverFormShow = ref(false)

const updateReceiverFormShow = (value) => {
    receiverFormShow.value = value
}

const receiverManageDialogShow = ref(false)

</script>

<template>
    <div class="order-page justify-center">
        <div class="page-main">
            <Steps :step="2" />

            <div class="fill-order">
                <div class="title">填写订单</div>

                <div class="container">
                    <div class="header space-between">
                        <div class="title align-center">收件人信息</div>
                        <div class="action-box">
                            <Button @click="receiverManageDialogShow = true">管理地址</Button>
                        </div>
                    </div>

                    <div class="content">
                        <div class="receiver-info-box space-between">
                            <div class="flex">
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
                        <el-radio-group v-model="paymentMethod">
                            <div class="method wechat" :class="{ 'active': paymentMethod === 'wechat' }">
                                <el-radio class="round" :label="'wechat'">微信</el-radio>
                                <SvgIcon name="icon-wechat" class="icon" />
                            </div>
                            <div class="method alipay" :class="{ 'active': paymentMethod === 'alipay' }">
                                <el-radio class="round" :label="'alipay'">支付宝</el-radio>
                                <SvgIcon name="icon-alipay" class="icon" />
                            </div>
                        </el-radio-group>
                    </div>
                </div>

                <div class="actions center">
                    <Button buttonStyle="line">返回书单</Button>
                    <Button>确认下单</Button>
                </div>
            </div>
        </div>

        <ReceiverForm :receiverFormShow="receiverFormShow" @update:receiverFormShow=updateReceiverFormShow />

        <el-dialog class="receiver-manage-dialog" v-model="receiverManageDialogShow">
            <div class="receiver-info-box space-between active">
                <div class="flex">
                    <el-checkbox class="round"></el-checkbox>
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
                    <div class="default-text">默认地址</div>
                    <SvgIcon name="icon-edit" class="icon-edit" @click="receiverFormShow = true" />
                    <PopConfirm title="删除地址吗？" class="icon-box">
                        <SvgIcon name="icon-delete" class="icon-delete" />
                    </PopConfirm>
                </div>
            </div>
            <div class="receiver-info-box space-between">
                <div class="flex">
                    <el-checkbox class="round"></el-checkbox>
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
                    <div class="default-text">默认地址</div>
                    <SvgIcon name="icon-edit" class="icon-edit" @click="receiverFormShow = true" />
                    <PopConfirm title="删除地址吗？" class="icon-box">
                        <SvgIcon name="icon-delete" class="icon-delete" />
                    </PopConfirm>
                </div>
            </div>
            <div class="receiver-manage-dialog-action justify-center">
                <Button class="button" @click="receiverFormShow = true">添加新地址</Button>
            </div>
        </el-dialog>

    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1000px;
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

                &.active {
                    border: 1px solid var(--color1);
                }

                &:first-child {
                    margin-right: 20px;
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

.receiver-info-box {
    background: #FBFBFB;
    border-radius: 6px;
    padding: 20px 30px 24px 20px;
    border-radius: 6px;

    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &.active {
        border: 1px solid #C1D4EF;
    }

    .el-checkbox {
        align-self: center;
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


    .icon-box {
        width: 24px;
        height: 24px;
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

    .default-text {
        font-size: 14px;
        line-height: 20px;
        color: #8AA2C5;
        margin-right: 57px;
    }


}

.receiver-manage-dialog-action {
    .button {
        width: 200px;
        height: 40px;
    }
}

:deep(.receiver-manage-dialog) {
    border-radius: 8px;

}
</style>
