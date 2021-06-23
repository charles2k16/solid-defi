<template>
   <div class="main_container">
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <vs-table class="reff-table">
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th>
                Email
              </vs-th>
              <vs-th>
                Twitter
              </vs-th>
              <vs-th>
                Telegram
              </vs-th>
              <vs-th>
                MetaMask
              </vs-th>
              <vs-th>
                Reff Info
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(refferals, search)"
              :data="tr"
            >
              <vs-td>
                {{ tr.email }}
              </vs-td>
              <vs-td>
              {{ tr.twitter_name }}
              </vs-td>
              <vs-td>
              {{ tr.telegram_name }}
              </vs-td>
              <vs-td>
              {{ tr.metamaskAddress }}
              </vs-td>
                <vs-td>
              {{ tr.referralId }}
              </vs-td>
            </vs-tr>
          </template>
          <template #footer>
            <vs-pagination v-model="page" :length="$vs.getLength(refferals, max)" />
          </template>
        </vs-table>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import referralsApi from '@/api/referrals.js';

export default {
  name: 'RefferalCount',
  components: {
    NavBar
  },
  data:() => ({
    page: 1,
    max: 10,
    refferals: [],
    search: ''
  }),
  created() {
    this.getRefferals()
  },
  methods: {
    getRefferals() {
      let self = this;

      referralsApi
        .getReferral().then((response) => {
          self.refferals = response.data.data
          console.log(self.refferals)
        })
    }
  }
}
</script>