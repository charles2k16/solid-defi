<template>
  <div class="center examplex">
    <vs-navbar
      text-black
      color="#F4F4FF"
      center-collapsed
      fixed
      square
      v-model="active"
    >
      <template #left>
        <!-- <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" /> -->
        <vs-navbar-item :active="active == 'home'" id="home" to="/">
          SOLID PROTOCOL
        </vs-navbar-item>
      </template>
      <template #right>
        <!-- <vs-navbar-item :active="active == 'about'" id="about" to="/about">
          About Us
        </vs-navbar-item> -->
        <vs-button blank>
          See Whitepaper
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
