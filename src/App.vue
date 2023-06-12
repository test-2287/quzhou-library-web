<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Button from '@/components/Button.vue'
import TopNav from '@/components/TopNav.vue'

import { defineProps, ref, reactive, provide } from 'vue';
import { useRouter } from 'vue-router';



const router = useRouter();

const advanceSearchShow = ref(false)
const showAdvanceSearch = () => {
  advanceSearchShow.value = true
}
const hideAdvanceSearch = () => {
  advanceSearchShow.value = false
}

const searchRecommendShow = ref(false)
const showSearchRecommend = () => {
  searchRecommendShow.value = true
}
const hideSearchRecommend = () => {
  searchRecommendShow.value = false
}


const isLogin = ref(false)

const loginDialogShow = ref(false)
const formType = ref('login') // login | register
const loginType = ref('ecard') // ecard | id
const registerSuccessDialogShow = ref(false)


const registerSumit = () => {
  loginDialogShow.value = false
  registerSuccessDialogShow.value = true
}

provide('isLogin', isLogin)
provide('loginDialogShow', loginDialogShow)

</script>

<template>
  <div class="page-header justify-center">
    <div class="nav-bar space-between align-center">
      <div class="logo-box align-center" @click="router.push('/')">
        <SvgIcon name="lib-logo" class="icon-logo" />
        <div class="lib-name">
          <div class="title">衢州市图书馆</div>
          <div class="subtitle">QUZHOU PUBLIC LIBRARY</div>
        </div>
      </div>
      <div class="search-box align-center">
        <div class="base">
          <el-input placeholder="搜索关键词 / 书名 / 作者" @focus="showSearchRecommend" @blur="hideSearchRecommend">
          </el-input>
          <el-button>
            <SvgIcon name="icon-search" class="icon-search" />
            检索
          </el-button>
        </div>
        <div class="advance-text" @click="showAdvanceSearch">高级检索</div>
        <div class="history-recommend" v-show="searchRecommendShow">
          <div class="search-history">
            <div class="title">历史记录</div>
            <div class="clear">清除</div>
            <div class="content flex">
              <Button class="active">哲学</Button>
              <Button v-for="item in 8">哲学</Button>
            </div>
          </div>
          <div class="popular-search">
            <div class="title">热门检索</div>
            <div class="content">
              <Button class="active">流浪地球</Button>
              <Button v-for="item in 8">流浪地球</Button>
            </div>
          </div>
        </div>
      </div>
      <div class="right flex">
        <div class="right-item shopping-cart">
          <SvgIcon name="icon-shopping-cart" class="icon" />
          我的书车
          <div class="cart-num">
            <span>6</span>
          </div>
        </div>
        <div class="right-item order-list">
          <SvgIcon name="icon-my-order" class="icon" />
          我的订单
        </div>
        <div class="right-item login" @click="loginDialogShow = true" v-if="isLogin === false">
          <SvgIcon name="icon-login" class="icon" />
          登录/注册
        </div>
        <div class="right-item login" @click="loginDialogShow = true" v-else>
          <div class="username">李倩倩</div>
          <div class="avatar"><img src="" alt=""></div>
        </div>

      </div>
    </div>

    <div class="advance-search" v-show="advanceSearchShow" @click.self="hideAdvanceSearch">
      <div class="container center">
        <div class="search-form">
          <div class="form">
            <div class="search-item">
              <div class="label">书名</div>
              <el-input />
            </div>
            <div class="search-item">
              <div class="label">作者</div>
              <el-input placeholder="请输入" />
            </div>
            <div class="search-item" :style="{ 'margin-right': '0px' }">
              <div class="label">出版社</div>
              <el-input placeholder="请输入" />
            </div>
            <div class="search-item">
              <div class="label">ISBN</div>
              <el-input placeholder="请输入" />
            </div>
            <div class="search-item" :style="{ 'margin-right': '0px' }">
              <div class="label">出版日期</div>
              <el-date-picker placeholder="请输入"></el-date-picker>
              <span :style="{ margin: '0 12px' }">到</span>
              <el-date-picker placeholder="请输入"></el-date-picker>
            </div>
          </div>
          <div class="buttons">
            <el-button type="primary" class="search-submit">立即检索</el-button>
            <el-button class="cancel" @click="hideAdvanceSearch">取消</el-button>
          </div>
        </div>


      </div>

    </div>
  </div>

  <div class="page-content">
    <router-view></router-view>
  </div>

  <div class="page-footer">
    <div>
      <a>网站首页</a>
      <a>网站地图</a>
      <a>法律声明</a>
    </div>
    <div>
      <span>本服务由浙江政务服务网、衢州市图书馆提供</span>
      <span>服务咨询热线：0570-3022207</span>
    </div>
    <div>
      <span>粤ICP备 1234567890123 号</span>
      <span>公安网备案 33010602004088号</span>
    </div>
  </div>

  <el-dialog class="login-dialog" v-model="loginDialogShow">
    <div class="welcome-text">
      <div>欢迎您登录</div>
      <div>衢州市图书馆</div>
    </div>
    <div class="dialog-wrapper">
      <div class="login" v-if="formType === 'login'">
        <div class="tabs flex space-between">
          <div class="tab ecard" :class="{ 'active': loginType === 'ecard' }" @click="loginType = 'ecard'">读者证登录</div>
          <div class="tab id" :class="{ 'active': loginType === 'id' }" @click="loginType = 'id'">身份证登录</div>
        </div>
        <div class="form-box">
          <el-form>
            <el-form-item>
              <el-input v-if="loginType === 'ecard'" placeholder="请输入读者证"></el-input>
              <el-input v-if="loginType === 'id'" placeholder="请输入身份证"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item class="code-item">
              <el-input placeholder="请输入验证码" class="code-input"></el-input>
              <div class="code-image"></div>
            </el-form-item>
            <Button class="button" @click="() => { isLogin = true; loginDialogShow = false }">登录</Button>
          </el-form>
          <div class="text-button register" @click="formType = 'register'">没有读者证？立即办证</div>
        </div>
      </div>
      <div class="register" v-if="formType === 'register'">
        <div class="header space-between">
          <div class="title">注册读者证</div>
          <span class="text-button login" @click="formType = 'login'">返回登录</span>
        </div>
        <div class="form-box">
          <el-form>
            <el-form-item>
              <el-select placeholder="请选择所属馆"></el-select>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请填写真实姓名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入身份证号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入手机号码"></el-input>
            </el-form-item>
            <Button class="button" @click="registerSumit">注册</Button>
          </el-form>
        </div>
      </div>
    </div>
  </el-dialog>

  <el-dialog class="register-success-dialog" :show-close="false" title="你的证件已经办理成功" v-model="registerSuccessDialogShow">
    <div class="dialog-content">

      你的身份证号码后6位为默认登录密码，为保障你的账户安全，请在登录后及时修改密码！

    </div>
    <Button class="button"
      @click="() => { registerSuccessDialogShow = false; loginDialogShow = true; loginType = 'ecard' }">立即登录</Button>
  </el-dialog>
</template>

<style lang="scss">

.page-header {
  width: 100vw;
  min-width: 1200px;
  /* height: 90px; */
  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}

.nav-bar {

  width: 1200px;
  height: 90px;
  box-shadow: 0px 8px 8px rgba(134, 182, 255, 0.06);

  .icon-logo {
    width: 67px;
    height: 55px;
    margin-right: 12px;
    cursor: pointer;
  }

  .lib-name {
    .title {
      font-weight: 700;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: 0.1em;
      color: #181818;
    }

    .subtitle {
      font-weight: 500;
      font-size: 12px;
      line-height: 17px;
      letter-spacing: 0.04em;
      color: #9D9D9D;
    }
  }

  .right {
    font-size: 14px;
    line-height: 20px;
    color: #000000;

    .right-item {
      display: flex;
      align-items: center;
    }

    .right-item:not(:last-child) {
      margin-right: 20px;
    }

    .icon {
      width: 24px;
      height: 24px;
      color: var(--color1);
      margin-right: 8px;
    }

    .username {
      margin-right: 10px;
    }

    .avatar {
      flex-shrink: 0;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;

      }

    }

    .shopping-cart {
      position: relative;
      .cart-num {
        position: absolute;
        left: 13px;
        top: -4px;
        height: 12px;
        padding: 0 5px;
        background-color: #F38A0F;
        color: #fff;
        font-size: 10px;
        line-height: 12px;
        border-radius: 6px;
      }
    }

  }

  .el-input {
    width: 350px;
    height: 44px;
  }

  .el-button {
    width: 111px;
    height: 44px;
    padding-left: 23px;
    padding-right: 27px;
    background-color: var(--color1);
    color: #fff;
    border-color: var(--color1);
    border-radius: 0 8px 8px 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    position: relative;
    left: -1px;
  }

  .advance-text {
    font-size: 14px;
    line-height: 20px;
    color: #8C8C8C;
    margin-left: 29px;
    cursor: pointer;
  }

  .icon-search {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }

  .search-box {
    position: relative;

    .history-recommend {
      position: absolute;
      top: 44px;
      left: 4px;
      width: 500px;
      padding: 20px;
      padding-bottom: 14px;
      background-color: #fff;
      border-radius: 8px;

      >div:not(:first-child) {
        margin-top: 12px;
      }

      .title {
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #000000;
        margin-bottom: 12px;
      }

      .content {
        display: flex;
        flex-wrap: wrap;
      }

      .clear {
        position: absolute;
        right: 20px;
        top: 20px;
        font-size: 14px;
        line-height: 20px;
        text-align: right;
        color: #1264E0;
        cursor: pointer;
      }

      .page-button {
        background-color: #F5F8FF;
        color: #8AA2C5;
        padding: 6px 12px;
        margin-right: 16px;
        margin-bottom: 12px;
        font-weight: 500;

        &.active {
          background-color: var(--color1);
          color: #fff;
        }
      }
    }


  }

}

.page-header .advance-search {
  position: fixed;
  left: 0;
  top: 90px;
  bottom: 0;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.35);
  left: 0;
  z-index: 100;

  .container {
    height: 240px;
    background-color: #fff;
    margin: 0 auto;
  }

  .search-form {
    width: 1040px;

    .form {
      display: flex;
      flex-wrap: wrap;
      align-content: center;
    }

  }

  .search-item {
    height: 40px;
    display: flex;
    align-items: center;
    margin-right: 40px;
    margin-bottom: 20px;

    .label {
      width: 60px;
      font-size: 14px;
      line-height: 20px;
      color: #000;
      margin-right: 20px;
    }

    .el-input {
      width: 240px;
      height: 40px;
      border-radius: 8px;

      &.el-date-editor {
        width: 160px;
      }
    }
  }

  .buttons {
    .el-button {
      height: 40px;
      border-radius: 8px;
      font-weight: 700;
      margin-right: 20px;

      &.search-submit {
        background-color: var(--color1);
        border-color: var(--color1);
        width: 150px;
      }

      &.cancel {
        width: 90px;
        color: #67A3FE;
      }
    }
  }
}

.page-content {
  padding: 90px 0 135px;
  position: relative;
}

.page-footer {
  width: 100vw;
  min-width: 1200px;
  height: 135px;

  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;

  background-color: #063376;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >div {
    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    font-size: 12px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.6);

    span {
      margin-right: 23px;
    }

    &:first-child {
      a {
        color: #fff;
        margin-right: 36px;
      }
    }



  }
}
</style>
