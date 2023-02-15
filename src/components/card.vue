<template>
    <router-link 
        :to="{name: 'offers', query: DataCol}"
        :class="['overflow-hidden rounded-3 border', index !== 0 ? 'ms-auto' : '']" 
        :style="Width" v-for="(DataCol, index) in Data"
    >
        <img :src='DataCol.ImgSrc' class="d-block w-100" style="height: 166px;">
        <div class="d-flex flex-column px-3 py-2 w-100" style="height: 145px;">
            <div class="fs-12 pb-1">
                {{ DataCol.Label }}
            </div>
            <div class="fs-15">
                {{ DataCol.Title }}
            </div>
            <div class="d-flex fs-12 mt-auto pb-1">
                <div class="me-1" v-if="DataCol.Num !== ''">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                        <path class="starColor" fill="#51ABF3" fill-rule="evenodd"
                            d="M6 9.121L2.292 11 3 7.02 0 4.202l4.146-.581L6 0l1.854 3.621 4.146.58-3 2.82L9.708 11z"></path>
                    </svg>
                </div>
                {{ DataCol.Num }}
            </div>
            <div class="fs-6">
                {{ DataCol.Price }}
            </div>
        </div>
    </router-link>
</template>

<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    Width: String,
    Data: Object
})
</script>