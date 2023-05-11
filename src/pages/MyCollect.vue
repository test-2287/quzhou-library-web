<script setup>
import UserCenter from '@/components/UserCenter.vue';
import BookTable from '@/components/BookTable.vue';
import Button from '@/components/Button.vue';
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
                    <Button buttonStyle="line">取消收藏</Button>
                    <Button>加入书车</Button>
                </div>
            </div>
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
            > * {margin-right: 20px;}
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

}
</style>