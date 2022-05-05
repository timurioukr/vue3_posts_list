<template>
   <form @submit.prevent>
      <h4>Create post</h4>
      <my-input
        v-focus
        :modalValue="post.title"
        v-model="post.title" 
        type="text" 
        placeholder="Title"/>
      <my-input
        :modalValue="post.body"
        v-model="post.body" 
        type="text" 
        placeholder="Description"/>
      <button class="btn" @click="createPost">Create</button>
      
    </form>
</template>

<script>
import MyInput from './ui/MyInput.vue'
export default {
  components: { MyInput },
    data() {
        return {
            post: {
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now()
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }

        }
    },

}
</script>

<style>
.input {
  width: 100%;
  border: 1px solid lightskyblue;
  padding: 10px 15px;
  margin-top: 15px;
  border-radius: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  border-radius: 10px;
  color: lightskyblue;
  border: 1px solid lightskyblue;
  background: none;
  cursor: pointer;
}

</style>