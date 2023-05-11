<script setup>
import Section from '@/pages/homepage/Section.vue';
import BookCard from '@/components/BookCard.vue';
import Button from '@/components/Button.vue';

import { ref, reactive } from 'vue';

const bookData = reactive({
    name: '哲学，为人生烦恼找答案',
    author: '[美]杰弗里·罗森 著',
    publisher: '北京联合出版公司',
    publishDate: '2022年1月',
    showRank: true
})
</script>

<template>
    <div class="borrow-rank-page center">
        <div class="page-main">
            <Section title="借阅排行榜" class="page-section">
                <div class="section-content">
                    <div class="filter-box flex">
                        <div class="filter-label">筛选</div>
                        <div class="filter-buttons flex">
                            <Button class="filter-button active">1个月</Button>
                            <Button class="filter-button" >1个月</Button>
                        </div>
                    </div>

                    <div class="book-list">
                        <BookCard v-bind="bookData" v-for="item in 12" :rank="item" />
                    </div>

                    <div class="pagination-box center">
                        <el-pagination background layout="prev, pager, next" :total="100"></el-pagination>
                    </div>

                </div>
            </Section>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;
    
    border-radius: 8px;

    .page-section {
        margin-top: 24px;
    }

    .section-content {
        padding: 30px;
        padding-bottom: 44px;
        background-color: #fff;
    }

    .filter-box {
        margin-bottom: 30px;
        .filter-label {
            font-weight: 500;
            font-size: 14px;
            line-height: 32px;
            color: #8AA2C5;
            margin-right: 24px;
        }
        .filter-button {
            width: 90px;
            height: 32px;
            background-color: #EFF6FF;
            color: #3D95E5;
            border-radius: 16px;
            font-weight: 500;
            margin-right: 20px;
            &.active {
                background-color: var(--color1);
                color: #fff;
            }
        }
    }

    .book-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px 30px;

        &:deep(.book-card) {
            border: 1px solid #ececec;
            border-radius: 6px;
            padding: 24px 20px 16px;

            &:hover {
                background-color: #F4F8FC;
                border-color: transparent;
            }

            .book-author,
            .book-publisher,
            .book-publishdate {
                margin-top: 4px;
            }

            .rank {
                left: 24px;
                top: 0;
            }
        }
    }

    .pagination-box {

        margin-top: 30px;
    }
}</style>