<template>
  <div class="main_container">
    <NavBar />

    <div class="hero">
      <div class="wrap">
        <div class="dai_bg">
          <span>GET YOUR FIRST SOLID-DAI NOW! </span>
        </div>

        <vs-row class="mt-50">
          <vs-col :w="8" :xs="12" :sm="12">
            <div class="solid_dai_gr">
              <h3>SOLID-DAI BONDING CURVE</h3>
              <br />
              <img
                src="../assets/images/dai_graph_mockup.png"
                alt="mock"
                width="600px"
              />
            </div>
          </vs-col>

          <vs-col :w="4" :xs="12" :sm="12">
            <div class="swap">
              <h3>SWAP</h3>

              <div class="input_from mt-20">
                <div class="input_info">
                  <img src="../assets/images/dai.png" alt="tk" />
                  <div class="ml-10 sw_cnt">
                    <div class="dcnt">
                      <h5>DAI</h5>
                      <span class="material-icons ar">
                        keyboard_arrow_down
                      </span>
                    </div>

                    <span class="dai_pr">2200</span>
                  </div>
                </div>

                <div class="input_space">
                  <input type="number" placeholder="0.0" />
                </div>
              </div>

              <div class="mt-20 tk_brk">
                <span class="material-icons-round swp">
                  swap_vert
                </span>
                <hr class="hd_rule2" />
              </div>

              <div class="input_from mt-20">
                <div class="input_info">
                  <img src="../assets/images/dai.png" alt="tk" />
                  <div class="ml-10 sw_cnt">
                    <div class="dcnt">
                      <h5>DAI</h5>
                      <span class="material-icons ar">
                        keyboard_arrow_down
                      </span>
                    </div>

                    <span class="dai_pr">0</span>
                  </div>
                </div>

                <div class="input_space">
                  <input type="number" placeholder="0.0" />
                </div>
              </div>

              <div class="mt-20">
                <div></div>
              </div>
            </div>
          </vs-col>
        </vs-row>

        <vs-row class="mt-50">
          <vs-col :w="4" :xs="12" :sm="12">
            <div class="dai_locked flex-justify-around-center">
              <img
                src="../assets/images/token_lock_icon.png"
                alt="lock"
                width="80px"
              />

              <div>
                <span class="d-block tt">TOTAL DAI LOCKED </span>
                <span class="d-block pr">$700,000 </span>
              </div>
            </div>
          </vs-col>

          <vs-col :w="8" :xs="12" :sm="12"> </vs-col>
        </vs-row>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: 'SolidFoundry',
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.dai_bg {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #171938;
  border-radius: 10px;
  background: #3e2394;
  background-image: url('../assets/images/protocol_banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  span {
    color: whitesmoke;
    font-size: 26px;
    font-weight: 530;
  }
}
.solid_dai_gr {
  border: 1px solid #171938;
  background: #171938;
  height: 400px;
  border-radius: 15px;
  padding: 20px 10px;
  color: rgb(223, 222, 222);
}
.swap {
  padding: 20px 10px;
  margin-left: 15px;
  border: 1px solid #171938;
  background: #171938;
  height: 400px;
  border-radius: 15px;
  color: rgb(226, 223, 223);

  .tk_brk {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px 2px 2px 15px;

    .swp {
      color: rgb(236, 239, 248);
      background: #717cf7;
      border-radius: 100px;
      padding: 4px;
      cursor: pointer;
    }
  }
}
.input_from {
  padding: 10px;
  background: #262a48;
  border-radius: 10px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input_info {
  display: flex;
  align-items: center;

  img {
    width: 35px;
  }

  .sw_cnt {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    .dcnt {
      display: flex;
      align-items: center;
      margin-bottom: -3px;
      cursor: pointer;

      h5 {
        width: 40px;
        font-weight: bold;
      }
      h5:hover {
        color: #fcb42a;
      }

      .ar {
        margin-top: -5px;
      }
    }
    .dai_pr {
      font-size: 13px;
    }
  }
}
.input_space {
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input {
    background: #161938;
    height: 55px;
    padding: 2px 8px;
    width: 130px;
    border-radius: 10px;
    border: none;
    font-family: 'Montserrat';
    font-size: 15px;
    color: whitesmoke;
    font-weight: bold;

    ::placeholder {
      font-size: 15px;
    }
  }
}
.dai_locked {
  height: 112px;
  width: 300px;
  border-radius: 15px;
  background: linear-gradient(240deg, #e1c324, #cf6d10);

  .tt {
    color: whitesmoke;
  }
  .pr {
    color: whitesmoke;
    font-weight: bold;
    font-size: 20px;
    margin-top: 8px;
  }
}
</style>
