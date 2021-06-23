<template>
   <div class="main_container">
    <NavBar />

    <div class="hero">
      <div class="wrap">

         <vs-row class="mt-50">
          <vs-col :w="6" :xs="12" :sm="12">
            <div class="">
              <h4>Total Refferals</h4>

              <h1>{{total}}</h1>
            </div>
          </vs-col>
         </vs-row>



        <vs-table class="reff-table">
          <template #header>
            <vs-input v-model="search" border placeholder="Search" />
          </template>
          <template #thead>
            <vs-tr>
              <vs-th>
                #
              </vs-th>
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
   
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
              :key="i"
              v-for="(tr, i) in $vs.getSearch(refferals, search)"
              :data="tr"
            >
            <vs-td>
                {{ i+1 }}   <vs-radio danger :v-model="1" :val="1" v-if="checkReffString(tr.referredBy) === false">

        </vs-radio>
              </vs-td>
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
   

              <template #expand>
              <div class="d-flex">
                <div>
                  <h5>Reff ID</h5>
                  <vs-button color="#cb8016">
                     {{ tr.referralId }}
                  </vs-button>
                </div>
                <div class="ml-10">
                  <h5>Reffered By</h5>
                  <vs-button color="#cb8016">
                     {{ tr.referredBy }}
                  </vs-button>
                </div>
              </div>
              </template>
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
    search: '',
    total: 0,
    noreff: 'no reff'
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
          self.total = response.data.data.length
          console.log(self.refferals)
        })
    },
    checkReffString(reff) {
      if (typeof reff !== 'undefined') return false
        else return true
    }
  }
}
</script>