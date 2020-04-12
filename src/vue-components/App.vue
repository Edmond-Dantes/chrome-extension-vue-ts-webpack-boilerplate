<template>
	<div id="app">
		{{ test }}
	</div>
</template>

<script lang="ts">

export default {
	data() {
		return {
			test: 'test'
		}
	}
}
</script>

<style>
#app {
	color: blue;
}
</style>