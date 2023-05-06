<script setup>
import { defineProps, ref, reactive } from 'vue';

const props = defineProps({
    type: {
        type: String,
        default: 'normal' // homepage |
    }
}) 
</script>

<template>
    <div class="book-card-small flex">
        <div class="left book-image"></div>
        <div class="right">
            <div class="book-name"></div>

            <template>
                <div class="book-author"></div>
                <div class="book-publisher"></div>
            </template>
            <div class="book-author"></div>
            <div class="book-publisher"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>