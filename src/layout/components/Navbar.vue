<template>
  <div class="navbar flexBox">
    <hamburger
      id="hamburger-container"
      :is-active="sidebar.opened"
      class="hamburger-container"
      @toggleClick="toggleSideBar"
    />
    <div class="flex1">
      <div class="flexBox">
        <div class="flex1" v-if="menuPosition === 'top'">
          <el-tabs :value="activeRoute.toString()" class="headerTabs" @tab-click="clickTab">
            <el-tab-pane
              :label="route.meta.title"
              :name="index.toString()"
              style="color:#fff"
              v-for="(route,index) in menuModule"
              :key="index"
            ></el-tab-pane>
          </el-tabs>
        </div>
        <div class="right-menu flexContent">
          <el-dropdown
            class="avatar-container right-menu-item hover-effect"
            @command="handleCommand"
            trigger="click"
          >
            <div class="avatar-wrapper">
              <img src="~public/images/img.jpg" class="user-avatar" />
              <i class="el-icon-caret-bottom el-icon--right" />
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-circle-check" command="0">返回首页</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-check" command="1">退出用户</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
    <!-- <breadcrumb id="breadcrumb-container" class="breadcrumb-container" /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import { sonsTree } from '@/utils'
export default {
  components: {
    Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'menuPosition',
      'menuModule',
      'activeRoute',
    ]),
  },
  created() {},
  methods: {
    handleCommand(value) {
      switch (value) {
        case '0':
          this.$router.replace({ path: '/home' })
          break

        case '1':
          this.closeAllTags()
          this.logout()
          break

        default:
          break
      }
    },
    closeAllTags(view) {
      this.$store.dispatch('tagsView/delAllViews').then(({ visitedViews }) => {
        if (this.affixTags.some((tag) => tag.path === view.path)) {
          return
        }
        this.toLastView(visitedViews, view)
      })
    },

    clickTab(evnet) {
      this.$store.dispatch('menu/setActiveRoute', evnet.name)
      this.$store.dispatch(
        'permission/setRoutes',
        this.menuModule[this.activeRoute].children
      )

      console.log(sonsTree([this.menuModule[this.activeRoute]]))

      // const name = evnet.name
      // const value = this.dynamicRoutes[
      //   checkArrayString(this.dynamicRoutes, 'meta.title', name)
      // ]
      // if (name === '客服系统') {
      //   this.$store.dispatch('app/setInitLoading', true)
      //   service.post('/api/UserInfo/UserToAesHelper').then(
      //     (data) => {
      //       if (data && data.msg) {
      //         window.open(
      //           value.path +
      //             `/noPwlogin.html?username=${data.msg}&token=${getToken()}`
      //         )
      //       }
      //       this.$store.dispatch('app/setInitLoading', false)
      //     },
      //     (err) => {
      //       this.$store.dispatch('app/setInitLoading', false)
      //     }
      //   )
      //   return false
      // }
      // const arr = lowestArray(value)

      // //找到最原始第一个菜单
      // let path = arr ? arr.path : value.path
      // //判断是否存储有已经存在的菜单
      // //如刚刚进入 权限系统->角色权限->角色列表  如果已存在。则跳转该url
      // path =
      //   value && value.meta && value.meta.cacheUrl ? value.meta.cacheUrl : path
      // this.$router.push({ path: path })
    },

    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }

  .right-menu {
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
