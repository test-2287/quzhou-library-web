<script setup>
import Section from '@/pages/homepage/Section.vue';
import SectionTabs from '@/pages/homepage/SectionTabs.vue';
import SectionTab from '@/pages/homepage/SectionTab.vue';
import BookCardVertical from '@/pages/homepage/BookCardVertical.vue';
import BookCard from '@/components/BookCard.vue';
import SvgIcon from '@/components/SvgIcon.vue';

import { ref, reactive, inject } from 'vue';
import { useRouter } from 'vue-router'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import homepageEcardBg from '@/assets/homepage-ecard-bg.jpg';
import libRecommend1 from '@/assets/lib-recommend-1.svg';
import homepageBanner from '@/assets/homepage-banner.svg';
import homepageBanner2 from '@/assets/homepage-banner-2.svg';
import homepageBanner3 from '@/assets/homepage-banner-3.svg';

const router =  useRouter()

const isLogin = inject('isLogin');
const loginDialogShow = inject('loginDialogShow');

const showLoginDialog = () => {
    loginDialogShow.value = true
}

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

const newArrivalBookList = reactive([
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        showPublisher: false,
        isSmall: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        showPublisher: false,
        isSmall: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        showPublisher: false,
        isSmall: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        showPublisher: false,
        isSmall: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        showPublisher: false,
        isSmall: true
    }
])

const popularCategoryList1 = reactive([
    {
        name: '哲学，为人生烦恼找答案1',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    }
])
const popularCategoryList2 = reactive([
    {
        name: '哲学，为人生烦恼找答案2',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
    }
])

const readerRecommendList = reactive([
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        intro: '中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。',
        showCheckDetail: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        intro: '中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。',
        showCheckDetail: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        intro: '中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。',
        showCheckDetail: true
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        intro: '中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。',
        showCheckDetail: true
    }
])

const borrowRankList = reactive([
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        publishDate: '2020-10-10',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        publishDate: '2020-10-10',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        publishDate: '2020-10-10',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        publishDate: '2020-10-10',
    },
    {
        name: '哲学，为人生烦恼找答案',
        author: '[美]杰弗里·罗森 著',
        publisher: '北京联合出版公司',
        publishDate: '2020-10-10',
    }
])

const libRecommendNavigation = {
    prevEl: '.lib-recommend-prev',
    nextEl: '.lib-recommend-next',
}


</script>

<template>
    <div class="homepage justify-center">
        <div class="top-bg"></div>
        <div class="homepage-main">
            <div class="section-grid">
                <div class="grid-category">
                    <div class="category-header">全部图书分类</div>
                    <div class="category-list">
                        <div class="category-item" v-for="item in categoryList" @click="router.push('/category')">
                            <span class="name">{{ item.name }}</span>
                            <span class="number">({{ item.number }})</span>
                            <div class="subcategory" v-if="item.subcategory && item.subcategory.length">
                                <span class="subcategory-item" v-for="subItem in item.subcategory" @click="router.push('/category')">{{ subItem }}</span>
                            </div>
                        </div>
                        <div class="check-all" @click="router.push('/category')">查看所有分类</div>
                    </div>
                </div>
                <div class="grid-banner">
                    <Swiper :pagination="true" :modules="[Pagination, Autoplay]" :autoplay="{ delay: 2000 }">
                        <swiper-slide v-for="item in 4">
                            <div class="banner-item" :style="{'background-image': `url(${homepageBanner})`}">{{ item }}</div>
                        </swiper-slide>
                    </Swiper>
                </div>
                <div class="grid-login" v-if="isLogin === false">
                    <div class="title">欢迎您来到</div>
                    <div class="title">衢州市图书馆</div>
                    <div class="subtitle">阅读是一种感悟人生的艺术</div>
                    <div class="login-button center" @click="showLoginDialog">立即登录</div>
                </div>
                <div class="grid-login" v-else>
                    <div class="user-info space-between">
                        <div class="">
                            <div class="user-name">欢迎 李倩倩</div>
                            <div class="lib-name">衢州市图书馆</div>
                        </div>
                        <div class="avatar center"><img src="" alt=""></div>
                    </div>
                    <div class="my-books-info flex">
                        <div>
                            <div class="number">10</div>
                            <div class="label">我的借阅</div>
                        </div>
                        <div>
                            <div class="number">6</div>
                            <div class="label">我的书单</div>
                        </div>
                    </div>
                </div>
                <div class="grid-notice">
                    <div class="title">通知公告</div>
                    <div class="check-more">更多</div>
                    <div class="notice-list">
                        <div class="notice-item align-center"> <span>图书馆一键借阅正式上线啦！</span> </div>
                        <div class="notice-item align-center"> <span>图书馆关于恢复正常开放时间的通告</span> </div>
                        <div class="notice-item align-center"> <span>关于表彰2022年度图书馆优秀文化志愿者团队和优秀文化志愿者的通知</span> </div>
                    </div>
                </div>
                <div class="grid-new-arrival">
                    <Section :showMore="true" title="新书上架">
                        <div class="section-content new-arrival space-between">
                            <BookCardVertical v-for="item in newArrivalBookList" v-bind="item" />
                        </div>
                    </Section>
                </div>
            </div>
            <div class="section-lib-recommend">
                <Section title="图书馆推荐书单">
                    <div class="section-content lib-recommend flex">

                        <Swiper :slidesPerView="3" :spaceBetween="24" :navigation="libRecommendNavigation"
                            :modules="[Navigation]">
                            <swiper-slide v-for="item in 6">
                                <div class="recommend-item flex-column">
                                    <div class="theme-image"><img :src="libRecommend1" alt=""></div>
                                    <div class="theme-title">一路向西 丝绸之路</div>
                                    <div class="theme-subtitle">中华文化的博大精深</div>
                                    <div class="theme-intro">
                                        中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。
                                    </div>
                                    <div class="check-detail center" @click="router.push('/lib-recommend-detail')">查看详情</div>
                                </div>
                            </swiper-slide>
                        </Swiper>

                        <div class="swiper-navigate lib-recommend-prev">
                            <SvgIcon name="icon-left" class="icon" />
                        </div>
                        <div class="swiper-navigate lib-recommend-next">
                            <SvgIcon name="icon-right" class="icon" />
                        </div>

                    </div>
                </Section>
            </div>
            <div class="section-popular-category">
                <SectionTabs :title="`热门图书分类`">
                    <div class="section-content popular-category">
                        <SectionTab title="哲学宗教">
                            <div class="section-container">
                                <BookCardVertical v-for="item in popularCategoryList1" v-bind="item" />
                            </div>
                        </SectionTab>
                        <SectionTab title="文化科学">
                            <div class="section-container">
                                <BookCardVertical v-for="item in popularCategoryList2" v-bind="item" />
                            </div>
                        </SectionTab>
                        <SectionTab title="历史地理">
                            <div class="section-container">
                                <BookCardVertical v-for="item in popularCategoryList1" v-bind="item" />
                            </div>
                        </SectionTab>
                        <SectionTab title="社会科学">
                            <div class="section-container">
                                <BookCardVertical v-for="item in popularCategoryList2" v-bind="item" />
                            </div>
                        </SectionTab>
                        <SectionTab title="自然科学">
                            <div class="section-container">
                                <BookCardVertical v-for="item in popularCategoryList1" v-bind="item" />
                            </div>
                        </SectionTab>
                    </div>
                </SectionTabs>
            </div>
            <div class="section-image-floor space-between">
                <div class="image-container"><img :src="homepageEcardBg" alt=""></div>
                <div class="image-container" @click="router.push('/lib-recommend-detail')"><img :src="homepageBanner2" alt=""></div>
                <div class="image-container" @click="router.push('/lib-recommend-detail')"><img :src="homepageBanner3" alt=""></div>
            </div>
            <div class="section-recommend_rank space-between">
                <div class="left">
                    <Section title="读者推荐" :showMore="true" @onMore="router.push('/reader-recommend')">
                        <div class="section-content reader-recommend">
                            <BookCard v-for="item in readerRecommendList" v-bind="item" />
                        </div>
                    </Section>
                </div>
                <div class="right">
                    <Section title="借阅排行" :showMore="true" @onMore="router.push('/borrow-rank')">
                        <div class="section-content borrow-rank">
                            <div class="book-item" v-for="(item, index) in borrowRankList">
                                <BookCard v-bind="item" :rank="index + 1" size="small" type="compact" />
                            </div>
                        </div>
                    </Section>
                </div>
            </div>
            <div class="section-popular">
                <Section title="热门图书" :showMore="true">
                    <div class="section-content popular">
                        <BookCardVertical v-for="item in popularCategoryList1" v-bind="item" />
                    </div>
                </Section>
            </div>
            <div class="section-recommend">
                <Section title="猜你喜欢的图书" :showMore="true">
                    <div class="section-content popular">
                        <BookCardVertical v-for="item in popularCategoryList1" v-bind="item" />
                    </div>
                </Section>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.homepage {
    position: relative;
}

.top-bg {
    width: 100vw;
    min-width: 1200px;
    height: 410px;
    background-color: #0047B2;
    position: absolute;
    top: -90px;
    left: 0;
    z-index: 1;
    background-image: url('./homepage/assets/homepage-top-bg.svg');
    background-repeat: no-repeat;
    background-size: cover;
}

.homepage-main {
    width: 1200px;
    padding: 43px 0 61px;
    position: relative;
    z-index: 2;
}

.section-grid {
    display: grid;
    grid-template: 201px 170px 310px / 285px 589px 285px;
    grid-gap: 20px;
    grid-template-areas:
        "category banner login"
        "category banner notice"
        "category new-arrival new-arrival";

    .grid-category {
        grid-area: category;
    }

    .grid-banner {
        grid-area: banner;
    }

    .grid-login {
        grid-area: login;
    }

    .grid-notice {
        grid-area: notice;
    }

    .grid-new-arrival {
        grid-area: new-arrival;
    }
}


.grid-category {
    border-radius: 8px;
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
        height: 677px;
        padding: 14px 16px 81px;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
        position: relative;

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
            width: 100%;
            height: 41px;
            border-radius: 0 0 8px 8px;
            text-align: center;
            background-color: #fff;
            bottom: 0;
            left: 0;
            /* transform: translateX(-50%); */
            font-size: var(--font-size2);
            line-height: var(--line-height2);
            color: #3D95E5;
            cursor: pointer;
        }
    }
}

.grid-banner {
    background-color: #b3b3b3;
    border-radius: 8px;
    overflow: hidden;

    .banner-item {
        width: 589px;
        height: 390px;
    }

    &:deep(.swiper-pagination-bullets) {
        padding-right: 20px;
        text-align: right;

        .swiper-pagination-bullet {
            width: 6px;
            height: 7px;
            border-radius: 3px;
            background-color: #fff;
            transition: all 0.3s ease-in-out;

            &.swiper-pagination-bullet-active {
                width: 20px;
            }
        }
    }
}

.grid-login {
    width: 285px;
    height: 201px;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color1);
    background-image: url('./homepage/assets/homepage-login-bg.svg');
    background-repeat: no-repeat;
    background-position: right 16px bottom;

    .title {
        font-size: var(--font-size7);
        line-height: 35px;
        color: #fff;
        font-weight: 700;
    }

    .subtitle {
        font-size: var(--font-size1);
        line-height: calc(var(--font-size1) + 6px);
        color: #61AAFF;
        margin-top: 10px;
    }

    .login-button {
        width: 100px;
        height: 40px;
        border-radius: 8px;
        background-color: #548AF1;
        font-size: var(--font-size2);
        color: #fff;
        font-weight: 700;
        margin-top: 21px;
        cursor: pointer;
    }

    .user-info {
        .user-name {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #FFFFFF;
            margin-top: 8px;
        }

        .lib-name {
            font-size: 12px;
            line-height: 17px;
            color: rgba(255, 255, 255, 0.5);
        }

        .avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fff;

            img {
                width: 40px;
                height: 40px;
            }
        }
    }

    .my-books-info {
        margin-top: 47px;

        >div {
            &:first-child {
                padding-right: 30px;
                border-right: 1px solid rgba(255, 255, 255, 0.3);
            }

            &:last-child {
                padding-left: 32px;
            }
        }

        .number {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #FFFFFF;
            margin-bottom: 3px;
        }

        .label {
            font-size: 14px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
}

.grid-notice {
    width: 285px;
    height: 170px;
    background-color: #fff;
    border-radius: 8px;
    padding: 18px 17px 19px 20px;
    position: relative;

    .check-more {
        position: absolute;
        top: 21px;
        right: 16px;
        font-size: var(--font-size2);
        line-height: var(var(--font-size2) + 6px);
        color: #b3b3b3;
        cursor: pointer;
    }

    .title {
        font-size: var(--font-size3);
        line-height: calc(var(--font-size3) + 6px);
        font-weight: 700;
        color: #4397FB;
        margin-bottom: 22px;
    }

    .notice-list {
        .notice-item {
            font-size: var(--font-size2);
            line-height: calc(var(--font-size2) + 6px);
            color: #505050;
            max-width: 248px;
            cursor: pointer;

            &:not(:last-child) {
                margin-bottom: 14px;
            }

            span {
                max-width: 235px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            &::before {
                content: '';
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: var(--color1);
                margin-right: 8px;
                flex-shrink: 0;
            }
        }
    }

}

.section-content.new-arrival {
    height: 266px;
    padding: 24px 12px 0;
    background-color: #fff;
    border-radius: 0 0 8px 8px;
}

.section-lib-recommend {
    margin-top: 30px;
}


.section-content.lib-recommend {
    height: 446px;
    padding: 40px 36px 30px;
    background-color: #fff;
    border-radius: 0 0 8px 8px;
    position: relative;

    .swiper-navigate {
        position: absolute;
        z-index: 10;
        top: 171px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        .icon {
            width: 7px;
            height: 14px;
            color: #BDC7E1;
        }

        &.lib-recommend-prev {
            left: -20px;
        }

        &.lib-recommend-next {
            right: -20px;
        }
    }

    .recommend-item {
        width: 360px;
        max-width: 360px;

        &:not(:last-child) {
            margin-right: 24px;
        }

        .theme-image {
            width: 360px;
            height: 151px;
            border-radius: 8px;
            margin-bottom: 20px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .theme-title {
            font-size: var(--font-size3);
            line-height: calc(var(--font-size3) + 6px);
            color: #000;
            font-weight: 500;
            margin-bottom: 10px;
        }

        .theme-subtitle,
        .theme-intro {
            font-size: var(--font-size2);
            line-height: calc(var(--font-size2) + 6px);
            color: #929292;
        }

        .theme-subtitle {
            margin-bottom: 24px;
        }

        .theme-intro {
            margin-bottom: 22px;
        }

        .check-detail {
            width: 90px;
            height: 32px;
            border-radius: 18px;
            background-color: #EFF6FF;
            color: #3D95E5;
            font-size: var(--font-size2);
            line-height: calc(var(--font-size2) + 6px);
            cursor: pointer;
        }
    }
}

.section-popular-category {
    margin-top: 30px;

    .section-content {
        height: 600px;
        padding: 34px 22px 26px;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
    }

    .section-container {
        display: flex;
        flex-wrap: wrap;
    }

    &:deep(.book-item-vertical) {
        padding-top: 10px;
        padding-bottom: 14px;
        margin-bottom: 20px;
        margin-right: 14px;
    }

    &:deep(.book-item-vertical:nth-child(5n)) {
        margin-right: 0;
    }
}

.section-image-floor {
    margin-top: 30px;

    .image-container {
        width: 386px;
        height: 130px;
        border-radius: 8px;

        img {
            width: 100%;
            height: 100%;
        }
    }

}

.section-recommend_rank {
    margin-top: 30px;

    .left {
        width: 794px;
    }

    .right {
        width: 387px;
    }

    .reader-recommend,
    .borrow-rank {
        height: 666px;
        background-color: #fff;
        border-radius: 0 0 8px 8px;
    }

    .reader-recommend {
        padding: 20px 35px 38px 24px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 37px;
        row-gap: 66px;
        position: relative;

        &::after {
            position: absolute;
            top: calc(50% - 4px);
            left: 35px;
            content: '';
            width: calc(100% - 35px - 38px);
            height: 1px;
            background-color: #E7E7E7;
        }

        &:deep(.book-name) {
            margin-bottom: 8px;
        }
    }

    .borrow-rank {
        padding: 20px 24px 30px;

        .book-item {
            padding-left: 40px;
            padding-bottom: 14px;

            &:not(:last-child) {
                margin-bottom: 14px;
                border-bottom: 1px solid #e4e4e4;
            }

            &:deep(.book-image) {
                width: 70px;
                height: 98px;
            }

            &:deep(.rank) {
                left: -40px;
            }

            &:deep(.book-name) {
                padding-top: 23px;
                max-width: 200px;
            }

            &:deep(.author-publisher) {
                max-width: 200px;
            }

            &:deep(.book-publishdate) {
                margin-top: 4px;
                color: #929292;
            }

        }
    }


}

.section-popular,
.section-recommend {
    margin-top: 30px;
    background-color: #fff;
    border-radius: 0 0 8px 8px;

    .section-content {
        display: flex;
        flex-wrap: wrap;
        height: 586px;
        padding: 24px 22px 22px;

        &:deep(.book-item-vertical) {
            padding-top: 10px;
            padding-bottom: 14px;
            margin-bottom: 20px;
            margin-right: 14px;
        }

        &:deep(.book-item-vertical:nth-child(5n)) {
            margin-right: 0;
        }
    }
}</style>