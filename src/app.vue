<template>
  <Header />
  <div class="container">
    <Balance />
    <IncomeExpenses />
    <TransactionList />
    <AddTransaction />
  </div>
</template>

<script>
import Header from '@/components/header.vue'
import Balance from '@/components/balance.vue'
import IncomeExpenses from '@/components/income-expenses.vue'
import TransactionList from '@/components/transaction-list.vue'
import AddTransaction from '@/components/add-transaction.vue'

export default {
  components: {
    Header,
    Balance,
    IncomeExpenses,
    TransactionList,
    AddTransaction
  }
}
</script>
