<script setup>
import UserCenter from '@/components/UserCenter.vue';
import Button from '@/components/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import PopConfirm from '@/components/PopConfirm.vue';
import ReceiverForm from '@/components/ReceiverForm.vue';

import { ref, reactive } from 'vue';

const receiverFormShow = ref(false)
const updateReceiverFormShow = (value) => {
    receiverFormShow.value = value
}

</script>

<template>
    <UserCenter>
        <div class="receiver-manage">
            <div class="header space-between align-center">
                <div class="title">地址管理</div>
                <Button class="receiver-add" @click="receiverFormShow = true">添加新地址</Button>
            </div>
            <table class="receiver-table">
                <thead>
                    <tr>
                        <th class="th-address">地址</th>
                        <th>电话</th>
                        <th>收件人</th>
                        <th class="th-operate">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in 5">
                        <td class="td-address">
                            <span class="address">北京市海淀区中关村大街5号</span>
                            &nbsp;<span>(默认)</span>
                        </td>
                        <td class="phone-number">17028392777</td>
                        <td>张三</td>
                        <td class="td-operate">
                            <div class="cell-wrapper space-around align-center">
                                <SvgIcon name="icon-edit" class="icon-operate" @click="receiverFormShow = true"/>
                                <PopConfirm :title="`删除这个地址吗？`">
                                    <SvgIcon name="icon-delete" class="icon-operate icon-delete" />
                                </PopConfirm>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination center">
                <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
            </div>

            <ReceiverForm :receiverFormShow="receiverFormShow" @update:receiverFormShow="updateReceiverFormShow"/>
            
        </div>
    </UserCenter>
</template>

<style lang="scss" scoped>
.receiver-manage {
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    padding-bottom: 70px;

    .header {
        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #33608A;
        }

        .receiver-add {
            width: 140px;
            height: 32px;
            border-radius: 18px;
            font-weight: bold;
        }
    }

    .receiver-table {
        margin-top: 20px;
        margin-bottom: 30px;
        border-collapse: collapse;
        width: 100%;

        thead {
            background-color: #F6FAFF;
            border-top: 1px solid #E6EDF5;
            height: 40px;
            font-size: 14px;
            color: #8AA2C5;
            text-align: left;
        }

        tbody {
            tr {
                height: 70px;
                border-bottom: 1px solid #E6EDF5;
                font-size: 14px;
                line-height: 20px;
                color: #33608A;
            }
        }

        .th-address,
        .td-address {
            padding-left: 20px;
        }

        .th-operate {
            text-align: center;
        }

        .td-operate {
            width: 138px;
        }

        .address,
        .phone-number {
            font-weight: 500;
        }

        .icon-operate {
            width: 24px;
            height: 24px;
            color: #B8CCEB;
            cursor: pointer;

            &.icon-delete {
                margin-top: 4px;
            }
        }
    }


}
</style>