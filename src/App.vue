<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="scss">
@import '@/scss/_ui.scss';

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 600px;
	margin: 0 auto;
	margin-top: 60px;
	color: #2c3e50;
}
</style>
