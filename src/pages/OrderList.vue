<script setup>
import UserCenter from '@/components/UserCenter.vue'
import Button from '@/components/Button.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import { Search } from '@element-plus/icons-vue'

import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const cancelOrderDialogShow = ref(false)

</script>

<template>
    <UserCenter>
        <div class="order-list-page">
            <div class="header space-between">
                <div class="title">我的订单</div>
                <div class="search-order">
                    <el-input class="w-50 m-2" size="large" placeholder="搜索订单" :suffix-icon="Search" />
                </div>
            </div>

            <div class="order-list">
                <el-tabs>
                    <el-tab-pane label="全部">
                        <div class="order-item">
                            <div class="header space-between">
                                <div>
                                    <div class="align-center">
                                        <div class="title align-center">衢州市图书馆</div>
                                        <div class="order-status unpay">待支付</div>
                                        <div class="order-status pending">待处理</div>
                                        <div class="order-status canceled">已取消</div>
                                    </div>
                                    <div class="order-info align-center">
                                        <span>订单编号: 2947587461</span>
                                        <span>订单时间: 2023年1月10日 10:28:04</span>
                                    </div>
                                </div>
                                <div class="right align-center">
                                    <Button buttonStyle="line" class="button button-cancel"
                                        @click="cancelOrderDialogShow = true">取消订单</Button>
                                    <Button class="button button-check" @click="router.push('/order-detail')">查看订单</Button>
                                </div>
                            </div>
                            <div class="book-list flex">
                                <div class="book-item" v-for="item in 6">
                                    <div class="book-image center"><img src="" alt=""></div>
                                    <div class="book-name">思辨与立场：生活中无处不在的批判性思维工具</div>
                                </div>
                            </div>
                        </div>

                        <div class="pagination-box center">
                            <el-pagination background layout="prev, pager, next" :total="100" class="order-pagination" />
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待支付">
                        <div class="empty-box flex-column center">
                            <SvgIcon name="book-detail-empty" class="icon-empty" />
                            <div>抱歉！没有找到相关订单</div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="待处理"></el-tab-pane>
                    <el-tab-pane label="已处理"></el-tab-pane>
                    <el-tab-pane label="已取消"></el-tab-pane>
                </el-tabs>

            </div>

            <el-dialog v-model="cancelOrderDialogShow" class="dialog-delete-confirm" :show-close="false"
                :title="'确认取消订单吗？'">
                <template #footer>
                    <div class="dialog-footer justify-center">
                        <Button buttonStyle="line" class="button-cancel" @click="cancelOrderDialogShow = false">取消</Button>
                        <Button class="button-confirm" @click="() => { cancelOrderDialogShow = false }">确定</Button>
                    </div>
                </template>
            </el-dialog>
            
        </div>
    </UserCenter>
</template>

<style lang="scss" scoped>
.order-list-page {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    padding-bottom: 40px;

    .header {
        margin-bottom: 25px;

        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #33608A;
        }

        .search-order {
            width: 240px;
            height: 40px;
        }
    }

    &:deep(.el-tabs) {
        .el-tabs__item {
            font-size: 14px;
            line-height: 20px;
            font-weight: 500;

            /* padding: 10px 20px; */
            &.is-active {
                color: var(--color1);
            }
        }

        .el-tabs__active-bar {
            background-color: var(--color1);
        }

        .el-tabs__nav-wrap::after {
            background-color: transparent;
        }
    }

    .order-list {
        .order-item {
            border: 1px solid #E6EDF5;
            border-radius: 8px;

            .header {
                padding: 14px 20px 16px;
                border-bottom: 1px solid #E6EDF5;

                >.right {
                    align-self: flex-start;
                    margin-top: 6px;
                }

                .title {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    color: #33608A;

                    &::before {
                        content: "";
                        width: 4px;
                        height: 15px;
                        border-radius: 2px;
                        margin-right: 10px;
                        background-color: var(--color1);
                    }
                }

                .order-status {
                    padding: 6px 10px;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                    border-radius: 16px;
                    margin-left: 16px;

                    &.unpay {
                        color: #50C75C;
                        background-color: #E3F8E0;
                    }

                    &.pending {
                        color: #629FFF;
                        background-color: #E5F3FF;
                    }

                    &.canceled {
                        background-color: #EEE;
                        color: #B4B4B4;
                    }
                }

                .order-info {
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #8AA2C5;

                    span {
                        margin-right: 16px;
                    }
                }

                .button {
                    width: 90px;
                    height: 32px;
                    border-radius: 16px;
                    font-weight: 500;
                    margin-left: 16px;
                }
            }

            .book-list {
                padding: 22px;
                padding-top: 20px;

                .book-item {
                    margin-right: 20px;

                    .book-image {
                        width: 60px;
                        height: 84px;
                        margin-bottom: 9px;

                        img {
                            width: 88.33%;
                            height: 88.33%;
                        }
                    }

                    .book-name {
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 17px;
                        color: #234B70;
                        width: 60px;
                        max-height: 34px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;

                    }
                }
            }

        }

        .pagination-box {
            margin-top: 30px;
        }

        .empty-box {
            height: 350px;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #B8CCEB;

            .icon-empty {
                width: 160px;
                height: 160px;
                margin-bottom: 20px;
            }
        }
    }


    :deep(.el-dialog) {
        border-radius: 8px;

        .el-dialog__header {
            text-align: center;
            padding-bottom: 0;
            margin-right: 0;
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
            color: #3A3A3A;
        }
    }

    :deep(.dialog-delete-confirm) {
        width: 220px;

        .el-dialog__body {
            padding: 0;
        }

        .dialog-footer {
            padding: 0;
            margin-top: 20px;

            .button-cancel {
                width: 80px;
                height: 32px;
                font-weight: 700;
                margin-right: 20px;
            }

            .button-confirm {
                width: 80px;
                height: 32px;
                font-weight: 700;
            }
        }
    }
}</style>
