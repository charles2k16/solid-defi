<template>
  <div class="main_container">
    <NavBar />
    <div class="hero">
      <div class="home_bg">
        <div class="wrap">
          <Header />
        </div>
      </div>
    </div>

    <div class="hero2">
      <div class="wrap">
        <Problem />

        <Solution />
      </div>
    </div>

    <!-- Roadmap -->
    <div class="sec_div">
      <road-map />
      <Faqs />
      <Team />
    </div>

    <Community />

    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Header from './sections/Header.vue';
import Faqs from './sections/Faqs.vue';
import Community from './sections/Community.vue';
import Footer from './sections/Footer.vue';
import RoadMap from './sections/RoadMap.vue';
import Solution from './sections/Solution.vue';
import Problem from './sections/Problem.vue';
import Team from './sections/Team.vue';

export default {
  name: 'Home',
  components: {
    NavBar,
    Header,
    Faqs,
    Community,
    Footer,
    RoadMap,
    Solution,
    Problem,
    Team,
  },
  data() {
    return {
      tokenSale: 'Over 2,000,000',
      confirmTitle: '',
      active: 0,
    };
  },
};
</script>
