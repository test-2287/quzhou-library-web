<script setup>
import { ref, defineProps, reactive } from 'vue';
import Button from '@/components/Button.vue';

import PopConfirm from './PopConfirm.vue';

const confirmDelete = () => {
    console.log('confirm delete')
}
const cancelDelete = () => {
    console.log('cancel delete')
}

const props = defineProps({
    hasCheckbox: {
        type: Boolean,
        default: false
    },
    hasOperation: {
        type: Boolean,
        default: false
    },
    hasAuthor: {
        type: Boolean,
        default: true
    },
    hasPublisher: {
        type: Boolean,
        default: true
    },
    hasAuthorPublisher: {
        type: Boolean,
        default: false
    },
    hasIsbn: {
        type: Boolean,
        default: true
    },
    hasBorrowDate: {
        type: Boolean,
        default: false
    },
    hasLeftTime: {
        type: Boolean,
        default: false
    },
    operationType: {
        type: String,
        default: '', // delete | addCart
    }

})

const bookData = reactive(
    {
        name: '《中国古代文学史》',
        author: '[美] 菲利普·朱迪狄欧 著',
        publisher: '北京大学出版社',
        isbn: '978-7301-286758'
    }
)

</script>

<template>
    <table>
        <thead>
            <tr>
                <th>名称</th>
                <template v-if="hasAuthorPublisher">
                    <th>作者/出版社</th>
                </template>
                <template v-else>
                    <th v-if="hasAuthor">作者</th>
                    <th v-if="hasPublisher">出版社</th>
                </template>
                <th v-if="hasIsbn">ISBN</th>
                <th v-if="hasBorrowDate">借还日期</th>
                <th v-if="hasLeftTime">剩余时间</th>
                <th v-if="hasOperation">操作</th>
            </tr>
        </thead>
        <tbody>
            <!-- active -->
            <tr :class="{ 'active': item == 1 }" v-for="item in 3">
                <td class="">
                    <div class="cell-wrapper align-center" :style="{
                        'padding-left': '20px'
                    }">
                        <el-checkbox class="round" v-if="hasCheckbox"></el-checkbox>
                        <div class="book-image"><img src="" alt=""></div>
                        <div class="book-name">{{ bookData.name }}</div>
                    </div>
                </td>
                <template v-if="hasAuthorPublisher">
                    <td>
                        <div class="cell-wrapper author-publisher">
                            <div>{{ bookData.author }}</div>
                            <div>{{ bookData.publisher }}</div>
                        </div>
                    </td>
                </template>
                <template v-else>
                    <td v-if="hasAuthor">
                        <div class="cell-wrapper">{{ bookData.author }}</div>
                    </td>
                    <td v-if="hasPublisher">
                        <div class="cell-wrapper">{{ bookData.publisher }}</div>
                    </td>
                </template>
                <td v-if="hasIsbn">
                    <div class="cell-wrapper">{{ bookData.isbn }}</div>
                </td>
                <td v-if="hasBorrowDate">
                    <div class="cell-wrapper borrow-date">
                        <div>借阅日期: 2023年1月20日</div>
                        <div>还回日期: 2023年2月20日</div>
                    </div>
                </td>
                <td v-if="hasLeftTime">
                    <div class="cell-wrapper flex">
                        <div class="left-time">
                            <div class="label center">离归还有</div>
                            <div class="value center">3天</div>
                        </div>
                    </div>
                </td>
                <td v-if="hasOperation">
                    <div class="cell-wrapper">
                        <PopConfirm class="delete" v-if="operationType == 'delete'" v-bind="{
                            title: '确定删除所选图书吗？',
                        }" @onConfirm="confirmDelete" @onCancel="cancelDelete">
                            删除
                        </PopConfirm>
                        <Button v-if="operationType == 'addCart'" buttonStyle="line" size="small">加入书车</Button>
                    </div>

                </td>
            </tr>

        </tbody>
    </table>
</template>

<style lang="scss" scoped>
table {
    width: 100%;
    border-collapse: collapse;

    tr {
        border-bottom: 1px solid #E6EDF5;
        border-top: 1px solid #E6EDF5;
    }
}

thead {
    height: 40px;
    background-color: #F6FAFF;
    font-size: 14px;
    line-height: 20px;
    color: #8AA2C5;

    th:not(:first-child) {
        text-align: left;
    }
}

tbody {
    font-size: 14px;
    line-height: 20px;
    color: #8AA2C5;

    tr {
        height: 120px;

        &.active {
            background-color: #F6FAFF;
        }

    }

    .cell-wrapper {
        padding: 18px 0;
    }

    .book-image {
        width: 60px;
        height: 84px;
        margin-right: 19px;

        img {
            width: 88.3%;
            height: 88.3%;
        }
    }

    .book-name {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #234B70;
    }

    .delete {
        margin-right: 46px;
        color: #FF8181;
        cursor: pointer;
    }

    .author-publisher>div {
        margin-bottom: 6px;
    }

    .borrow-date>div {
        margin-bottom: 6px;
    }


    .left-time {
        border: 1px solid #F5F5F5;
        border-radius: 6px;
        background-color: #fff;
        overflow: hidden;

        .label {
            height: 24px;
            padding: 0 9px;
            background: rgba(238, 186, 84, 0.15);
            font-size: 12px;
            line-height: 17px;
            color: #D7BB9B;
        }

        .value {
            height: 36px;
            padding: 0 9px;
            font-weight: 700;
            font-size: 16px;
            line-height: 23px;
            color: #F38A0F;
        }
    }

    .borrow-date {
        >div {
            margin-bottom: 6px;
        }
    }

    .el-checkbox {
        margin-right: 20px;
    }

}
</style>