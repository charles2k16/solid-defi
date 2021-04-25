<template>
  <div class="center examplex">
    <vs-navbar
      text-white
      color="#7d33ff"
      center-collapsed
      fixed
      square
      v-model="active"
    >
      <template #left>
        <!-- <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" /> -->
        <vs-navbar-item :active="active == 'home'" id="home" to="/">
          SOLID DEFI
        </vs-navbar-item>
      </template>
      <template #right>
        <vs-navbar-item :active="active == 'swap'" id="swap" to="/app/swap">
          Swap
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'Tokenomic'" id="Tokenomic">
          Tokenomic
        </vs-navbar-item>
        <vs-button danger @click="showWallects = true">
          Connect to a wallet</vs-button
        >
      </template>
    </vs-navbar>

    <vs-dialog v-model="showWallects" width="420px">
      <template #header>
        <h4 class="not-margin">
          Choose a wallect provider
        </h4>
      </template>
      <ConnectWallect />
    </vs-dialog>
  </div>
</template>

<script>
import ConnectWallect from './ConnectWallect';

export default {
  name: 'ExchangeNavBar',
  components: {
    ConnectWallect,
  },
  data: () => ({
    active: '',
    showWallects: false,
  }),
};
</script>
