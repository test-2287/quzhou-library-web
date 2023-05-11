<script setup>
import Section from '@/pages/homepage/Section.vue'
</script>

<template>
    <div class="notice-detail-page center">
        <div class="page-main">
            <Section class="notice-detal-section" title="通知公告">
                <div class="section-content">
                    <div class="notice-header">
                        <div class="notice-title">图书馆一键借阅正式上线啦！</div>
                        <div class="notice-date">发布时间：2023年3月20日</div>
                    </div>
                    <div class="notice-content">
                        为提升文化志愿服务影响力，发挥先进典型对弘扬文化志愿服务精神的示范引领作用，根据《图书馆文化志愿服务管理规范》，组织开展2022年度优秀文化志愿者团队和优秀文化志愿者的评选工作。经团队提名推荐、综合评价等程序，现对蚂蚁&浙图公益志愿团等3家文化志愿团体和叶昌炜等23名文化志愿者给予表彰。
                        <br><br>
                        希望受表彰的团体和个人不忘初心,牢记使命，再接再厉，为加快建设文化高质量发展做出新的更大贡献。
                        <br><br>
                        <b>一、优秀文化志愿者团队(3个)</b><br>
                        1. 蚂蚁&浙图公益志愿团<br>
                        2. 道富信息科技(浙江)有限公司<br>
                        3. 浙江工业大学青年志愿者协会<br>
                        <br><br>
                        <b>二、优秀文化志愿者(23个)</b><br>
                        1. 蚂蚁&浙图公益志愿团团长 叶昌炜<br>
                        2. 蚂蚁&浙图公益志愿团读者服务小队长 陈青娜<br>
                        3. 蚂蚁&浙图公益志愿团有声读物录制小队长 金 玲<br>
                    </div>
                    <div class="notice-footer">
                        <div>图书馆</div>
                        <div>2023年3月20日</div>
                    </div>

                </div>

            </Section>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.notice-detail-page {
    .page-main {
        width: 1200px;
    }

    .notice-detal-section {
        margin-top: 24px;
    }

    .section-content {
        background-color: #fff;
        padding: 30px 40px 50px;
    }

    .notice-header {
        border-bottom: 1px solid #E6EDF5;

        .notice-title {
            font-weight: 700;
            font-size: 24px;
            line-height: 35px;
            text-align: center;
            color: #33608A;
            margin-bottom: 10px;
        }

        .notice-date {
            font-size: 14px;
            line-height: 20px;
            text-align: center;
            color: #8AA2C5;
            margin-bottom: 16px;
        }
    }

    .notice-content {
        padding-top: 30px;
        font-size: 16px;
        line-height: 29px;
        color: #3A3A3A;
    }

    .notice-footer {
        text-align: right;
    }
}
</style>