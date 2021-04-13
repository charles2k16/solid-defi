<template>
  <div>
    <NavBar />
    <div>
      <div class="container-m" style="height:90%">
        <router-view />
      </div>
      <!-- <div class="footer">
        <p>footer</p>
      </div> -->
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'Home',
  components: {
    NavBar,
  },
  data: () => ({}),
};
</script>
