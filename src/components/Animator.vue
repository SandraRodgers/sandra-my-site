<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  time: Number,
});
let show = ref(false);

onMounted(() => {
  setTimeout(() => {
    show.value = true;
  }, props.time);
});
</script>

<template>
  <Transition name="fade"
    ><span v-show="show"><slot /></span>
  </Transition>

  <!-- <span class="opacity-0"><slot /></span> -->
</template>

<style scoped>
h1 {
  @apply text-two;
}
.fade-enter-active {
  animation: fade-in 0.5s;
}
.fade-leave-active {
  animation: fade-in 0.5s reverse;
}
/* @keyframes fade-in {
  0% {
    opacity: v-bind(time[0]);
  }
  50% {
    opacity: v-bind(time[1]);
  }
  100% {
    opacity: v-bind(time[2]);
  }
} */
/* @keyframes fade-in {
  0% {
    opacity: var(--0percent-opacity);
    opacity: 0;
  }
  50% {
    opacity: var(--50percent-opacity);
    opacity: 0.5;
  }
  100% {
    opacity: var(--100percent-opacity);
    opacity: 1;
  }
  
} */
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  /* 50% {
    opacity: 0.5;
  } */
  100% {
    opacity: 1;
  }
}
</style>
