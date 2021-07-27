<template>
  <div>
    <div class="d-flex-center mt-100">
      <img
        src="../../assets/images/roadmap.png"
        alt="money"
        class="road_image"
      />
      <h1 class="lead_head_text2" style="color: rgb(77,26,192);">
        2021 ROADMAP
      </h1>
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
          <div class="round_oval">
            <span>JULY</span>
            <span>
              <img src="../../assets/images/dai.png" alt="dai" width="40px" />
            </span>
          </div>
        </div>

        <div class="ul">
          <ul class="roadmap_ul">
            <li>Solid Webpage Launch</li>
            <li>SolidDAI Contract launch</li>
            <li>Presale genesis NFT Airdrop</li>
            <li>SolidFoundry Dapp Testnet</li>
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
            <div class="comma_div2">
              <img
                src="../../assets/images/yellow_thing_1.png"
                alt="icon"
                class="coma"
              />
            </div>
            <div class="round_oval">
              <span>AUG</span>
              <span>
                <img
                  src="../../assets/images/polygon_logo.png"
                  alt="dai"
                  width="90px"
                />
              </span>
            </div>
          </div>
        </div>

        <div class="ul">
          <ul class="roadmap_ul ul2">
            <li>Polygon host Solid Team AMA</li>
            <li>SolidDAI Bonding Curve Released</li>
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
            <div class="vl vl2"></div>
          </div>

          <div class="first_oval">
            <div class="yellow_oval">
              <span class="yellow_curve"></span>
              <div class="round_oval">
                <span>SEP</span>
                <span>
                  <img
                    src="../../assets/images/logo_circle.png"
                    alt="dai"
                    width="40px"
                  />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="ul">
          <ul class="roadmap_ul ul2">
            <li>
              Solid Community Votes on new Solid TO BE USED for bonding curve
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
  margin-right: 100px;
}
.round_oval {
  border: 1px solid rgb(77, 26, 192);
  border-radius: 50px;
  padding: 12px 13px;
  width: 170px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.first_oval {
  border: 1px solid white;
  border-radius: 52px;
  padding: 6px;

  .comma_div {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: -20px;
    margin-top: -13px;
    padding: 5px 0px 7px 0px;

    img {
      width: 35px;
    }
  }

  .comma_div2 {
    z-index: 2;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: -20px;
    margin-top: -13px;
    padding: 5px 0px 7px 0px;

    img {
      width: 35px;
    }
  }
}
.round_oval span {
  color: rgb(77, 26, 192);
  font-weight: bold;
}
</style>
