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
      <input v-model="amount" type="number" id="amount" placeholder="Enter amount..." />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { useToast } from 'vue-toastification'

const props = defineProps({
  handleSubmit: {
    type: Function,
    required: true
  }
})

const toast = useToast()

const text = ref('')
const amount = ref('')

const handleSubmit = () => {
  if (!(text.value || amount.value)) {
    toast.error('Both fields must be filled')
    return
  }
  props.handleSubmit({ text: text.value, amount: amount.value })

  text.value = ''
  amount.value = ''
}
</script>
