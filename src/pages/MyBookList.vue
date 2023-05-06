<script setup>
import { defineProps, ref, reactive } from 'vue';
import Button from '@/components/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import Steps from '@/components/Steps.vue';
import BookTable from '@/components/BookTable.vue';
</script>

<template>
    <div class="my-book-list-page justify-center">
        <div class="page-main">

            <Steps />   

            <div class="book-list">
                <div class="title">我的书单</div>
                <div class="list-container">
                    <div class="header">衢州市图书馆 (3)</div>
                    <div class="list-table">
                        <BookTable />
                        <div class="actions space-between">
                            <el-checkbox>全选</el-checkbox>
                            <div class="right align-center">
                                <span class="number-text">已选中2本图书</span>
                                <Button class="delete" buttonStyle="line">删除</Button>
                                <Button class="submit-order">立即下单</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;
}
.book-list {
    .title {
        margin: 20px 0;
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #000000;
    }

    .list-container {
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 8px;
        box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
        padding: 24px 30px 34px;

        .header {
            font-weight: 700;
            font-size: 16px;
            line-height: 23px;
            color: #8AA2C5;
            margin-bottom: 20px;
        }

        /* .list-table {
            table {
                width: 100%;
                border-collapse: collapse;
                border-top: 1px solid #E6EDF5;
            }

            thead {
                height: 40px;
                background-color: #F6FAFF;
                font-size: 14px;
                line-height: 20px;
                color: #8AA2C5;

                th:not(:first-child) {
                    text-align: left;
                }
            }

            tbody {
                font-size: 14px;
                line-height: 20px;
                color: #8AA2C5;

                tr {
                    height: 120px;

                    &.active {
                        border-top: 1px solid #E6EDF5;
                        border-bottom: 1px solid #E6EDF5;
                        background-color: #F6FAFF;
                    }

                    &:last-child {
                        border-bottom: 1px solid #E6EDF5;
                    }
                }

                .cell-wrapper {
                    padding: 18px 0;
                    display: flex;
                    align-items: center;

                    &.padding-left {
                        padding-left: 20px;
                    }

                    &.delete {
                        padding-right: 46px;
                        color: #FF8181;
                        cursor: pointer;
                    }
                }

                .book-image {
                    width: 60px;
                    height: 84px;
                    margin-right: 19px;

                    img {
                        width: 88.3%;
                        height: 88.3%;
                    }
                }

                .book-name {
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 20px;
                    color: #234B70;
                }

                .el-checkbox {
                    width: 20px;
                    height: 20px;
                    margin-right: 20px;

                }

            }

            
        } */

        .actions {
                margin-top: 20px;

                &:deep(.el-checkbox) {

                    .el-checkbox__label {
                        font-weight: 400;
                    }

                    padding-left: 20px;
                    font-size: 14px;
                    line-height: 20px;
                    color: #8AA2C5;
                }

                .number-text {
                    font-size: 14px;
                    line-height: 20px;
                    color: #8AA2C5;
                    margin-right: 20px;
                }

                .page-button {
                    height: 40px;
                    font-weight: 700;

                    &.delete {
                        width: 100px;
                        margin-right: 20px;
                    }
                    &.submit-order {
                        width: 140px;
                    }
                }


            }
    }
}
</style>