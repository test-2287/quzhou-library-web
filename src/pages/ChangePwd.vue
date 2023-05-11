<script setup>
import UserCenter from '@/components/UserCenter.vue'
import Button from '@/components/Button.vue'
</script>

<template>
    <UserCenter>
        <div class="changepwd-page">
            <div class="header">
                <div class="title">修改密码</div>
            </div>

            <div class="form-wrapper">
                <el-form label-position="left" label-width="87px">
                    <el-form-item label="原密码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="新密码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item label="确认新密码">
                        <el-input></el-input>
                    </el-form-item>
                    <el-form-item>
                        <Button class="button button-confirm" @click="submit">修改密码</Button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </UserCenter>
</template>

<style lang="scss">
.changepwd-page {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px 24px;
    min-height: 480px;

    .header {
        margin-bottom: 50px;

        .title {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            color: #33608A;
        }

    }

    .form-wrapper {
        padding: 0 36px;
    }

    .el-form-item {
        margin-bottom: 40px;

        .el-form-item__label {
            font-size: 14px;
            line-height: 40px;
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

        .button {
            width: 120px;
            height: 40px;
            font-weight: bold;
        }
    }

}
</style>