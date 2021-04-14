<template>
  <div class="center examplex">
    <vs-navbar
      text-white
      color="#121f42"
      center-collapsed
      fixed
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
        <vs-navbar-item :active="active == 'pool'" id="pool" to="/app/pool">
          Pool
        </vs-navbar-item>
        <vs-button danger> Connect to a wallet</vs-button>
      </template>
    </vs-navbar>
  </div>
</template>

<script>
export default {
  name: 'ExchangeNavBar',
  data: () => ({
    active: '',
  }),
};
</script>
