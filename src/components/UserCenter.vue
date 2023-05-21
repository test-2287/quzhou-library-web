<script setup>
import SvgIcon from '@/components/SvgIcon.vue'

import { useRouter } from 'vue-router'
const router = useRouter()
</script>

<template>
    <div class="user-center justify-center">
        <div class="page-main">
            <div class="sidebar">
                <div class="header space-between align-center">
                    <div class="title">个人中心</div>
                    <div class="logout">退出</div>
                </div>
                <div class="user-status">

                    <div class="user-info align-center">
                        <div class="avatar center"></div>
                        <div class="info">
                            <div class="user-name">李倩倩</div>
                            <div class="lib-name">所属: 衢州市图书馆</div>
                        </div>
                    </div>

                    <div class="user-data">
                        <div class="item" @click="router.push('/my-borrow')">
                            <div class="number">10</div>
                            <div class="label">我的借阅</div>
                        </div>
                        <div class="item" @click="router.push('/my-booklist')">
                            <div class="number">6</div>
                            <div class="label">我的书单</div>
                        </div>
                    </div>
                </div>
                <div class="menu">
                    <div class="menu-item active" @click="router.push('/order-list')">
                        <SvgIcon name="usercenter-order" class="icon" />
                        我的订单
                    </div>
                    <div class="menu-item active" @click="router.push('/borrow-history')">
                        <SvgIcon name="usercenter-borrow-history" class="icon" />
                        借阅历史
                    </div>
                    <div class="menu-item" @click="router.push('/my-collect')">
                        <SvgIcon name="usercenter-collect" class="icon" />我的收藏
                    </div>
                    <div class="menu-item" @click="router.push('/changepwd')">
                        <SvgIcon name="usercenter-pwd" class="icon" />修改密码
                    </div>
                    <div class="menu-item" @click="router.push('/receiver-manage')">
                        <SvgIcon name="usercenter-address" class="icon" />地址管理
                    </div>
                </div>
            </div>
            <div class="main-content">
                <slot></slot>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;
    margin-top: 22px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.sidebar {
    width: 305px;
    background-color: #fff;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
    border-radius: 8px;
    padding: 24px 16px;

    .header {
        padding: 0 4px 0 8px;
        font-size: 18px;
        margin-bottom: 20px;

        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #33608A;
        }

        .logout {
            cursor: pointer;
            font-size: 14px;
            line-height: 20px;
            color: #1264E0;
        }
    }

    .user-status {
        padding: 20px;
        padding-bottom: 12px;
        border: 1px solid #E6EDF5;
        box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
        border-radius: 10px;
        margin-bottom: 20px;

        .user-info {
            margin-bottom: 20px;

            .avatar {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background-color: #fff;
                filter: drop-shadow(0px 8px 8px rgba(134, 182, 255, 0.15));
                margin-right: 26px;
            }

            .info {
                .user-name {
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 23px;
                    color: #33608A;
                    margin-bottom: 6px;
                }

                .lib-name {
                    font-size: 12px;
                    line-height: 17px;
                    color: #8AA2C5;
                }
            }
        }

        .user-data {
            display: flex;

            .item {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;

                &:first-child {
                    border-right: 1px solid #e4e4e4;
                }

                .number {
                    font-weight: 700;
                    font-size: 22px;
                    line-height: 30px;
                    text-align: center;
                    color: #2378FF;
                    margin-bottom: 4px;
                }

                .label {
                    font-size: 14px;
                    line-height: 20px;
                    text-align: center;
                    color: #33608A;
                }
            }
        }
    }

    .menu {
        .menu-item {
            display: flex;
            align-items: center;
            height: 47px;
            padding: 0 16px;
            font-size: 14px;
            line-height: 20px;
            color: #33608A;
            cursor: pointer;
            font-weight: 500;

            .icon {
                width: 24px;
                height: 24px;
                margin-right: 14px;
            }
        }
    }
}

.main-content {
    width: 875px;
}</style>
