<template>
  <div class="home_page" style="background:#F1F1F1;">
    <ExchangeNavBar />
    <div>
      <div class="container-m">
        <router-view />
      </div>
    </div>
    <div class="footer_container">
      <p style="font-size: 13px;">
        Copyright © 2021 SOLID PROTOCOL, ALL RIGHTS RESERVED
      </p>
      <div class="d-flex">
        <vs-avatar size="25" class="mr">
          <img src="../assets/images/github.png" alt="github" />
        </vs-avatar>
        <vs-avatar size="25" class="mr">
          <img src="../assets/images/twitter.png" alt="twitter" />
        </vs-avatar>
        <vs-avatar size="25" class="mr">
          <img src="../assets/images/telegram.png" alt="telegram" />
        </vs-avatar>
      </div>
    </div>
  </div>
</template>

<script>
import ExchangeNavBar from '@/components/ExchangeNavBar';

export default {
  name: 'Exchange',
  components: {
    ExchangeNavBar,
  },
  data: () => ({}),
};
</script>
