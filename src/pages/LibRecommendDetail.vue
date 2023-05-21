<script setup>
import Section from '@/pages/homepage/Section.vue';
import BookCardVertical from '@/pages/homepage/BookCardVertical.vue';

import { ref, reactive } from 'vue';

const bookData = reactive({
    name: '哲学，为人生烦恼找答案1',
    author: '[美]杰弗里·罗森 著',
    publisher: '北京联合出版公司',
})
</script>

<template>
    <div class="lib-recommend-detail-page center">
        <div class="page-main">
            <div class="banner-box flex">
                <div class="theme-image"><img src="" alt=""></div>
                <div class="theme-detail">
                    <div class="theme-title">一路向西 丝绸之路</div>
                    <div class="theme-subtitle">中华文化的博大精深</div>
                    <div class="theme-intro">
                        中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。
                    </div>
                </div>
            </div>
            <Section class="recommend-section" title="推荐书单">
                <div class="section-content">
                    <div class="book-list">
                        <BookCardVertical v-bind="bookData" v-for="item in 15" />
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
.lib-recommend-detail-page {
    .page-main {
        width: 1200px;
    }



    .banner-box {
        height: 400px;
        background-color: #f5f5f5;
        margin-top: 24px;

        .theme-image {
            width: 765px;
            flex-shrink: 0;
            img {
                width: 100%;
                height: 100%;
            }
        }

        .theme-detail {
            padding: 48px 59px 54px 51px;

            .theme-title {
                font-size: 32px;
                line-height: 46px;
                font-weight: bold;
                margin-bottom: 13x;
            }

            .theme-subtitle {
                font-size: 16px;
                line-height: 22px;
            }
        }

        .theme-intro {
            margin-top: 65px;
            font-size: 14px;
            line-height: 19px;
        }
    }

    .recommend-section {
        background-color: #fff;
        padding-top: 19px;

        &:deep(.section-header) {
            background-color: #fff;
        }

        .section-content {
            padding: 9px 22px 45px;

            .book-list {
                display: grid;
                grid-template-columns: repeat(5, 1fr);
                grid-gap: 20px 14px;
            }

            .pagination-box {
                margin-top: 30px;
            }

        }
    }
}
</style>