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
        <!-- <vs-navbar-item :active="active == 'forum'" id="forum">
          Forum
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'governance'" id="governance">
          Governance
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'faqs'" id="faqs" to="faqs">
          FAQs
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'about'" id="about">
          About
        </vs-navbar-item> -->
        <template>
          <vs-button border warn
            ><span class="material-icons">
              insights
            </span>
            <b>Charts</b></vs-button
          >
          <vs-button color="#F42F54" to="/app/swap"
            ><span class="material-icons">
              swap_horiz
            </span>
            Swap Tokens</vs-button
          >
        </template>
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
