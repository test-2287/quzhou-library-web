<script setup>
import Section from '@/pages/homepage/Section.vue';
import BookCard from '@/components/BookCard.vue';

import { ref, reactive } from 'vue';

const bookData = reactive({
    name: '哲学，为人生烦恼找答案',
    author: '[美]杰弗里·罗森 著',
    publisher: '北京联合出版公司',
    intro: '中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。'
})
</script>

<template>
    <div class="reader-recommend-page center">
        <div class="page-main">
            <Section title="读者推荐读书" class="page-section">
                <div class="section-content">
                    <div class="book-list">
                        <BookCard v-bind="bookData" v-for="item in 10"/>
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
        padding-bottom: 46px;
        background-color: #fff;
    }
    .book-list {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 20px 30px;
        .book-card {
            border: 1px solid #ececec;
            border-radius: 6px;
            padding: 24px 32px 25px 20px;
            &:hover {
                background-color: #F4F8FC;
            }
            &:deep(.book-intro) {
                margin-top: 16px;
            }
        }
    }
    .pagination-box {

        margin-top: 30px;
    }
}
</style>