<template>
  <Header />
  <div class="container">
    <Balance v-bind:total="total" />
    <IncomeExpenses v-bind:income="Math.abs(+income)" v-bind:expense="Math.abs(+expense)" />
    <TransactionList @delete-transaction="handleDelete" v-bind:transactions="transactions" />
    <AddTransaction @transaction-submitted="handleTransaction" />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

import Header from '@/components/header.vue'
import Balance from '@/components/balance.vue'
import IncomeExpenses from '@/components/income-expenses.vue'
import TransactionList from '@/components/transaction-list.vue'
import AddTransaction from '@/components/add-transaction.vue'
import generateUniqueId from '@/utils/generate-unique-id.js'
import { useToast } from 'vue-toastification'

const toast = useToast()

const transactions = ref([
  // { id: '1', text: 'Billie Eilish', amount: -19.99 },
  // { id: '2', text: "Carla's Dreams", amount: 299.99 },
  // { id: '3', text: 'Ariana Grande', amount: -10 },
  // { id: '4', text: 'Skillet', amount: 100 }
])

onMounted(() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'))

  if (savedTransactions) {
    transactions.value = savedTransactions
  }
})

const total = computed(() => {
  return transactions.value.reduce((acc, next) => acc + next.amount, 0)
})

const income = computed(() => {
  return transactions.value
    .reduce((acc, next) => {
      if (next.amount > 0) {
        return acc + next.amount
      }
      return acc
    }, 0)
    .toFixed(2)
})

const expense = computed(() => {
  return transactions.value
    .reduce((acc, next) => {
      if (next.amount < 0) {
        return acc + next.amount
      }
      return acc
    }, 0)
    .toFixed(2)
})

const handleTransaction = (data) => {
  transactions.value.push({
    ...data,
    id: generateUniqueId()
  })
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
  toast.success('Transaction added')
}

const handleDelete = (id) => {
  transactions.value = transactions.value.filter((item) => item.id !== id)
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
  toast.success('Transaction deleted')
}
</script>
