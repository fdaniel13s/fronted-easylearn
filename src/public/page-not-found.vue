<script>
export default {
  name: "page-not-found"
}
</script>

<template>
  <div>
    <h1>404</h1>
    <h2>Page not found</h2>
    <Button @click="$router.push({name: 'Login'})">Go to Login!</Button>
  </div>
</template>

<style scoped>

</style>