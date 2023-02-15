<template>
    <span class="fs-18"> {{ UlData.Title }} </span>
    <ul class="list-group">
        <li class="list-group-item" v-for="LiData in UlData.Data"> {{ LiData }} </li>
    </ul>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    UlData: Object
})
</script>