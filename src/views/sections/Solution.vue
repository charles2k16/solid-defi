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
          <div class="d-flex-center">
            <div class="solution_head d-flex-center">
              <span>USDt vs solidUSDT as supply increases </span>
            </div>
          </div>

          <br />

          <div class="flex-justify-around-center sol_img_div">
            <div class="flex-row-center sol_img">
              <img src="../../assets/images/print_cash_icon.png" alt="icon" />

              <span class="white mt-10 sol_img_txt"
                >More USDt money supply</span
              >
            </div>

            <div class="flex-row-center sol_img">
              <img src="../../assets/images/deflation_icon.png" alt="icon" />

              <span class="white mt-10 sol_img_txt">Less value per USDt</span>
            </div>
          </div>

          <i class="gg-arrow-long-right mt-20 mb-20"></i>

          <div class="flex-justify-around-center mt-20 sol_img_div">
            <div class="flex-row-center sol_img" id="p-2">
              <img
                src="../../assets/images/protocol_input_icon.png"
                alt="icon"
              />

              <span class="white mt-10 sol_img_txt"
                >More USDt put into <br />
                SolidUSDT protocol
              </span>
            </div>

            <div class="flex-row-center sol_img pl-15">
              <img src="../../assets/images/appreciate_icon.png" alt="icon" />

              <span class="white mt-10 sol_img_txt">More value generated</span>
            </div>
          </div>
        </div>
      </vs-col>

      <vs-col :w="6" :xs="12" :sm="12">
        <div class="ml-20 problem_right2">
          <h2 class="white">
            SolidUSDT: PURCHASING POWER INCREASES WITH INFLATION
          </h2>
          <p class="lead_text_inf mt-20" style="color:#7a83a1">
            With Solid Defi the Fed can print all they want. They're just giving
            the market more USDt to add to the Solid Bonding curve. Since the
            Solid Bonding Curve issues SolidUSDT priced at the square root of
            supply the more the SolidUSDT supply inflates, the greater the
            purchasing power will be for each SolidUSDT.
          </p>
        </div>
      </vs-col>
    </vs-row>

    <vs-row class="mt-50">
      <vs-col :w="6" :xs="12" :sm="12">
        <div class=" d-flex-center">
          <div class="solution_txt">
            <p class="big_p">
              Buy Price =
              <span class="white">(3/2*x+s**(3/2))**(2/3)-s</span> = The square
              root of supply Sell Price =
              <span class="white">Integral of x**(½) dx = ⅔*x**(3/2) + c</span>
              x = The amount in USDt you are sending to the Solid Bonding Curve
              Contract s = The current supply of solidUSDt
            </p>
          </div>
        </div>
      </vs-col>

      <vs-col :w="6" :xs="12" :sm="12">
        <div class="ml-20 problem_right">
          <p class="lead_text_inf mt-20" style="color:#7a83a1">
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
        <div class="mr-20 d-flex-center">
          <img
            src="../../assets/images/coin_curve.png"
            alt=""
            class="curve_sol_image"
          />
        </div>
      </vs-col>

      <vs-col :w="6" :xs="12" :sm="12">
        <div class="ml-20 problem_right mt">
          <h2 class="white">
            SOLIDDAI REWARDS RETURN UP TO 20% OF CRYPTO SHAKEOUTS
          </h2>

          <p class="lead_text_inf mt-20" style="color:#7a83a1">
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
.solution_image {
  width: 120px;
  margin-right: 70px;
  margin-top: 20px;
}
.sol_img_div {
  width: 400px;
  margin-left: 25px;

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
  background: linear-gradient(90deg, #4317b4ff 39%, #8127e0ff);
  /* #181C2F */
  padding: 16px;
  color: white;
}
.solution_txt {
  background-color: #272939;
  color: grey;
  padding: 15px;
  width: 400px;
  margin-top: 13px;
  font-family: 'Courier New', Courier, monospace;

  p {
    font-size: 14px;
  }
}
</style>
