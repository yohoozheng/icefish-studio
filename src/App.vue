<template>
  <div id="app">
    123
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" scoped>
	html,body{
		height: 100%;
		width: 100%;
		padding: 0;
		margin: 0;
		#app{
			color: red;
		}
	}
</style>
