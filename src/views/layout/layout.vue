<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <div class="main-container">
      <sidebar class="sidebar-container"></sidebar>
      <app-main class=""></app-main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/views/layout/Navbar'
import Sidebar from '@/views/layout/Sidebar'
import AppMain from '@/views/layout/AppMain'

export default {
  name: 'layout',
  data () {
    return {
      sidebarOpened: true
    }
  },
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar () {
      return this.sidebarOpened
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/styles/mixin.scss";
.app-wrapper {
  @include clearfix;
  position: fixed;
  height: 100%;
  width: 100%;

  .sidebar-container {
    transition: width 0.28s ease-out;
    width: 210px;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1001;
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .main-container {
    min-height: 100%;
    transition: margin-left 0.28s ease-out;
    margin-left: 210px;
  }
}
</style>
