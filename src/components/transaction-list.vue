<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      v-bind:class="transaction.amount < 0 ? 'minus' : 'plus'"
      v-bind:key="transaction.id"
    >
      {{ transaction.text }} <span>${{ transaction.amount }}</span
      ><button class="delete-btn">x</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      transactions: [
        { id: 1, text: 'Billie Eilish', amount: -19.99 },
        { id: 2, text: "Carla's Dreams", amount: 299.99 },
        { id: 3, text: 'Ariana Grande', amount: -10 }
      ]
    }
  }
}
</script>
