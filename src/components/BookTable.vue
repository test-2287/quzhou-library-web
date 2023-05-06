<script setup>
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>作者</th>
                <th>出版社</th>
                <th>ISBN</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr class="">
                <td class="">
                    <div class="cell-wrapper padding-left align-center">
                        <el-checkbox></el-checkbox>
                        <div class="book-image"><img src="" alt=""></div>
                        <div class="book-name">《中国古代文学史》</div>
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper">
                        [美] 菲利普·朱迪狄欧 著
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper">
                        中国社会科学出版社
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper">
                        284-3783-3475
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper delete">
                        删除
                    </div>

                </td>
            </tr>
            <tr class="active">
                <td class="">
                    <div class="cell-wrapper padding-left align-center">
                        <el-checkbox></el-checkbox>
                        <div class="book-image"><img src="" alt=""></div>
                        <div class="book-name">《中国古代文学史》</div>
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper">
                        [美] 菲利普·朱迪狄欧 著
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper">
                        中国社会科学出版社
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper">
                        284-3783-3475
                    </div>
                </td>
                <td>
                    <div class="cell-wrapper delete">
                        删除
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
    border-top: 1px solid #E6EDF5;
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
            border-top: 1px solid #E6EDF5;
            border-bottom: 1px solid #E6EDF5;
            background-color: #F6FAFF;
        }

        &:last-child {
            border-bottom: 1px solid #E6EDF5;
        }
    }

    .cell-wrapper {
        /* height: 120px; */
        padding: 18px 0;
        /* border-bottom: 1px solid #E6EDF5; */
        display: flex;
        align-items: center;

        &.padding-left {
            padding-left: 20px;
        }

        &.delete {
            padding-right: 46px;
            color: #FF8181;
            cursor: pointer;
        }
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

    .el-checkbox {
        width: 20px;
        height: 20px;
        margin-right: 20px;

    }

}

/* .actions {
        margin-top: 20px;

        &:deep(.el-checkbox) {

            .el-checkbox__label {
                font-weight: 400;
            }

            padding-left: 20px;
            font-size: 14px;
            line-height: 20px;
            color: #8AA2C5;
        }

        .number-text {
            font-size: 14px;
            line-height: 20px;
            color: #8AA2C5;
            margin-right: 20px;
        }

        .page-button {
            height: 40px;
            font-weight: 700;

            &.delete {
                width: 100px;
                margin-right: 20px;
            }

            &.submit-order {
                width: 140px;
            }
        }


    } */
</style>