<template>
  <div>
    <vs-navbar
      text-black
      color="#0F121E"
      center-collapsed
      fixed
      square
      v-model="active"
    >
      <template #left>
        <img
          src="../assets/images/sld.png"
          alt="logo"
          width="50px"
          @click="goHome"
        />
      </template>
      <!-- to="/solidfoundry" -->
      <!-- @click="showComingSoon = true" -->
      <template #right>
        <vs-button
          v-if="routeName == 'Home'"
          class="airdrop_btn"
          id="airdrop_btn_nav"
          blank
          to="/solidfoundry"
        >
          <b>Join Contest</b>
        </vs-button>
        <!-- <vs-button
          v-if="routeName == 'Foundry'"
          class="airdrop_btn"
          blank
          to="/presale"
        >
          <b>Go to Presale</b>
        </vs-button> -->
        <vs-button
          v-if="routeName == 'Presale'"
          class="airdrop_btn"
          blank
          to="/airdrop"
          id="airdrop_btn_nav"
        >
          <b>AirDrop</b>
        </vs-button>
        <vs-button
          blank
          class="medium_button btn_hover"
          href="https://soliddefi.medium.com/"
          icon
          id="medium_btn"
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

    <vs-dialog v-model="showComingSoon" width="420px" class="_dialog">
      <template #header>
        <h4 class="not-margin">Solid Foundry</h4>
      </template>
      <div>
        <h1>Coming Soon</h1>
      </div>
    </vs-dialog>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data: () => ({
    active: '',
    routeName: 'Home',
    showComingSoon: false,
  }),
  created() {
    this.routeName =
      this.$route.name == 'Home'
        ? 'Home'
        : this.$route.name == 'Presale'
        ? 'Presale'
        : 'Foundary';
  },
};
</script>
