<script setup>
import { defineProps, ref, reactive, defineEmits } from 'vue';
import Button from '@/components/Button.vue';

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    },
    confirmText: {
        type: String,
        default: '确定'
    },
    cancelText: {
        type: String,
        default: '取消'
    }
})

const instance = ref(null)

const emit = defineEmits(['onConfirm', 'onCancel'])
const onConfirm = () => {
    instance.value.hide()
    emit('onConfirm')
}
const onCancel = () => {
    instance.value.hide()
    emit('onCancel')
}
</script>

<template>
    <tippy :onCreate="(tippyInstance) => { instance = tippyInstance }" trigger="click" interactive placement="bottom" :offset="[0, 20]">
        <template #content>
            <div class="popconfirm">
                <div class="popconfirm-title">{{ title }}</div>
                <div class="popconfirm-content" v-if="content">{{ content }}</div>
                <div class="popconfirm-buttons">
                    <Button size="small" class="popconfirm-button popconfirm-cancel" buttonStyle="`line`"
                        @click.stop="onCancel">{{
                            cancelText }}</Button>
                    <Button size="small" class="popconfirm-button popconfirm-confirm" @click.stop="onConfirm">{{ confirmText
                    }}</Button>
                </div>
            </div>
        </template>
        <slot></slot>
    </tippy>
</template>

<style lang="scss" scoped>
.popconfirm {
    padding: 21px;
    padding-bottom: 17px;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 8px 8px 8px 8px rgba(134, 182, 255, 0.06);
    border: 1px solid rgba(0, 0, 0, 0.05);

    position: relative;
    &::before {
        content: '';
        position: absolute;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 12px solid #fff;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    &::after {
        content: '';
        position: absolute;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-bottom: 12px solid rgba(0, 0, 0, 0.05);
        top: -11px;
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
    }

    .popconfirm-title {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        color: #000;
    }

    .popconfirm-buttons {
        display: flex;
        justify-content: flex-end;
        margin-top: 20px;

        .popconfirm-button {
            width: 80px;
        }

        .popconfirm-cancel {
            margin-right: 20px;
            border: 1px solid #C1D4EF;
            color: #67A3FE;
        }
    }
}
</style>