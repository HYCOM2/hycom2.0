<template>
  <el-card class="box-card">
    <div
      slot="header"
      class="clearfix"
    >
      <h1>4侧槽溢洪道水力学计算</h1>
    </div>
    <transition
      name="fade-transform"
      mode="out-in"
    >
      <router-view />
    </transition>
  </el-card>
</template>

<script lang="ts">
export default {}
</script>
