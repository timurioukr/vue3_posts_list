<template>
  <input :v-model="modalValue" @input="updateInput" class="input" type="text">
</template>

<script>
export default {
    name: 'MyInput',
    props: {
        modalValue: [String, Number]
    },
    data() {
        return {
            
        }
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },

}
</script>

<style>


</style>