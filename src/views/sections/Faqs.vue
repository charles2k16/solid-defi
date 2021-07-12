<template>
  <div class="faqs">
    <div class="wrap">
      <div class="d-flex-center mt-70">
        <div style="text-align:center">
          <span class="insights" style="color: #FCB42A;"
            >Have any questions for us?</span
          >
          <h1 class="lead_head_text1">
            FAQS ?
          </h1>
        </div>
      </div>
      <vs-row class="mt-50">
        <vs-col :w="6" :xs="12" :sm="12">
          <el-collapse accordion class="mr-10">
            <el-collapse-item title="What is Solid ?" name="1">
              <div>
                <p>
                  Solid
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item title="What is SolidDai" name="2" class="my-20">
              <div>
                <p>
                  Operation feedback: enable the users to clearly perceive their
                  operations by style updates and interactive effects;
                </p>
                <p>
                  Visual feedback: reflect current state by updating or
                  rearranging elements of the page.
                </p>
              </div>
              <div></div>
            </el-collapse-item>
            <el-collapse-item
              title="When will the SolidDai bonding curve be funded?"
              name="3"
              class="my-20"
            >
              <div>
                <p>
                  Consistent within interface: all elements should be
                  consistent, such as: design style, icons and texts, position
                  of elements, etc.
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </vs-col>
        <vs-col :w="6" :xs="12" :sm="12">
          <el-collapse accordion>
            <el-collapse-item
              title="How will the initial SolidDai supply be distributed?"
              name="4"
            >
              <div>
                <p>
                  Consistent with real life: in line with the process and logic
                  of real life, and comply with languages and habits that the
                  users are used to;
                </p>
                <p>
                  Consistent within interface: all elements should be
                  consistent, such as: design style, icons and texts, position
                  of elements, etc.
                </p>
              </div>
            </el-collapse-item>
            <el-collapse-item
              title="How much of the Presale Funds will go into the Solid Bonding Curve?"
              name="5"
              class="my-20"
            >
              <div>
                <p>
                  Operation feedback: enable the users to clearly perceive their
                  operations by style updates and interactive effects;
                </p>
                <p>
                  Visual feedback: reflect current state by updating or
                  rearranging elements of the page.
                </p>
              </div>
              <div></div>
            </el-collapse-item>
            <el-collapse-item
              title="What will be the next Bonding Curve Token?"
              name="6"
              class="my-20"
            >
              <div>
                <p>
                  Consistent within interface: all elements should be
                  consistent, such as: design style, icons and texts, position
                  of elements, etc.
                </p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Faqs',
  data() {
    return {
      activeName: '1',
    };
  },
};
</script>
