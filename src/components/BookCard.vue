<script setup>
import { defineProps, ref, reactive } from 'vue';
import Button from '@/components/Button.vue';
import bookRankBgOrangeSmall from '@/assets/book-rank-bg-orange-small.svg';
import bookRankBgBlueSmall from '@/assets/book-rank-bg-blue-small.svg'
import bookRankBgOrangeBig from '@/assets/book-rank-bg-orange-big.svg';
import bookRankBgBlueBig from '@/assets/book-rank-bg-blue-big.svg'

const props = defineProps({
    size: {
        type: String,
        default: 'normal' // small
    },
    type: {
        type: String,
        default: 'normal' // compact
    },
    showRank: {
        type: Boolean,
        default: false
    },
    showCheckDetail: {
        type: Boolean,
        default: false
    },

    name: {
        type: String,
        default: ''
    },
    author: {
        type: String,
        default: ''
    },
    publisher: {
        type: String,
        default: ''
    },
    publishDate: {
        type: String,
        default: ''
    },
    intro: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    rank: {
        type: Number,
        default: 0
    }


})
</script>

<template>
    <div class="book-card flex" :class="{
        'small': size === 'small'
    }">

        <template v-if="rank">
            <div class="rank" v-if="size === 'small'" :style="{
                    'background-image': rank <= 3 ? `url(${bookRankBgOrangeSmall})` : `url(${bookRankBgBlueSmall})`
                }">{{ rank }}</div>
            <div class="rank" v-else :style="{
                'background-image': rank <= 3 ? `url(${bookRankBgOrangeBig})` : `url(${bookRankBgBlueBig})`
            }">{{ rank }}</div>
        </template>

        <div class="book-image center left"><img src="" alt=""></div>
        <div class="right">
            <div class="book-name">{{ name }}</div>

            <template v-if="type === 'compact'">
                <div class="author-publisher">
                    <span class="author">{{ author }}</span>
                    &nbsp;
                    <span class="publisher">{{ publisher }}</span>
                </div>
            </template>
            <template v-else>
                <div class="book-author">{{ author }}</div>
                <div class="book-publisher">{{ publisher }}</div>
            </template>

            <div class="book-publishdate" v-if="publishDate">{{ publishDate }}</div>
            <div class="book-intro" v-if="intro">{{ intro }}
            </div>
            <Button v-if="showCheckDetail" class="check-detail" fillColor="#EFF6FF" textColor="#3D95E5"
                size="small">查看详情</Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.book-card {
    position: relative;

    .rank {
        position: absolute;
        left: 0;
        top: 4px;
        width: 30px;
        height: 35px;
        background-repeat: no-repeat;
        background-size: contain;
        font-size: 14px;
        line-height: 19px;
        color: #fff;
        font-weight: 700;
        text-align: center;
        padding-top: 2px;
    }

    .left {
        flex-shrink: 0;
        margin-right: 24px;
    }

    .book-image {
        width: 100px;
        height: 140px;

        img {
            width: 88.8%;
            height: 88.8%
        }
    }

    .book-name {
        font-size: var(--font-size3);
        line-height: calc(var(--font-size3) + 6px);
        margin-bottom: 12px;
        font-weight: 700;
        color: #000;
    }

    .book-author,
    .book-publisher,
    .book-publishdate,
    .author-publisher {
        font-size: var(--font-size1);
        line-height: calc(var(--font-size1) + 6px);
        color: #787878;
    }

    .book-intro {
        margin-top: 30px;
        font-size: var(--font-size2);
        line-height: calc(var(--font-size2) + 6px);
        color: #979797;
    }

    .check-detail {
        margin-top: 20px;
        margin-top: 25px;
    }

    &.small {
        .left {
            margin-right: 24px;
        }
        .rank {
            width: 22px;
            height: 30px;
        }
        .book-image {
            width: 80px;
            height: 112px;
        }
        .book-name {
            margin-bottom: 8px;
            font-size: var(--font-size2);
            line-height: calc(var(--font-size2) + 6px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .author-publisher {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .book-publishdate {
            margin-top: 4px;
            color: #929292;
        }
    }

}
</style>