<template>
	<div>
		<li v-for="(item, index) in todoItems" :key="index" class="todo-item">
			<p>
				{{ item.content }}
				<button @click="remove(index)">❌</button>
			</p>
		</li>
	</div>
</template>

<script>
export default {
	inheritAttrs: false,
	props: {
		todoItems: {
			type: Array,
			required: true,
		},
	},
	methods: {
		remove(index) {
			this.$emit('remove', index);
		},
	},
};
</script>
