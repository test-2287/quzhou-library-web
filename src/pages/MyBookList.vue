<script setup>
import { defineProps, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import Button from '@/components/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import Steps from '@/components/Steps.vue';
import BookTable from '@/components/BookTable.vue';
import PopConfirm from '@/components/PopConfirm.vue';

const deleteDialogShow = ref(false)


const router = useRouter()

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
                        <BookTable hasCheckbox hasOperation operationType="delete" />
                        <div class="actions space-between">
                            <el-checkbox class="round">全选</el-checkbox>
                            <div class="right align-center">
                                <span class="number-text">已选中2本图书</span>
                                <Button class="delete" buttonStyle="line" @click="() => deleteDialogShow = true">删除</Button>
                                <Button class="submit-order" @click="router.push('/order')">立即下单</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <el-dialog v-model="deleteDialogShow" class="dialog-delete-confirm" :show-close="false" :title="`删除${2}本图书吗？`">
            <template #footer>
                <div class="dialog-footer justify-center">
                    <Button buttonStyle="line" class="button-cancel" @click="deleteDialogShow = false">取消</Button>
                    <Button class="button-confirm" @click="() => { deleteDialogShow = false }">确定</Button>
                </div>
            </template>
        </el-dialog>

    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1000px;
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
</style>