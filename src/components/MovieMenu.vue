<template>
	<ul class="nav-list">
		<li
			class="nav-list-item"
			:class="{ active: i.id === activeId }"
			v-for="i in menuList"
			:key="i.id"
			@click="onClick(i.id, i.value)"
		>
			{{ i.label }}
		</li>
	</ul>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const menuList = [
	{ id: 1, label: "Now playing", value: "now_playing" },
	{ id: 2, label: "Popular", value: "popular" },
	{ id: 3, label: "Top rated", value: "top_rated" },
	{ id: 4, label: "Upcoming", value: "upcoming" },
];

let activeId = ref<Number>(1);

const emits = defineEmits<{
	(event: "switchType", filter: string): void;
}>();

const onClick = (id: Number, e: string) => {
	activeId.value = id;
	emits("switchType", e);
};
</script>

<style lang="less" scoped>
.nav-list {
	animation: fadeIn 0.5s forwards;
	display: flex;
	margin: 1.5rem 0;
	font-size: 0.875rem;

	&-item {
		margin-right: 1rem;
		white-space: nowrap;
		cursor: pointer;

		&.active {
			color: transparent;
			-webkit-background-clip: text;
			background-clip: text;
			background-image: linear-gradient(90deg, #f44c35, #ff8f71);
			position: relative;
			&::after {
				content: "";
				position: absolute;
				height: 0.125rem;
				width: 50%;
				background: linear-gradient(90deg, #f44c35, #ff8f71);
				left: 0;
				top: 120%;
				border-radius: 999px;
			}
		}
	}
}
</style>
