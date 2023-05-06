<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import Button from '@/components/Button.vue'
import TopNav from '@/components/TopNav.vue'

import { defineProps, ref, reactive } from 'vue';


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

</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" /> -->
  <div class="page-header justify-center">
    <div class="nav-bar space-between align-center">
      <div class="logo-box align-center">
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
        </div>
        <div class="right-item order-list">
          <SvgIcon name="icon-my-order" class="icon" />
          我的订单
        </div>
        <div class="right-item login">
          <SvgIcon name="icon-login" class="icon" />
          登录/注册
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
  <div class="page-footer"></div>
</template>

<style scoped lang="scss">
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */

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
      color: var(--color-1);
      margin-right: 8px;
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

  /* .search-box .el-input .el-input__wrapper {
    border-radius: 0;
    border-radius: 8px 0 0 8px;
  } */
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
      > div:not(:first-child) {
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
}
</style>
