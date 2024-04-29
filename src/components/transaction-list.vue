<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      v-bind:class="transaction.amount < 0 ? 'minus' : 'plus'"
      v-bind:key="transaction.id"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button @click="() => handleDelete(transaction.id)" class="delete-btn">x</button>
    </li>
  </ul>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  transactions: {
    type: Array,
    required: true
  }
})
const emit = defineEmits(['delete-transaction'])

const handleDelete = (id) => {
  emit('delete-transaction', id)
}
</script>
