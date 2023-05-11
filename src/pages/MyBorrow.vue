<script setup>
import UserCenter from '@/components/UserCenter.vue';
import BookTable from '@/components/BookTable.vue';
import Button from '@/components/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';

import { ref, reactive } from 'vue';

const renewDialogShow = ref(false)
const renewTncDialogShow = ref(false)
const renewResultShow = ref(false)

</script>

<template>
    <UserCenter>
        <div class="my-borrow">
            <div class="header space-between">
                <div class="title">我的借阅 (10)</div>
                <div class="statement" @click="renewTncDialogShow = true">借阅图书说明</div>
            </div>


            <BookTable hasCheckbox hasAuthorPublisher hasBorrowDate hasLeftTime :hasIsbn="false" />
            <div class="actions space-between align-center">
                <el-checkbox class="round">全选</el-checkbox>
                <div class="align-center">
                    <div class="label">已选中1本图书</div>
                    <Button @click="renewDialogShow = true">立即续借</Button>
                </div>
            </div>

            <div class="page-empty-box center">
                <SvgIcon name="book-detail-empty" class="icon-empty" />
                <div>暂时没有借阅任何图书</div>
            </div>

            <el-dialog v-model="renewDialogShow" class="dialog-renew" :show-close="false" :title="`续借${2}本图书吗？`">
                <div class="rewnew-dialog-content">
                    <div class="book-item space-between" v-for="item in 2">
                        <div class="book-info">
                            <div class="book-name">贝聿铭全集</div>
                            <div class="book-author">[美] 菲利普·朱迪狄欧 著</div>
                        </div>
                        <div class="renew-day">
                            <div class="label">续借</div>
                            <div class="value">30天</div>
                        </div>
                    </div>
                </div>
                <template #footer>
                    <div class="dialog-footer justify-center">
                        <Button buttonStyle="line" class="button-cancel" @click="renewDialogShow = false">取消</Button>
                        <Button class="button-confirm"
                            @click="() => { renewDialogShow = false; renewResultShow = true }">确定</Button>
                    </div>
                </template>
            </el-dialog>

            <el-dialog v-model="renewResultShow" :show-close="false" class="dialog-result">
                <div class="result-content center">
                    <SvgIcon name="icon-success" class="icon-success" />
                    <div>续借成功</div>
                </div>
            </el-dialog>

            <el-dialog v-model="renewTncDialogShow" class="dialog-tnc" :title="`续借说明`">
                <div class="tnc-content">
                    续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明
                    <br><br>
                    续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明
                    <br><br>
                    续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明续借图书说明
                </div>
            </el-dialog>
        </div>
    </UserCenter>
</template>

<style lang="scss" scoped>
.my-borrow {
    padding: 24px;
    padding-bottom: 40px;
    background-color: #fff;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
    border-radius: 8px;

    .header {
        margin-bottom: 20px;
    }

    .title {
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #33608A;
    }

    .statement {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #1264E0;
        align-self: flex-end;
        cursor: pointer;
    }

    .actions {
        margin-top: 20px;
        padding-left: 20px;

        &:deep(.el-checkbox__label) {
            padding-left: 16px;
            font-size: 14px;
            line-height: 20px;
            color: #8AA2C5;
            font-weight: 400;
        }

        .label {
            font-weight: 400;
            font-size: 14px;
            color: #8AA2C5;
            margin-right: 20px;
        }

        .page-button {
            width: 140px;
            height: 40px;
            font-weight: 700;
        }

    }

    .page-empty-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 500px;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        font-weight: 500;
        color: #B8CCEB;
        .icon-empty {
            margin-bottom: 20px;
        }
    }

    &:deep(.el-dialog) {
        width: 500px;
        border-radius: 8px;


        .el-dialog__header {
            text-align: center;
            padding-bottom: 0;
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

    .rewnew-dialog-content {
        .book-item {
            border: 1px solid #E7E7E7;
            border-radius: 6px;
            padding: 15px 16px;

            &:not(:last-child) {
                margin-bottom: 12px;
            }
        }

        .book-name {
            font-weight: 700;
            font-size: 12px;
            line-height: 17px;
            color: #234B70;
            margin-bottom: 4px;
        }

        .book-author {
            font-size: 12px;
            line-height: 17px;
            color: #8AA2C5;
        }

        .renew-day {
            display: flex;
            flex-direction: column;
            align-items: center;
            color: #F38A0F;
            font-size: 12px;
            line-height: 17px;
        }
    }

    .dialog-footer {
        .page-button {
            width: 120px;
            height: 40px;
        }

        .button-cancel {
            margin-right: 20px;
        }
    }

    &:deep(.dialog-result) {
        width: 180px;

        .el-dialog__header {
            padding: 0;
        }
    }

    .result-content {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        font-size: 18px;
        line-height: 26px;
        color: #000000;

        .icon-success {
            width: 50px;
            height: 50px;
            margin-bottom: 17px;
            color: #38CA20;
        }

    }

    .tnc-content {
        color: #33608A;
        font-size: 12px;
        line-height: 17px;
        padding-bottom: 30px;
    }
}
</style>
