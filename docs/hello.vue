<template>
    <div>
        <input
            type="text"
            placeholder="Type here"
            class="my-input"
        />

        <div class="my-card">
            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
            <div class="ds-card-body">
                <div class="ds-card-title">Shoes!</div>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="ds-card-actions justify-end">
                    <button class="my-btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
        <div class="ds-stats shadow">
            <div class="ds-stat">
                <div class="my-stat-figure">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="my-stat-figure-svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div class="ds-stat-title">Downloads</div>
                <div class="ds-stat-value">31K</div>
                <div class="ds-stat-desc">Jan 1st - Feb 1st</div>
            </div>

            <div class="ds-stat">
                <div class="my-stat-figure">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="my-stat-figure-svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                </div>
                <div class="ds-stat-title">New Users</div>
                <div class="ds-stat-value">{{counter}}</div>
                <div class="ds-stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="ds-stat">
                <div class="my-stat-figure">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="my-stat-figure-svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                </div>
                <div class="ds-stat-title">New Registers</div>
                <div class="ds-stat-value">1,200</div>
                <div class="ds-stat-desc">↘︎ 90 (14%)</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref } from 'vue'
import { useIntervalFn } from '@vueuse/core'
const counter = ref(1)

useIntervalFn(() => {
  counter.value++
}, 1000)
</script>