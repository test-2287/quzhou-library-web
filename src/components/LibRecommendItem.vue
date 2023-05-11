<script setup></script>

<template>
    <div class="recommend-item flex-column">
        <div class="theme-image"><img src="" alt=""></div>
        <div class="theme-title">一路向西 丝绸之路</div>
        <div class="theme-subtitle">中华文化的博大精深</div>
        <div class="theme-intro">
            中国的丝绸、瓷器、陶器、茶叶等大量珍贵产品和科学文化，除通过横贯大陆的陆上交通线路大量输往中亚、西亚和非洲、欧洲之外，也通过海上源源不断地销往东亚、大洋洲、美洲和世界各地。
        </div>
        <div class="check-detail center">查看详情</div>
    </div>
</template>

<style lang="scss" scoped>
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
</style>