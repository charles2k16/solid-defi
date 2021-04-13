<template>
  <div class="mt-100">
    <div class="flex-justify-center">
      <div class="pool">
        <div class="liquidity">
          <span class="flex-align-center insights">
            <span class="material-icons" style="color:#5b3cc4;">
              lightbulb
            </span>
            <span>Liquidity Rewards</span>
          </span>
          <p class="lead_text-1 mt-20">
            Liquidity providers earn a 0.3% fee on all trades proportional to
            their share of the pool. Fees are added to the pool, accrue in real
            time and can be claimed by withdrawing your liquidity.
          </p>
        </div>
        <div class="flex-justify-between mt-20">
          <span class="lead_text">Your Liquidity</span>
          <div class="d-flex">
            <vs-button border> <b>Create a pair</b></vs-button>
            <vs-button to="/app/pool/add"> Add Liquidity</vs-button>
          </div>
        </div>

        <div class="mt-100">
          <p class="lead-text-dim">
            Connect to a wallet to view your liquidity
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pool',
  data: () => ({
    showAddLiquidity: false,
  }),
};
</script>
