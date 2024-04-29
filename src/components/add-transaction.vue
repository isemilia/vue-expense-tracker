<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="handleSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input v-model="text" type="text" id="text" placeholder="Enter text..." />
    </div>
    <div class="form-control">
      <label for="amount"
        >Amount <br />
        (negative - expense, positive - income)</label
      >
      <input v-model="number" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  handleSubmit: {
    type: Function,
    required: true
  }
})

const text = ref('')
const number = ref('')

const handleSubmit = () => {
  props.handleSubmit({ text: text.value, number: number.value })
}
</script>
