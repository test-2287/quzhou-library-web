<script setup>
import { ref, reactive } from 'vue'
import Button from '@/components/Button.vue';
import BookCardVertical from '@/pages/homepage/BookCardVertical.vue';
import SvgIcon from '@/components/SvgIcon.vue'

const categoryList = reactive([
    {
        name: '马克思主义',
        number: 59,
        subcategory: [
            '西方哲学', '东方哲学', '古典哲学', '近代哲学', '现代哲学', '马克思主义哲学', '中国哲学史', '外国哲学史', '逻辑学', '伦理学', '美学', '宗教学'
        ]
    },
    {
        name: '哲学',
        number: 59,
    },
    {
        name: '社会科学总论',
        number: 59,
    },
    {
        name: '政治、法律',
        number: 59,
    },
    {
        name: '军事',
        number: 59,
    },
    {
        name: '经济',
        number: 59,
    },
    {
        name: '文化、科学、教育、体育',
        number: 59,
    },
    {
        name: '语言、文字',
        number: 59,
    },
    {
        name: '文学',
        number: 59,
    },
    {
        name: '艺术',
        number: 59,
    },
    {
        name: '历史、地理',
        number: 59,
    },
    {
        name: '自然科学总论',
        number: 59,
    },
    {
        name: '数理科学和化学',
        number: 59,
    },
    {
        name: '天文学、地球科学',
        number: 59,
    },
    {
        name: '天文学、地球科学',
        number: 59,
    },
    {
        name: '天文学、地球科学',
        number: 59,
    }
])

const bookInfo = {
    name: '计算机网络',
    author: '谢希仁',
    publisher: '人民邮电出版社',
}
</script>

<template>
    <div class="category-page center">

        <div class="page-main ">

            <div class="space-between">
                <div class="grid-category">
                    <div class="category-header">全部图书分类</div>
                    <div class="category-list">
                        <div class="category-item" v-for="item in categoryList">
                            <span class="name">{{ item.name }}</span>
                            <span class="number">({{ item.number }})</span>
                            <div class="subcategory" v-if="item.subcategory && item.subcategory.length">
                            <span class="subcategory-item" v-for="subItem in item.subcategory">{{ subItem }}</span>
                        </div>
                        </div>
                        <!-- <div class="check-all">查看所有分类</div> -->
                    </div>
                </div>
                <div class="right">
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
                                    <SvgIcon name="icon-down" class="icon-more" />
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
                            <BookCardVertical v-bind="bookInfo" :isSearch="true" stockStatus="store" />
                            <BookCardVertical v-bind="bookInfo" :isSearch="true" stockStatus="lib" v-for="item in 19" />
                        </div>

                        <div class="pagination-box">
                            <el-pagination background layout="prev, pager, next" :total="400" />
                        </div>
                    </div>
                </div>
            </div>




        </div>
    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;

    >.space-between .right {
        width: 893px;
    }
}

.grid-category {
    margin-top: 19px;
    width: 285px;
    /* border-radius: 8px; */
    /* overflow: scroll; */
    box-shadow: var(--box-shadow1);

    .category-header {
        height: 44px;
        padding: 10px 18px;
        font-size: var(--font-size3);
        line-height: var(--line-height3);
        font-weight: 700;
        color: #fff;
        background-color: #1E7CE6;
        border-radius: 8px 8px 0 0;
    }

    .category-list {
        /* height: 677px; */
        padding: 14px 16px 81px;
        padding-bottom: 19px;
        background-color: #fff;
        position: relative;
        border-radius: 0 0 8px 8px;

        .category-item {
            height: 36px;
            padding: 0 10px;
            font-size: var(--font-size2);
            line-height: 36px;
            margin-bottom: 6px;
            border-radius: 4px;

            &:hover {
                background-color: #EEF5FF;
                cursor: pointer;
            }

            .name {
                color: #121212;
                margin-right: 4px;
                font-weight: 500;
            }

            .number {
                color: #BEBEBE;
            }


            position: relative;

            .subcategory {
                display: none;
                position: absolute;
                z-index: 100;
                top: 0;
                left: 100%;
                background-color: #fff;
                box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.15);
                border-radius: 4px;
                padding: 20px 24px;
                padding-bottom: 12px;
                width: 500px;
                flex-wrap: wrap;

                .subcategory-item {
                    font-size: 14px;
                    line-height: 20px;
                    font-weight: 500;
                    margin-right: 30px;
                    margin-bottom: 12px;
                    border-radius: 4px;
                    cursor: pointer;

                    &:hover {
                        color: var(--color1)
                    }
                }
            }

            &:hover {
                .subcategory {
                    display: flex;
                }
            }
        }



        .check-all {
            position: absolute;
            bottom: 21px;
            left: 50%;
            transform: translateX(-50%);
            font-size: var(--font-size2);
            line-height: var(--line-height2);
            color: #3D95E5;
            cursor: pointer;
        }
    }
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
            padding-right: 0;
            .image-container {
                margin-left: -20px;
            }
            &:nth-child(4n) {
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