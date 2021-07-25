<template>
  <div>
    <div>
      <!-- <div class="mt-30">
          <iframe
            src="https://app.uniswap.org/#/swap?outputCurrency=0xd9016a907dc0ecfa3ca425ab20b6b785b42f2373"
            height="660px"
            width="100%"
            style="
                border: 0;
                margin: 0 auto;
                display: block;
                border-radius: 10px;
                max-width: 940px;
                min-width: 240px;
              "
            id="myId"
          >
          </iframe>
        </div> -->
    </div>

    <div class="ilustrations">
      <div class="wrap">
        <!-- <vs-row class="mt-50">
          <vs-col :w="5" :xs="12" :sm="12">
            <div class="flex-align-center">
              <h1 class="yellow">
                {{ tokenSale }} tokens sold in first presale
              </h1>
            </div>
          </vs-col>
          <vs-col :w="2" :xs="2" :sm="2">
            <div
              class="flex-align-center"
              style="text-align: center; margin-left: 40px"
            >
              <div class="rule"></div>
            </div>
          </vs-col>
          <vs-col :w="5" :xs="12" :sm="12">
            <div>
              <div class="progress">
                <div class="progress_token" :style="{ width: `${10.2}%` }">
                  <span>10.2%</span>
                </div>
              </div>

              <p class="mt-20 p_tokens">20M Tokens</p>
            </div>
          </vs-col>
        </vs-row> -->

        <Illustrations />
        <br />
        <Subscribe />
        <RoadMap />
      </div>
    </div>

    <!-- blog news section -->
    <div class="sec_div">
      <div
        class="wrap_blog"
        style="z-index: 2; position: relative; margin-top: -250px"
      >
        <BlogSection />
      </div>

      <AboutSolid />
    </div>
  </div>
</template>
