<template>
  <div class="mt-100">
    <div class="d-flex-center">
      <div style="text-align:center">
        <span class="insights" style="color: #FCB42A;"
          >What we'll be up to in 2021
        </span>

        <h1 class="lead_head_text2">
          Solid Defi Roadmap
        </h1>
      </div>
    </div>

    <div class="mt-50 mb-100" style="">
      <div class="timeline">
        <div class="container left">
          <div class="date">June 2021</div>
          <span class="icon material-icons">
            http
          </span>
          <div class="content">
            <h2>Solid Webpage Launch</h2>
            <p>
              Launched our first website to bootstrap the Solid Defi project.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">July 2021</div>
          <span class="icon material-icons">
            task
          </span>
          <div class="content">
            <h2>Solid Dai Contract Launch</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date">July 2021</div>
          <span class="icon material-icons">
            price_change
          </span>
          <div class="content">
            <h2>Presale Genesis,NFT,Airdrop</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">JULY 2021</div>
          <span class="icon material-icons">
            touch_app
          </span>
          <div class="content">
            <h2>Solidfoundray Dapp Testnet</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date">AUG 2021</div>
          <span class="icon material-icons">
            quiz
          </span>
          <div class="content">
            <h2>Polygon hosts Solid team AMA</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">AUG 2021</div>
          <span class="icon material-icons">
            blur_linear
          </span>
          <div class="content">
            <h2>Solid Dai Bonding Curve Released</h2>
            <p>
              Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus
              erat sagittis non. Ut blandit semper pretium.
            </p>
          </div>
        </div>
        <div class="container left">
          <div class="date">AUG 2021</div>
          <span class="icon material-icons">
            blur_linear
          </span>
          <div class="content">
            <h2>SolidSolid Bonding Curve Released</h2>
            <p>
              We will release our first SolidSolid bonding curve Lorem ipsum
              dolor sit amet consectetur adipisicing.
            </p>
          </div>
        </div>
        <div class="container right">
          <div class="date">AUG 2021</div>
          <span class="icon material-icons">
            swap_vertical_circle
          </span>
          <div class="content">
            <h2>1st Solid LP on QuickSwap</h2>
            <p>
              We launch our first Solid liquidity pool on Quickswap for puplic
              use and trade.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 15px 0;
}

.timeline::after {
  content: '';
  position: absolute;
  width: 2px;
  background: #006e51;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -1px;
}

.container {
  padding: 15px 30px;
  position: relative;
  background: inherit;
  width: 50%;
}

.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid #006e51;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  background: #006e51;
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container .date {
  position: absolute;
  display: inline-block;
  top: calc(50% - 8px);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #006e51;
  text-transform: uppercase;
  letter-spacing: 1px;
  z-index: 1;
}

.container.left .date {
  right: -100px;
}

.container.right .date {
  left: -100px;
}

.container .icon {
  position: absolute;
  display: inline-block;
  width: 40px;
  height: 40px;
  padding: 9px 0;
  top: calc(50% - 20px);
  background: #f6d155;
  border: 2px solid #006e51;
  border-radius: 40px;
  text-align: center;
  font-size: 20px;
  color: #006e51;
  z-index: 1;
}

.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}

.container .content {
  padding: 15px 90px 15px 15px;
  background: #f6d155;
  position: relative;
  border-radius: 0 500px 500px 0;
}

.container.right .content {
  padding: 15px 15px 15px 90px;
  border-radius: 500px 0 0 500px;
}

.container .content h2 {
  margin: 0 0 10px 0;
  font-size: 16px;
  font-weight: bold;
  color: #006e51;
}

.container .content p {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: #000000;
}

@media (max-width: 767.98px) {
  .timeline::after {
    left: 90px;
  }

  .container {
    width: 100%;
    padding-left: 120px;
    padding-right: 30px;
  }

  .container.right {
    left: 0%;
  }

  .container.left::after,
  .container.right::after {
    left: 82px;
  }

  .container.left::before,
  .container.right::before {
    left: 100px;
    border-color: transparent #006e51 transparent transparent;
  }

  .container.left .date,
  .container.right .date {
    right: auto;
    left: 15px;
  }

  .container.left .icon,
  .container.right .icon {
    right: auto;
    left: 146px;
  }

  .container.left .content,
  .container.right .content {
    padding: 30px 30px 30px 90px;
    border-radius: 500px 0 0 500px;
  }
}
</style>
