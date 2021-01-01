<template>
	<li class="todo-item">
		<p class="todo-item__content">
			{{ content }}
		</p>
		<button class="todo-item__btn" @click="remove(index)">❌</button>
	</li>
</template>

<script>
export default {
	// 스타일 상속을 막음
	inheritAttrs: false,
	props: {
		index: {
			type: Number,
			required: true,
		},
		content: {
			type: String,
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
