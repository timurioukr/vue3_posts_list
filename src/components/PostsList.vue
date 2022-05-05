<template>
    <div v-if="posts.length">
        <h3>Posts list</h3>
            <TransitionGroup name="list">
                <post-item
                    class="post"
                    v-for="post in posts" 
                    :post="post"
                    :key="post.id"
                    @remove="$emit('remove', post)"
                    />

            </TransitionGroup>
    </div>
    <div v-else>
        Posts list is empty
    </div>
</template>

<script>
import PostItem from './PostItem.vue';
export default {
  components: { PostItem },
    name: 'PostsList',
    props: {
        posts: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
           
        }
    },
};
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid lightskyblue;
  border-radius: 10px;
  margin-top: 15px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
    transition: transform 0.8s ease;
}



</style>
