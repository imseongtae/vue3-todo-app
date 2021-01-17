<template>
	<header class="flex items-center bg-green-500 py-4">
		<div class="flex items-center flex-shrink-0">
			<svg
				class="fill-current h-8 w-8 mr-2"
				width="54"
				height="54"
				viewBox="0 0 54 54"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
				/>
			</svg>
			<span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
		</div>
		<nav class="ml-auto mr-5">
			<ul
				class="w-full block flex-grow md:flex md:items-center md:w-auto text-sm"
			>
				<li>
					<a
						href="#responsive-header"
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Docs
					</a>
				</li>
				<li>
					<a
						href="#responsive-header"
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Examples
					</a>
				</li>
				<li>
					<a
						href="#responsive-header"
						class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
					>
						Blog
					</a>
				</li>
				<li>
					<a
						href="#"
						class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
						>Download</a
					>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
};
</script>

<style lang="scss" scoped></style>
