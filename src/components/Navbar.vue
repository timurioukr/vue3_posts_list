<template>
  <div class="navbar">
      <div>Vue 3</div>
      <div class="navbar__btns">
            <button @click="$router.push('/')" class="btn">Posts</button>
            <button @click="$router.push('/welcome')" class="btn">About</button>
            <button @click="$router.push('/composition')" class="btn">Composition</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.navbar {
    height: 50px;
    background-color: rgb(228, 229, 230);
    display: flex;
    align-items: center;
    padding: 0px 20px;
}

.navbar .btn {
    margin: 2px;
}

.navbar__btns {
    margin-left: auto;
}

</style>