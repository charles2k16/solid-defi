<template>
  <div class="center">
    <vs-navbar
      text-black
      color="#0F121E"
      center-collapsed
      fixed
      square
      v-model="active"
    >
      <template #left>
        <img src="../assets/images/logo.png" alt="logo" />
      </template>
      <template #right>
        <vs-button blank style="font-size: 0.9rem" class="nav_button">
          <b>Read Whitepaper</b>
        </vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    active: '',
  }),
};
</script>
