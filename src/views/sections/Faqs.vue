<template>
  <div class="wrap">
    <div class="d-flex-center mt-100">
      <div style="text-align:center">
        <!-- <span class="insights" style="color: #FCB42A;"
          >Have any questions for us?</span
        > -->
        <h1 class="lead_head_text2" style="color: rgb(77,26,192);">
          FAQs ?
        </h1>
      </div>
    </div>
    <vs-row class="mt-50">
      <vs-col :w="6" :xs="12" :sm="12">
        <el-collapse accordion class="mr-10">
          <el-collapse-item
            v-for="(faq, index) in faqs1"
            :key="index"
            :name="index + 1"
            :title="faq.title"
          >
            <div>
              <p>
                {{ faq.answer }}
              </p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </vs-col>
      <vs-col :w="6" :xs="12" :sm="12">
        <el-collapse accordion class="mr-10">
          <el-collapse-item
            v-for="(faq, index) in faqs2"
            :key="index"
            :name="index + 1"
            :title="faq.title"
          >
            <div>
              <p>
                {{ faq.answer }}
              </p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
export default {
  name: 'Faqs',
  data() {
    return {
      activeName: '1',
      faqs1: [
        {
          title: 'What is the Solid Token ?',
          answer:
            'Solid is the governance token of the Solid Defi protocol. Solid is used to vote on future Solid Bonding Curves and gets you "First to Fund" access aka gets you into new bonding curves at the lowest price.',
        },
        {
          title: 'What is the Solid Bonding Curve (aka. SBC) ?',
          answer:
            'The Solid Bonding Curve algorithmically assigns the price of Solid Bonded tokens to the square root of their supply. The first token it will accept is DAI, which authorizes the Solid Bonding Curve to mint SolidDAI. The Solid Bonding Curve also purchases SolidDAI at the square root of its supply minus a dynamic selling fee.',
        },
        {
          title: 'What is SolidDAI ?',
          answer:
            'SolidDAI is our first Solid Bonding Curve based token. The Solid bonding curve prices SolidDAI according to the square root of its supply. The SBC also buys it back at the same price minus a dynamic selling fee which is given in DAI to all SolidDAI holders.',
        },
        {
          title: 'How does the SolidDAI dynamic fee work ?',
          answer:
            'When the SolidDAI bonding curve repurchases SolidDAI it pays the square root of supply minus a dynamic selling fee. The selling fee is between 0.1% and 20% depending on the 24 hour selling volume. To trigger the 20% fee 100% of the supply would need to have been sold back to the SolidDai bonding curve in the last 24 hours.',
        },
        {
          title: 'How is the SolidDAI reward distributed?',
          answer:
            'The SolidDAI rewards are given in DAI and are accumulated passively, no need to be staking your SolidDAI to accumulate rewards. To claim rewards go to the SolidFoundry, connect your Metamask wallet and then click the "claim" button.',
        },
      ],
      faqs2: [
        {
          title: 'When will SolidFoundry go live ?',
          answer:
            'We aim to have the SolidFoundry testnet live before the polygon AMA on August 5th. The mainnet version will go live once the SolidDAI bonding curve is funded.  ',
        },
        {
          title: 'When will the SolidDAI bonding curve be Funded ?',
          answer:
            'We would like to fund the SolidDai bonding curve with at least 50,000 DAI. This will allow the bonding curve to work properly and reducing the dynamic trading fee.',
        },
        {
          title: 'How will the initial SolidDAI supply be distributed ?',
          answer:
            'For presale participants, the SolidDAI minted from the initial funding of the bonding curve will be airdropped to your metamask address on the polygon network.',
        },
        {
          title:
            'How much of the presale funds will go into the Solid Bonding Curve ?',
          answer:
            'Anywhere from 25% to 75% of the presale funds raised will be used to fund the SolidDAI contract. The SolidDAI minted will go to the presale holders of our governance token, Solid.',
        },
        {
          title: 'What will be the next Solid Bonding Curve Token ?',
          answer:
            'This will be voted on by the Solid community. Each month a new Solid Bonding Curve token will be issued giving Solid holders a chance each month to get the best price on the latest Solid Bonding Curve.',
        },
      ],
    };
  },
};
</script>
