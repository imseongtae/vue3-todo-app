<template>
	<div id="app" class="max-w-screen-md mx-auto">
		<app-header />
		<router-view />
	</div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';

export default {
	name: 'App',
	components: {
		AppHeader,
	},
};
</script>

<style lang="scss">
@import '@/scss/_ui.scss';

#app {
	/* 
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	width: 600px;
	margin: 0 auto;
	margin-top: 60px;
	color: #2c3e50;
	*/
}
</style>
