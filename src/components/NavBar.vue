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
        <!-- <img src="/logos/logo-vuesax-logotipo-vuesax-png-4.png" alt="" /> -->
        <vs-navbar-item :active="active == 'home'" id="home" to="/">
          LOGO
        </vs-navbar-item>
      </template>
      <template #right>
        <!-- <vs-navbar-item :active="active == 'about'" id="about" to="/about">
          About Us
        </vs-navbar-item> -->
        <vs-button blank style="font-size: 1rem;" class="nav_button">
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
