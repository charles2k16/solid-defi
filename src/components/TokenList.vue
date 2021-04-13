<template>
  <div>
    <vs-table class="token_table">
      <template #header>
        <h2>Select Token</h2>
        <vs-input v-model="search" border placeholder="Search" />
      </template>
      <template #tbody>
        <vs-tr
          :key="i"
          v-for="(tr, i) in $vs.getSearch(tokens, search)"
          :data="tr"
        >
          <vs-td>
            <span class="d-flex">
              <vs-avatar size="30">
                <img :src="tr.logoURI" alt="logo" />
              </vs-avatar>
              <span class="mx-20"
                ><b>{{ tr.symbol }}</b> <br />
                <span style="font-size:13px;">{{ tr.name }}</span>
              </span>
            </span>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
import tokenApi from '@/api/tokens.js';

export default {
  data: () => ({
    search: '',
    tokens: [],
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
