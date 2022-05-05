<template>
    <div>
        <div>
            <div><span class="mr-5 h3">Id:</span><span>{{ post.id }}</span></div>
            <div><span class="mr-5 h3">Title:</span><span>{{ post.title }}</span></div>
            <hr style="margin: 10px 0px">
            <div><span class="mr-5 h3">Description:</span>{{ post.body }}</div>
        </div>
        <div class="post__btns">
            <button @click="$emit('remove', post)" class="btn">Delete</button>
            <button @click="$router.push(`/posts/${ post.id }`)" class="btn">Open</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PostItem',
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>

.post__btns {
    text-align: end;
}

.post__btns .btn:nth-child(1) {
    margin-right: 5px;
} 



</style>