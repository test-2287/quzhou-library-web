<script setup>
import Button from '@/components/Button.vue';
import SvgIcon from '@/components/SvgIcon.vue'
import BookCardVertical from '@/pages/homepage/BookCardVertical.vue';
import { ref, reactive } from 'vue'

const bookInfo = {
    name: '计算机网络',
    author: '谢希仁',
    publisher: '人民邮电出版社',
}
</script>

<template>
    <div class="search-page justify-center">
        <div class="page-main">
            <div class="filter-box">
                <div class="filter-item">
                    <div class="filter-label">出版社</div>
                    <div class="filter-list">
                        <Button buttonStyle="line" class="active">
                            <span class="text">人民邮电出版社</span>
                            <span class="number">(54)</span>
                        </Button>
                        <Button buttonStyle="line" v-for="item in 4">
                            <span class="text">人民邮电出版社</span>
                            <span class="number">(54)</span>
                        </Button>
                        <Button buttonStyle="line">
                            <span class="text">更多</span>
                            <SvgIcon name="icon-down" class="icon-more"/>
                        </Button>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="filter-label">出版时间</div>
                    <div class="filter-list">
                        <Button buttonStyle="line" v-for="item in 5">
                            <span class="text">2012</span>
                            <span class="number">(54)</span>
                        </Button>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="filter-label">作者</div>
                    <div class="filter-list">
                        <Button buttonStyle="line" v-for="item in 5">
                            <span class="text">全部</span>
                        </Button>
                    </div>
                </div>
                <div class="filter-item">
                    <div class="filter-label">来源</div>
                    <div class="filter-list">
                        <Button buttonStyle="line" v-for="item in 5">
                            <span class="text">全部</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div class="search-result">
                <div class="top space-between align-center">
                    <div class="sort align-center">
                        <div class="sort-label">排序</div>
                        <div class="sort-item">
                            <el-dropdown>
                                <span class="sort-name align-center">
                                    综合排序
                                    <SvgIcon name="icon-down" class="icon" />
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>sort 1</el-dropdown-item>
                                        <el-dropdown-item>sort 2</el-dropdown-item>
                                        <el-dropdown-item>sort 3</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="sort-item">
                            <el-dropdown>
                                <span class="sort-name align-center">
                                    出版时间
                                    <SvgIcon name="icon-down" class="icon" />
                                </span>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item>2023</el-dropdown-item>
                                        <el-dropdown-item>2022</el-dropdown-item>
                                        <el-dropdown-item>2021</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                    </div>
                    <div class="result-number">共 1972299 件商品</div>
                </div>

                <div class="result-box">

                    <BookCardVertical v-bind="bookInfo" :isSearch="true" stockStatus="store"/>
                    <BookCardVertical v-bind="bookInfo" :isSearch="true" stockStatus="lib" v-for="item in 19" />
                </div>
                <div class="pagination-box">
                    <!-- 20 -->
                    <el-pagination background 
                    layout="prev, pager, next" :total="400" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;
}

.filter-box {
    margin-top: 19px;
    background-color: #fff;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
    border-radius: 10px;
    padding: 20px 35px 6px 24px;

    .filter-item {
        display: flex;
        align-items: flex-start;
    }

    .filter-label {
        width: 96px;
        flex-shrink: 0;
        font-size: 12px;
        line-height: 42px;
        color: #A2A2A2;
    }

    .filter-list {
        display: flex;
        flex-wrap: wrap;

        .page-button {
            border-radius: 6px;
            background-color: #fff;
            border: 1px solid #ececec;
            ;
            padding: 11px 20px;
            font-size: 12px;
            line-height: 18px;
            display: flex;
            margin-right: 16px;
            margin-bottom: 16px;

            .text {
                color: #000;
                margin-right: 4px;
            }

            .number {
                color: #ACACAC;
            }

            .icon-more {
                width: 12px;
                height: 18px;
                color: #a1a1a1;
            }

            &.active {
                border-color: #86B4FB;

                .text,
                .number {
                    color: var(--color1);
                }
            }
        }

    }
}

.search-result {
    margin-top: 20px;
    padding: 24px 22px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);

    .top {
        margin-bottom: 22px;
    }

    .result-number {
        font-size: 12px;
        line-height: 18px;
        color: #A1A1A1;
    }

    .sort {
        .sort-label {
            font-size: 12px;
            line-height: 18px;
            color: #A1A1A1;
            margin-right: 20px;
        }

        .sort-item {
            margin-right: 15px;
            height: 20px;

            .sort-name {
                font-size: 12px;
                line-height: 18px;
                color: #000;
            }

            .icon {
                width: 20px;
                height: 20px;
                margin-left: 4px;
            }
        }
    }

    .result-box {
        display: flex;
        flex-wrap: wrap;
        .book-item-vertical {
            padding-bottom: 15px;
            margin-right: 14px;
            margin-bottom: 20px;
            &:nth-child(5n) {
                margin-right: 0;
            }
        }

    }

    .pagination-box {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }

}
</style>
