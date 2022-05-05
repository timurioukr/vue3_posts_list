<template>
    <select :value="modelValue" @change="changeOption">
        <option disabled>Change from menu</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>

    </select>
  
</template>

<script>
export default {
    name: 'MySelect',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            
        }
    },
    methods: {
        changeOption (event) {
            this.$emit('update:modelValue', event.target.value)
        }
    },
}
</script>

<style>

select {
    border: lightskyblue 1px solid;
    border-radius: 5px;
}

</style>