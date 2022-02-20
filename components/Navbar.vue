<template>
  <div class="header">
    <ul class="links">
      <li><NuxtLink to="/"><span>Главная</span></NuxtLink></li>
      <li><NuxtLink to="/tracks"><span>Список треков</span></NuxtLink></li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  height: 55px;
  background: cornflowerblue;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.6);
}

.links {
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  li:hover {
    border-bottom: 1px solid blueviolet;
  }

  span {
    font-size: 25px;
    line-height: 28px;
    color: white;
    padding: 0 7px;
  }
}

</style>
