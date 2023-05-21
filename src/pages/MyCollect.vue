<script setup>
import UserCenter from '@/components/UserCenter.vue';
import BookTable from '@/components/BookTable.vue';
import Button from '@/components/Button.vue';
import { ref } from 'vue'

const cancelCollectDialogShow = ref(false)

</script>

<template>
    <UserCenter>
        <div class="my-collect">
            <div class="header">
                <div class="title">我的收藏 (6)</div>
            </div>

            <BookTable hasCheckbox hasOperation operationType="addCart" />

            <div class="actions space-between align-center">
                <el-checkbox class="round">全选</el-checkbox>
                <div class="right align-center">
                    <div class="label">已选中1本图书</div>
                    <Button buttonStyle="line" @click="cancelCollectDialogShow = true">取消收藏</Button>
                    <Button>加入书车</Button>
                </div>
            </div>

            <el-dialog v-model="cancelCollectDialogShow" class="dialog-delete-confirm" :show-close="false"
                :title="'确认取消收藏吗？'">
                <template #footer>
                    <div class="dialog-footer justify-center">
                        <Button buttonStyle="line" class="button-cancel"
                            @click="cancelCollectDialogShow = false">取消</Button>
                        <Button class="button-confirm" @click="() => { cancelCollectDialogShow = false }">确定</Button>
                    </div>
                </template>
            </el-dialog>
        </div>
    </UserCenter>
</template>

<style lang="scss" scoped>
.my-collect {
    padding: 20px 24px;
    padding-bottom: 50px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);

    .header {
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #33608A;
        margin-bottom: 20px;
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

        .right {
            >* {
                margin-right: 20px;
            }
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

}
</style>