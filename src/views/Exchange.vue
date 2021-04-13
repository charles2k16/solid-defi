<template>
  <div>
    <ExchangeNavBar />
    <div class="exchange-bg">
      <div class="container-m" style="height:90%">
        <router-view />
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
