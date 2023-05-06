<script setup>
import { ref, inject, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: '标题展示'
    }
});

const registerTab = inject('registerTab');
const unregisterTab = inject('unregisterTab');
const selectedTabIndex = inject('selectedTabIndex');

const tabIndex = ref(null);
const isActive = computed(() => tabIndex.value === selectedTabIndex.value);

onMounted(() => {
    tabIndex.value = registerTab(props);
});

onBeforeUnmount(() => {
    unregisterTab(props);
})

</script>

<template>
    <div v-if="isActive">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped></style>