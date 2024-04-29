<template>
  <Header />
  <div class="container">
    <Balance v-bind:total="total.value" />
    <IncomeExpenses />
    <TransactionList v-bind:transactions="transactions" />
    <AddTransaction />
  </div>
</template>

<script setup>
import Header from '@/components/header.vue'
import Balance from '@/components/balance.vue'
import IncomeExpenses from '@/components/income-expenses.vue'
import TransactionList from '@/components/transaction-list.vue'
import AddTransaction from '@/components/add-transaction.vue'

import { ref, computed } from 'vue'

const transactions = ref([
  { id: 1, text: 'Billie Eilish', amount: -19.99 },
  { id: 2, text: "Carla's Dreams", amount: 299.99 },
  { id: 3, text: 'Ariana Grande', amount: -10 }
])

const total = computed(() => {
  return transactions.value.reduce((acc, next) => acc + next.amount, 0)
})
</script>
