<template>
  <div>
    <vs-table class="token_list_table">
      <template #header>
        <vs-input
          warn
          v-model="search"
          border
          placeholder="Search"
          class="token_input"
        />
      </template>
      <template #thead>
        <vs-tr>
          <vs-th>
            Name
          </vs-th>
          <vs-th>
            Symbol
          </vs-th>
          <vs-th>
            Liquidity
          </vs-th>
          <vs-th>
            Price
          </vs-th>
        </vs-tr>
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getSearch(tokens, search)"
          :data="tr"
          @click="selectToken(tr)"
        >
          <vs-td>
            <span class="d-flex">
              <vs-avatar size="30">
                <img :src="tr.logoURI" alt="logo" />
              </vs-avatar>
              <span class="mx-20" style="color:#395f9c"
                ><b>{{ tr.name }}</b>
              </span>
            </span>
          </vs-td>
          <vs-td>
            <span>{{ tr.symbol }}</span>
          </vs-td>
          <vs-td>
            <span> US$374,388,576</span>
          </vs-td>
          <vs-td>
            <span> US$2,365</span>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import tokenApi from '@/api/tokens.js';

export default {
  name: 'TokenTableList',
  data: () => ({
    tokens: [],
    search: '',
  }),
  created() {
    this.getTokenList();
  },
  methods: {
    getTokenList() {
      tokenApi.getTokenList().then(response => {
        this.tokens = response.data.tokens;
      });
    },
  },
};
</script>
