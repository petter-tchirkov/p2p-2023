<template>
  <svg
    v-if="props.name === 'ua'"
    viewBox="0 0 36 36"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    class="iconify iconify--twemoji"
    preserveAspectRatio="xMidYMid meet"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        fill="#005BBB"
        d="M32 5H4a4 4 0 0 0-4 4v9h36V9a4 4 0 0 0-4-4z"
      ></path>
      <path
        fill="#FFD500"
        d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4v-9h36v9z"
      ></path>
    </g>
  </svg>

  <svg
    v-else-if="props.name === 'ru'"
    viewBox="0 -4 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <g clip-path="url(#clip0_503_2726)">
        <rect
          x="0.25"
          y="0.25"
          width="27.5"
          height="19.5"
          rx="1.75"
          fill="white"
          stroke="#F5F5F5"
          stroke-width="0.5"
        ></rect>
        <mask
          id="mask0_503_2726"
          style="mask-type: alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="28"
          height="20"
        >
          <rect
            x="0.25"
            y="0.25"
            width="27.5"
            height="19.5"
            rx="1.75"
            fill="white"
            stroke="white"
            stroke-width="0.5"
          ></rect>
        </mask>
        <g mask="url(#mask0_503_2726)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 13.3333H28V6.66667H0V13.3333Z"
            fill="#0C47B7"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 20H28V13.3333H0V20Z"
            fill="#E53B35"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_503_2726">
          <rect width="28" height="20" rx="2" fill="white"></rect>
        </clipPath>
      </defs>
    </g>
  </svg>

  <svg
    v-else-if="props.name === 'eng'"
    height="200px"
    width="200px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
    fill="#000000"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        style="fill: #41479b"
        d="M473.655,88.276H38.345C17.167,88.276,0,105.443,0,126.621V385.38 c0,21.177,17.167,38.345,38.345,38.345h435.31c21.177,0,38.345-17.167,38.345-38.345V126.621 C512,105.443,494.833,88.276,473.655,88.276z"
      ></path>
      <path
        style="fill: #f5f5f5"
        d="M511.469,120.282c-3.022-18.159-18.797-32.007-37.814-32.007h-9.977l-163.54,107.147V88.276h-88.276 v107.147L48.322,88.276h-9.977c-19.017,0-34.792,13.847-37.814,32.007l139.778,91.58H0v88.276h140.309L0.531,391.717 c3.022,18.159,18.797,32.007,37.814,32.007h9.977l163.54-107.147v107.147h88.276V316.577l163.54,107.147h9.977 c19.017,0,34.792-13.847,37.814-32.007l-139.778-91.58H512v-88.276H371.691L511.469,120.282z"
      ></path>
      <g>
        <polygon
          style="fill: #ff4b55"
          points="282.483,88.276 229.517,88.276 229.517,229.517 0,229.517 0,282.483 229.517,282.483 229.517,423.724 282.483,423.724 282.483,282.483 512,282.483 512,229.517 282.483,229.517 "
        ></polygon>
        <path
          style="fill: #ff4b55"
          d="M24.793,421.252l186.583-121.114h-32.428L9.224,410.31 C13.377,415.157,18.714,418.955,24.793,421.252z"
        ></path>
        <path
          style="fill: #ff4b55"
          d="M346.388,300.138H313.96l180.716,117.305c5.057-3.321,9.277-7.807,12.287-13.075L346.388,300.138z"
        ></path>
        <path
          style="fill: #ff4b55"
          d="M4.049,109.475l157.73,102.387h32.428L15.475,95.842C10.676,99.414,6.749,104.084,4.049,109.475z"
        ></path>
        <path
          style="fill: #ff4b55"
          d="M332.566,211.862l170.035-110.375c-4.199-4.831-9.578-8.607-15.699-10.86L300.138,211.862H332.566z"
        ></path>
      </g>
    </g>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{ name: string }>();
</script>

<style scoped></style>
