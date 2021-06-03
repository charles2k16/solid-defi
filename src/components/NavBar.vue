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
        <img src="../assets/images/sld.png" alt="logo" width="50px" />
      </template>
      <template #right>
        <vs-button
          blank
          class="medium_button"
          href="https://solid-defi.gitbook.io/solid-whitepaper/"
          icon
        >
          <img
            src="../assets/images/medium_icon.png"
            alt="medium"
            style="width:18px !important"
          />
        </vs-button>
        <vs-button
          class="def_button"
          blank
          href="https://solid-defi.gitbook.io/solid-whitepaper/"
        >
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
