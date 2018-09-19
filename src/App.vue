<template>
  <transition mode="out-in" enter-active-class="fadeIn" leave-active-class="fadeOut" appear>
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import './styles/index.scss';

body{
  margin-left: 0;
  margin-top: 0;
  width: 100%;
  height: 100%;
}

</style>
