<script setup>
import UserCenter from '@/components/UserCenter.vue';
import BookTable from '@/components/BookTable.vue';

</script>

<template>
    <UserCenter>
        <div class="borrow-history">
            <div class="header space-between">
                <div class="title">借阅历史</div>
            </div>

            <BookTable hasAuthorPublisher hasBorrowDate hasReturnDate hasBorrowTime :hasIsbn="false" />

            <div class="pagination-box">
                <el-pagination background layout="prev, pager, next" :total="400" />
            </div>
        </div>
    </UserCenter>
</template>

<style lang="scss" scoped>
.borrow-history {
    padding: 24px;
    padding-bottom: 41px;
    background-color: #fff;
    border-radius: 8px;

    .header {
        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #33608A;
            margin-bottom: 20px;
        }
    }

    .pagination-box {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }
}
</style>
