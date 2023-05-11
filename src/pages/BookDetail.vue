<script setup>
import Button from '@/components/Button.vue';
import Section from '@/pages/homepage/Section.vue';
import BookCard from '@/components/BookCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';
import SectionTabs from './homepage/SectionTabs.vue';
import SectionTab from './homepage/SectionTab.vue';
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'

const bookInfo = {
    name: '哲学，为人生烦恼找答案',
    author: '[美]杰弗里·罗森 著',
    publisher: '北京联合出版公司',
}

const libStockShow = ref(true)
const toggleLibStockShow = () => {
    libStockShow.value = !libStockShow.value
}

const collect = ref(false)
const toggleCollect = () => {
    collect.value = !collect.value
}
</script>

<template>
    <div class="book-detail-page justify-center">

        <div class="page-main">

            <div class="bread-crumb flex">
                <div class="label">当前位置：</div>
                <el-breadcrumb :separator-icon="ArrowRight">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>图书详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>


            <div class="space-between">
                <div class="left">
                    <div class="book-info flex">
                        <div class="left center">
                            <div class="book-image">
                                <img src="" alt="">
                            </div>
                        </div>
                        <div class="right">
                            <div class="book-name">哲学，为人生烦恼找答案</div>
                            <div class="book-info-detail-items">
                                <div class="item-label">作者</div>
                                <div class="item-content">[日] 大伴家持 等 陈黎 张芬龄 译</div>
                                <div class="item-label">出版社</div>
                                <div class="item-content">雅众文化 北京联合出版公司</div>
                                <div class="item-label">出版年</div>
                                <div class="item-content">2022年1月</div>
                                <div class="item-label">ISBN</div>
                                <div class="item-content">987-235-458-127</div>
                                <div class="item-label">库存</div>
                                <div class="item-content">有库存</div>
                            </div>
                            <div class="action-box flex">
                                <Button class="action-order">立即下单</Button>
                                <Button class="action-add_cart" buttonStyle="line">加入书单</Button>
                                <Button class="action-collect" buttonStyle="line" @click="toggleCollect">
                                    <SvgIcon :name="`star-${collect ? 'fill' : 'line'}`" class="icon"
                                        :class="{ 'star-fill': collect, 'star-line': !collect }" />
                                    <span>收藏</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div class="book-details">
                        <SectionTabs>

                            <SectionTab title="馆藏信息">
                                <div class="tab-content stock-info">
                                    <div class="header space-between">
                                        <div class="title">馆藏图书列表</div>
                                        <div class="filter">只显示在馆</div>
                                    </div>
                                    <div class="stock-info-lib">
                                        <div class="header space-between align-center">
                                            <span>衢州市图书馆(4)</span>
                                            <SvgIcon :name="`icon-${libStockShow ? 'up' : 'down'}`" class="icon"
                                                @click="toggleLibStockShow" />
                                        </div>
                                        <div class="content space-between" v-show="libStockShow">
                                            <div class="locatoin-label">图书馆馆藏地点1</div>
                                            <div class="location-list">
                                                <div class="location-info space-between" v-for="item in 4">
                                                    <div class="left">
                                                        <div class="info-item">
                                                            <div class="label">类型</div>
                                                            <div class="content">衢州市图书馆外借</div>
                                                        </div>
                                                        <div class="info-item">
                                                            <div class="label">条码号</div>
                                                            <div class="content">40059874646</div>
                                                        </div>
                                                        <div class="info-item">
                                                            <div class="label">索书号</div>
                                                            <div class="content">B2845/0280</div>
                                                        </div>
                                                    </div>
                                                    <div class="right">
                                                        <div class="status available">在馆</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SectionTab>

                            <SectionTab title="内容简介">
                                <div class="tab-content book-intro">
                                    作者对殖民主义欧洲中心的否定，和对后殖民批评范式局限的批评，这一共存的双重叙述，使得这部十余年前出版的专著，至今仍具有其重要性，或者说比以往任何时刻都显得更为重要。
                                    ——马丁·普赫纳（Martin Puchner）
                                    <br><br>
                                    17世纪至18世纪，中国、日本和香料群岛等远东异域令英国人一度目眩神迷。当时的远东供应着欧洲渴求的香料和奢侈品，也是欧洲幻想中潜力无限的商品外销市场。作者罗伯特·马克利重新思考了彼时英国文学对国族和个体身份的想象，由此考察富强的远东如何唤起英国的追慕与忧惧。
                                    <br><br>
                                    作为现代化的物质载体，汽车曾被誉为“改变世界的机器”，重塑了人类社会的生产和消费。在当今中国，私家车与住房更是成为“地位性商品”的代表。购买、驾驶私家车，不仅深深改变了私家车车主的日常生活，也潜移默化地影响了与之社会属性息息相关的空间建构、道德观念和身份意识。可以说，伴随私家车而产生的一系列变化正是中国当代社会发展的缩影。
                                    <br><br>
                                    本书根据作者在珠三角地区为期十年的田野调查写成。通过展示受访者的成长背景、职业发展与家庭生活，考察私家车“开进”日常生活之后所发生的一系列变化，呈现了被汽车相关的事物所影响的中产阶级与当前的汽车文化互动共生的现代性场景。
                                </div>

                            </SectionTab>

                            <SectionTab title="作者简介">
                                <div class="tab-content author-info center">
                                    <div class="empty-box flex-column justify-center">
                                        <SvgIcon name="book-detail-empty" class="icon-empty" />
                                        <span>抱歉！暂时没有内容</span>
                                    </div>
                                </div>
                            </SectionTab>

                        </SectionTabs>
                    </div>
                </div>
                <div class="right">
                    <Section title="相关图书">
                        <div class="relate-book-list">
                            <div class="book-item" v-for="item in 5">
                                <BookCard v-bind="bookInfo" size="small" />
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.page-main {
    width: 1200px;
    padding: 24px 0 54px;

    .left {
        width: 875px;
    }

    .right {
        width: 305px;
    }
}

.book-info {
    padding: 30px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: var(--box-shadow1);

    >.left {
        width: 320px;
        height: 320px;
        border: 1px solid #ececec;
        border-radius: 8px;
        margin-right: 36px;
        flex-shrink: 0;
    }

    >.right {
        flex: 1;
    }

    .book-image {
        width: 179px;
        height: 276px;

        img {
            width: 97.7%;
            height: 97.7%;
        }
    }

    .book-name {
        font-weight: 700;
        font-size: 24px;
        line-height: 35px;
        color: #000000;
        padding-bottom: 20px;
        border-bottom: 1px solid #E6EDF5;
    }

    .book-info-detail-items {
        display: grid;
        grid-template-columns: minmax(auto, max-content) 1fr;
        grid-gap: 8px 12px;
        margin-top: 20px;

        .item-label {
            font-size: 14px;
            line-height: 20px;
            color: #8AA2C5;
            min-width: 60px;
        }

        .item-content {
            font-size: 14px;
            line-height: 20px;
            color: var(--text-color4);
        }
    }

    .action-box {
        margin-top: 20px;

        >*:not(:last-child) {
            margin-right: 20px;
        }

        .action-order {
            width: 180px;
            height: 40px;
            font-weight: 700;
        }

        .action-add_cart {
            width: 100px;
            height: 40px;

        }

        .action-collect {
            height: 40px;
            padding: 10px;
            padding-right: 12px;

            .icon {
                width: 22px;
                height: 23px;
                margin-right: 10px;
            }

            .star-line {
                color: #BFD5EC
            }

            .star-fill {
                color: var(--color1);
            }
        }
    }
}

.book-details {
    margin-top: 20px;

    .tab-content {
        background-color: #fff;
        border-radius: 0 8px 8px 8px;
        box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);
    }

    .stock-info {
        padding: 30px 24px;

        .header {
            margin-bottom: 20px;

            >.title {
                font-weight: 700;
                font-size: 16px;
                line-height: 23px;
                color: #33608A;
            }

            >.filter {
                font-size: 14px;
                line-height: 20px;
                color: #33608A
            }
        }
    }

    .stock-info-lib {
        .header {
            padding: 0 20px;
            height: 46px;
            background-color: #F4F8FC;
            border-radius: 6px;
            font-weight: 700;
            font-size: 14px;
            line-height: 20px;
            color: #33608A;

            .icon {
                width: 24px;
                height: 24px;
                color: #000;
            }
        }

        .content {
            padding-left: 20px;
            border-radius: 6px;

            .locatoin-label {
                font-size: 14px;
                line-height: 20px;
                color: #000;
            }

            .location-list {
                display: flex;
                flex-wrap: wrap;
                width: 652px;

                .location-info {
                    width: 311px;
                    height: 90px;
                    padding: 16px;
                    background-color: #F9F9F9;
                    border-radius: 4px;
                    margin-bottom: 20px;

                    &:nth-last-child(2),
                    &:nth-last-child(1) {
                        margin-bottom: 0;
                    }

                    &:nth-child(2n + 1) {
                        margin-right: 30px;
                    }


                    .info-item {
                        display: flex;
                        align-items: center;

                        &:not(:last-child) {
                            margin-bottom: 4px;
                        }


                        .label {
                            font-size: 12px;
                            line-height: 17px;
                            color: #8AA2C5;
                            width: 60px;
                            margin-right: 20px;
                        }

                        .content {
                            font-size: 12px;
                            line-height: 17px;
                            color: #33608A;
                        }
                    }

                    .status {
                        background: linear-gradient(104.04deg, #88C6FF 0%, #1074EA 100%);
                        border-radius: 4px;
                        padding: 2px 6px;
                        font-size: 12px;
                        line-height: 17px;
                        color: #FFFFFF;

                        &.unavailable {
                            background: linear-gradient(284.04deg, #ED7F1A 0%, #FEC24C 100%), #FF9330;
                        }
                    }
                }
            }
        }

    }

    .book-intro,
    .author-info {
        min-height: 470px;
        padding: 24px;
        font-size: 14px;
        line-height: 24px;
        color: #3A3A3A;

        .empty-box {

            .icon-empty {
                width: 160px;
                height: 160px;
                margin-bottom: 20px;
            }

            span {
                font-weight: 500;
                font-size: 14px;
                line-height: 20px;
                color: #B8CCEB;
            }
        }
    }
}

.relate-book-list {
    padding: 10px 26px 26px 24px;
    background-color: #fff;
    border-radius: 0 0 8px 8px;

    .book-item {
        padding: 18px 16px;
        padding-right: 5px;

        &:not(:last-child) {
            border-bottom: 1px solid #E6EDF5;
        }

        &:deep(.book-image) {
            margin-right: 24px;
        }

        &:deep(.book-name),
        &:deep(.book-author) {
            width: 133px;
            margin-bottom: 6px;
        }
    }
}
</style>

