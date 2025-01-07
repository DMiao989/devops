<template>
  <div class="about-container">
    <el-card>
      <div class="part0">
        <h3>关于网站</h3>
        <div class="about-site">
          <div class="line"></div>
          <div>
            <ul>
              <li>
                <span
                  >本网站用于搜集内部资源站点，以便于提供快速访问和统一运维资源；</span
                >
              </li>
              <li><span>如有新需求，请联系运维工程师；</span></li>
              <li>
                <span
                  >闲聊或者有任何建议请致信钉钉：<span class="bolder"
                    >贾成平</span
                  >
                  邮箱：<span class="bolder">jiachengping@hollysys.com</span
                  >。</span
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="part1">
        <h3>关于本站</h3>
        <div class="about-siter">
          <img
            src="@/assets/logos/person.jpeg"
            alt="这是站长头像"
            width="150px"
            height="150px"
          />
          <div style="margin-left: 20px">
            <div style="margin-bottom: 10px">站长</div>
            <a href="http://172.32.6.199" style="font-weight: 300">
              运维导航站
            </a>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.about-container {
  height: calc(100vh - 374px);
  width: 70%;
  padding: 100px;
  margin: auto;

  .el-card ::v-deep .el-card__body {
    padding: 60px !important;
  }

  .bolder {
    font-weight: 800;
    font-size: larger;
    text-decoration: underline;
  }

  .about-site {
    display: flex;
    margin-top: 10px;
  }
  .part1 {
    margin-top: 20px;
  }

  .about-siter {
    border: 2px solid rgb(222, 216, 216);
    margin-top: 10px;
    padding-left: 20px;
    width: 600px;
    height: 200px;
    display: flex;
    align-items: center;
  }
  .line {
    width: 5px;
    background-color: grey;
    height: 92px;
    margin: 10px 30px 10px 0px;
  }
  ul {
    margin-top: 10px;
  }
  ul > li {
    margin-bottom: 10px;
  }
}
</style>