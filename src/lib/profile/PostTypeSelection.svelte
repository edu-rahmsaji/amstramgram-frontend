<script lang="ts">
	import type { TypeParam } from '../../routes/(app)/profile/+page.server';

	export let type: TypeParam;
</script>

<div class="relative w-full h-[60px] bg-gray-800 flex justify-between">
	<a
		href="/profile"
		class="relative flex-grow flex justify-center items-center {type === ''
			? 'text-white'
			: 'text-gray-400'}"
	>
		Pics
	</a>
	<a
		href="/profile?type=text"
		class="relative flex-grow flex justify-center items-center {type === 'text'
			? 'text-white'
			: 'text-gray-400'}"
	>
		Texts
	</a>
</div>
