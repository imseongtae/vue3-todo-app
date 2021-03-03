<template>
  <div id="app" class="max-w-screen-md mx-auto">
    <app-header />
    <router-view />
    <!-- tailwind component -->
    <cta-section></cta-section>

    <hr class="my-4" />

    <!-- table test -->
    <table-exam />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
import CtaSection from '@/components/CtaSection.vue';
import TableExam from '@/components/TableExam.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    CtaSection,
    TableExam,
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
