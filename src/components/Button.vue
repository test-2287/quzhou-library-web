<script setup>
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
    size: {
        type: String,
        default: 'auto' // big | small | dialog | tooltip | auto
    },
    buttonStyle: {
        type: String,
        default: 'fill' // fill | line
    },
    padding: {
        type: String,
        default: ''
    },
    fillColor: {
        type: String,
        default: ''
    },
    textColor: {
        type: String,
        default: ''
    },
    lineColor: {
        type: String,
        default: ''
    },
    round: {
        type: Boolean,
        default: false
    },
    borderRadius: {
        type: String,
        default: ''
    },
    text: {
        type: String,
        default: ''
    },
})

</script>

<template>
    <div class="page-button" :class="{
        'fill': buttonStyle === 'fill',
        'line': buttonStyle === 'line',
        'big': size === 'big',
        'small': size === 'small',
        'dialog': size === 'dialog',
        'tooltip': size === 'tooltip',
        'round': round,
    }" :style="{
        'padding': padding,
        'background-color': fillColor,
        'color': textColor,
        'border-radius': borderRadius,
        'border': lineColor,
    }">
        <slot>
            {{ text }}
        </slot>
    </div>
</template>

<style lang="scss" scoped>
.page-button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;

    &.big {
        width: 150px;
        height: 40px;
    }

    &.dialog {
        width: 120px;
        height: 40px;
    }

    &.tooltip {
        width: 80px;
        height: 32px;
        border-radius: 16px;
    }

    &.small {
        width: 90px;
        height: 32px;
        border-radius: 16px;
    }

    &.fill {
        background-color: var(--color1);
        color: #fff;
    }

    &.line {
        background-color: #ffffff;
        border: 1px solid var(--stroke-color3);
        color: #67A3FE;
    }

}</style>