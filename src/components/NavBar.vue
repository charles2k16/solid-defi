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
        <a href="https://soliddefi.com/"
          ><img src="../assets/images/sld.png" alt="logo" width="50px"
        /></a>
      </template>
      <template #right>
        <vs-button class="airdrop_btn" blank to="/airdrop">
          <b>AirDrop</b>
        </vs-button>
        <vs-button
          blank
          class="medium_button btn_hover"
          href="https://soliddefi.medium.com/"
          icon
        >
          <img
            src="../assets/images/medium_icon.png"
            alt="medium"
            style="width:18px !important"
          />
        </vs-button>
        <vs-button
          class="def_button btn_hover"
          blank
          href="https://soliddefi.gitbook.io/solid-whitepaper/"
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
