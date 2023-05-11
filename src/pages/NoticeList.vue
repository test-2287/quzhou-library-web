<script setup>
import Section from '@/pages/homepage/Section.vue'
</script>

<template>
    <div class="notice-list-page center">
        <div class="page-main">
            <Section title="通知公告" class="notice-section">
                <div class="section-content">
                    <div class="notice-list">
                        <div class="notice-item flex" v-for="item in 5">
                            <div class="date-box">
                                <div class="year-month">2023年3月</div>
                                <div class="date">20日</div>
                            </div>
                            <div class="notice-box">
                                <div class="notice-title">图书馆一键借阅正式上线啦！</div>
                                <div class="notice-summary">为提升文化志愿服务影响力，发挥先进典型对弘扬文化志愿服务精神的示范引领作用
                                    为提升文化志愿服务影响力，发挥先进典型对弘扬文化志愿服务精神的示范引领作用</div>
                            </div>
                        </div>
                    </div>
                    <div class="pagination-box center">
                        <el-pagination background layout="prev,pager,next" :total="50"></el-pagination>
                    </div>
                </div>
            </Section>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.notice-list-page {
    .page-main {
        width: 1200px;
    }

    .notice-section {
        margin-top: 24px;
    }

    .section-content {
        background-color: #fff;
        padding: 20px 40px 51px;
    }

    .notice-item {
        padding: 18px 42px 18px 0;
        border-bottom: 1px solid #E6EDF5;
        &:not(:first-child) {
            margin-top: 20px;
        }

        .date-box {
            padding: 9px 6px;
            background-color: #F0F5FC;
            border-radius: 6px;
            margin-right: 30px;
            flex-shrink: 0;

            .year-month {
                text-align: center;
                font-size: 12px;
                line-height: 18px;
                color: #8AA2C5;
                white-space: nowrap;
            }

            .date {
                text-align: center;
                font-weight: 700;
                font-size: 24px;
                line-height: 35px;
                color: #6697DE;
            }
        }

        .notice-box {
            .notice-title {
                font-weight: 700;
                font-size: 16px;
                line-height: 23px;
                color: #33608A;
                cursor: pointer;
            }

            .notice-summary {
                font-size: 14px;
                line-height: 20px;
                color: #8AA2C5;
                margin-top: 10px;
            }
        }

    }

    .pagination-box {
        margin-top: 20px;
    }
}
</style>