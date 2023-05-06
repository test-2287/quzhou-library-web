<script setup>
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
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
    img: {
        type: String,
        default: ''
    },
    showPublisher: {
        type: Boolean,
        default: true
    },
    stockStatus: {
        type: String,
        default: '' // lib store
    },
    isSearch: {
        type: Boolean,
        default: false
    },
    isSmall: {
        type: Boolean,
        default: false
    },
})

</script>

<template>
    <div class="book-item-vertical" :class="{
        'small': isSmall,
        'search': isSearch,
    }">
        <div class="image-container center">
            <img src="" alt="">
        </div>
        <div class="book-name">{{ name }}</div>
        <div class="book-author">{{ author }}</div>
        <div class="book-publisher">{{ publisher }}</div>
        <div class="book-stock" v-if="stockStatus">
            <div class="stock-info align-center lib" v-if="stockStatus === 'lib'">
                <div class="icon center">馆</div>
                <div>衢州市图书馆</div>
            </div>
            <div class="stock-info align-center store" v-if="stockStatus === 'store'">
                <div class="icon center">店</div>
                <div>新华书店</div>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.book-item-vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 19px;
    border: 1px solid #ececec;
    border-radius: 6px;

    .image-container {
        width: 120px;
        height: 168px;
        margin-bottom: 6px;

        img {
            width: 88.8%;
            height: 88.8%;
        }
    }

    .book-name,
    .book-author,
    .book-publisher,
    .book-stock {
        width: 180px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-align: center;
    }

    .book-name {
        font-size: var(--font-size2);
        line-height: calc(var(--font-size2) + 6px);
        font-weight: 700;
        color: #000;
        margin-bottom: 2px;
    }

    .book-author,
    .book-publisher,
    .book-stock {
        font-size: var(--font-size1);
        line-height: calc(var(--font-size1) + 5px);
        color: #787878;
        margin-bottom: 2px;
    }

    .book-stock {
        margin-top: 8px;
        .stock-info {
            .icon {
                width: 16px;
                height: 16px;
                border-radius: 4px;
                color: #fff;
                font-size: 10px;
                margin-right: 4px;
            }
            &.lib {
                .icon {
                    background: linear-gradient(135deg, #9CB8FF 0%, #1264E0 100%);
                }
            }
            &.store {
                .icon {
                    background: linear-gradient(135deg, #FFBA7B 0%, #E41B1B 100%);
                }
            }

        }
    }

    &.small {
        border: none;
        padding: 0 15px;

        .image-container {
            width: 110px;
            height: 154px;
        }

        .book-name,
        .book-author,
        .book-publisher {
            width: 120px;
        }
    }

    &.search {
        .book-name, .book-publisher, .book-author {
            text-align: left;
        }
    }
}
</style>