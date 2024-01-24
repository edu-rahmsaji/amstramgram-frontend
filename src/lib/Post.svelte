<script lang="ts">
	import type { Post } from "../models/Post";

    export let data: Post;
</script>

<div class="bg-gray-900">
    <p>Sender : {data.creator.nickname}</p>
    <img src="http://localhost:4000/storage/posts/{data.image}" alt={data.description} />
    <p>{data.description}</p>
    <p>{data.created_at.toLocaleString()}</p>
</div>