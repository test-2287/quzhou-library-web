<script setup>
import Button from '@/components/Button.vue';
import { ref, reactive, defineProps, onMounted, watchEffect } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    receiverFormShow: {
        type: Boolean,
        default: false
    }
})

const formShow = ref(false)
watchEffect(() => {
    formShow.value = props.receiverFormShow
})


// 表单校验见 element-plus form 文档
const submit = () => {
    console.log('submit')
    receiverFormShow.value = false
}

const cancelSubmit = () => {
    console.log('cancel submit')
    receiverFormShow.value = false
}

</script>

<template>
    <el-dialog v-model="formShow" :show-close="false" class="receiverForm" :title="`添加新地址`">
        <el-form label-width="120px" label-position="left">
            <el-form-item label="收件人姓名">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="手机号码">
                <el-input></el-input>
            </el-form-item>
            <el-form-item label="所在地区">
                <el-select placeholder="省"></el-select>
                <el-select placeholder="市"></el-select>
                <el-select placeholder="区"></el-select>
            </el-form-item>
            <el-form-item label="详细地址">
                <el-input></el-input>
            </el-form-item>
            <el-form-item>
                <el-checkbox class="round">设置为默认地址</el-checkbox>
            </el-form-item>
            <el-form-item>
                <Button class="button button-confirm" @click="submit">确定</Button>
                <Button buttonStyle="line" class="button button-cancel" @click="cancelSubmit">取消</Button>
            </el-form-item>

        </el-form>
    </el-dialog>
</template>

<style lang="scss">
.receiverForm {
    width: 750px;
    border-radius: 8px;

    .el-dialog__header {
        border-bottom: 1px solid #E6EDF5;
    }

    .el-dialog__title {
        font-weight: 700;
        font-size: 16px;
        line-height: 23px;
        color: #33608A;
    }

    .el-dialog__body {
        padding: 24px 66px 31px 44px;
    }

    .el-form-item {
        .el-form-item__label {
            font-size: 14px;
            line-height: 20px;
            color: #000000;
        }

        .el-input {
            width: 240px;
            height: 40px;
        }

        .el-input__wrapper {
            box-shadow: 0 0 0 1px #D1D1D1 inset;
            border-radius: 8px;
        }

        .el-select {
            width: 120px;
            height: 40px;
            margin-right: 12px;

            .el-input {
                width: 120px;
                height: 40px;
            }
        }

    }

    .button {
        width: 120px;
        height: 40px;
        margin-right: 20px;
        font-weight: 700;
    }
}</style>