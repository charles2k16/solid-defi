<template>
  <div>
    <div class="d-flex-center">
      <div class="sol_head mt-100">
        <img
          src="../../assets/images/roadmap.png"
          alt="money"
          class="road_image"
        />
        <h1 class="lead_head_text2" id="rdmap_h1">
          2021 ROADMAP
        </h1>
      </div>
    </div>

    <div class="flex-row-center mt-70">
      <div class="roadmap">
        <div class="first_oval">
          <div class="comma_div">
            <img
              src="../../assets/images/yellow_thing_1.png"
              alt="icon"
              class="coma"
            />
          </div>
          <div class="round_oval" style="margin-top:-28px;">
            <span>JULY</span>
            <span>
              <img
                src="../../assets/images/dai.png"
                alt="dai"
                width="40px"
                class="mt-3 mr-5"
              />
            </span>
          </div>
        </div>

        <div class="ul">
          <ul class="roadmap_ul">
            <li>Solid Webpage Launch</li>
            <li>SolidSOLID Rinkeby Testnet Contract Launch</li>
            <li>SolidDAI Rinkeby Testnet Contract Launch</li>
          </ul>
        </div>
      </div>

      <!-- Second roadmap -->
      <div class="roadmap">
        <div>
          <div style="display:flex;justify-content:center;">
            <div class="vl"></div>
          </div>

          <div class="first_oval">
            <div class="round_oval">
              <span style="margin-left:15px">AUG</span>
              <span style="margin-top:5px;">
                <img
                  src="../../assets/images/polygon_logo.png"
                  alt="dai"
                  width="80px"
                />
              </span>
            </div>
            <div class="comma_div2">
              <img src="../../assets/images/yellow_thing_2.png" alt="icon" />
            </div>
          </div>
        </div>

        <div class="ul">
          <ul class="roadmap_ul ul2">
            <li>Polygon host Solid Team AMA</li>
            <li>SolidFoundry Dapp Testnet</li>
            <li>SolidDAI Bonding Curve Released</li>
            <li>SolidDAI Contract launch</li>
            <li>Presale genesis NFT Airdrop</li>

            <li>
              1st Solid LP on Quick Swap to farm - SolidSOLID / SolidDAI
            </li>
          </ul>
        </div>
      </div>

      <!-- Third roadmap -->
      <div class="roadmap">
        <div>
          <div style="display:flex;justify-content:center;">
            <div class="vl2"></div>
          </div>
          <div class="first_oval oval3">
            <div class="yellow_oval">
              <div class="round_oval">
                <span>SEP</span>
                <span>
                  <img
                    src="../../assets/images/logo_circle.png"
                    alt="dai"
                    width="40px"
                    class="mt-3 mr-5"
                  />
                </span>
              </div>
            </div>
            <div class="comma_div3">
              <img
                src="../../assets/images/yellow_thing_1.png"
                alt="icon"
                class="coma"
              />
            </div>
          </div>
        </div>

        <div class="ul">
          <ul class="roadmap_ul ul2">
            <li>
              Solid Community Votes on new Solid Bonding Curve - Eth, Matic,
              USDC, etc.
            </li>
            <li>
              Solid Community Voted Bonding Curve 2 week funding period.
            </li>
            <li>
              2nd Solid LP on Quickswap to farm - SolidERC20/SolidDAI
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.road_image {
  width: 165px;
  transform: scaleX(-1);
}
.sol_head {
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-right: 50px;
  }
}
.roadmap {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 650px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
}
.round_oval {
  border: 1px solid rgb(77, 26, 192);
  border-radius: 50px;
  padding: 12px 0px;
  width: 170px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.first_oval {
  border: 1px solid white;
  border-radius: 52px;
  padding: 5px;

  .comma_div {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: -27px;
    margin-top: -12px;
    margin-right: -1px;
    padding: 5px 0px 14px 2px;

    img {
      width: 35px;
    }
  }

  .comma_div2 {
    z-index: 2;
    position: relative;
    float: right;
    margin-top: -59px;
    margin-right: -7px;

    img {
      width: 10px;
    }
  }

  .comma_div3 {
    z-index: 2;
    position: relative;
    float: right;
    margin-top: -20px;
    transform: scaleY(-1);

    img {
      width: 35px;
    }
  }
}
.oval3 {
  margin-top: -62px;
}
.round_oval span {
  color: rgb(77, 26, 192);
  font-weight: bold;
}
</style>
