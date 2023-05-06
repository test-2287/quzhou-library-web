import { ref } from 'vue'

export function useTabs() {
    const tabs =  ref([])
    const selectedTabIndex= ref(0)

    const registerTab = (tab) => {
        tabs.value.push(tab)
        return tabs.value.length - 1
    }

    const unregisterTab = (tabToRemove) => {
        tabs.value = tabs.value.filter(tab => tab !== tabToRemove)
    }

    const selectTab = (index) => {
        selectedTabIndex.value = index
    }

    return {
        tabs,
        selectedTabIndex,
        registerTab,
        unregisterTab,
        selectTab
    }
}