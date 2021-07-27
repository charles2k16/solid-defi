<template>
  <div>
    <div class="d-flex-center mt-70">
      <img
        src="../../assets/images/coin.png"
        alt="money"
        class="solution_image"
      />
      <h1 class="lead_head_text2">
        SOLUTION
      </h1>
    </div>
    <hr class="hd_rule" />

    <vs-row class="mt-70">
      <vs-col :w="6" :xs="12" :sm="12">
        <div>
          <div class="solution_head d-flex-center">
            <span>USDt vs solidUSDT as supply increases </span>
          </div>
          <br />
          <!-- <img src="../../assets/images/usdt.png" alt="" width="450px" /> -->

          <div class="flex-justify-around-center sol_img_div">
            <div class="flex-row-center sol_img">
              <img src="../../assets/images/print_cash_icon.png" alt="icon" />

              <span class="white mt-10 sol_img_txt"
                >More USDt money supply</span
              >
            </div>

            <div class="flex-row-center sol_img">
              <img src="../../assets/images/deflation_icon.png" alt="icon" />

              <span class="white mt-10 sol_img_txt"
                >More USDt money supply</span
              >
            </div>
          </div>

          <div class="flex-justify-around-center mt-20 sol_img_div">
            <div class="flex-row-center sol_img">
              <img
                src="../../assets/images/protocol_input_icon.png"
                alt="icon"
              />

              <span class="white mt-10 sol_img_txt"
                >More USDt money supply</span
              >
            </div>

            <div class="flex-row-center sol_img">
              <img src="../../assets/images/appreciate_icon.png" alt="icon" />

              <span class="white mt-10 sol_img_txt"
                >More USDt money supply</span
              >
            </div>
          </div>
        </div>
      </vs-col>

      <vs-col :w="6" :xs="12" :sm="12">
        <div class="ml-20">
          <h2 class="white">
            SolidUSDT: PURCHASING POWER INCREASES WITH INFLATION
          </h2>
          <p class="lead_text_inf mt-20">
            With Solid Defi, the Fed can print all they want, it just gives the
            market more USDt to add to the Solid Bonding curve. Since the Solid
            Bonding Curve issues SolidUSDT priced at the square root of supply
            the more the SolidUSDT supply inflates, the greater the purchasing
            power will be for each SolidUSDT.
          </p>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="mt-50">
      <vs-col :w="6" :xs="12" :sm="12">
        <div class="solution_txt">
          <p>
            Buy Price =
            <span class="white">(3/2*x+s**(3/2))**(2/3)-s</span> = The square
            root of supply Sell Price =
            <span class="white">Integral of x**(½) dx = ⅔*x**(3/2) + c x</span>
            = The amount in USDt you are sending to the Solid Bonding Curve
            Contract s = The current supply of solidUSDt
          </p>
        </div>
      </vs-col>

      <vs-col :w="6" :xs="12" :sm="12">
        <div class="ml-20">
          <p class="lead_text_inf mt-20">
            While the Solid Bonding Curve will eventually accept USDT. We like
            to support native crypto currency projects so the initial Solid
            Bonding Curve will accept DAI and mint SolidDAI according to this
            formula:
          </p>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="mt-50">
      <vs-col :w="6" :xs="12" :sm="12">
        <div class="mr-20">
          <img
            src="../../assets/images/coin_on_a_curve_02.jpg"
            alt=""
            width="400px"
          />
        </div>
      </vs-col>

      <vs-col :w="6" :xs="12" :sm="12">
        <div class="ml-20">
          <h2 class="white">
            SOLIDDAI REWARDS UP TO 20% OF VALUE OF CRYPTO SHAKEOUT
          </h2>

          <p class="lead_text_inf mt-20">
            $1 Trillion dollars in market cap evaporated in the massive May 19th
            2021 sell off. People lost $300 billion because of a single tweet
            from Elon Musk. What if there was a market manipulators tax that
            went to holders? With SolidDAI there is. Up to 20% of massive sell
            offs go to Solid token holders.
          </p>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>

<style lang="scss" scoped>
.sol_img_div {
  width: 400px;

  .sol_img img {
    width: 50px;
  }

  .sol_img .sol_img_txt {
    font-size: 12px;
  }
}
.solution_head {
  border-radius: 50px;
  width: 400px;
  background-color: #6133c9;
  /* #181C2F */
  padding: 15px;
  color: white;
}
.solution_txt {
  background-color: #353844;
  color: grey;
  padding: 15px;
  width: 400px;
  font-family: 'Courier New', Courier, monospace;

  p {
    font-size: 14px;
  }
}
</style>
