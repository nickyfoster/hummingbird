<template>
  <div class="view md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="isSidebarOpen = true">
        <md-icon>menu</md-icon>
      </md-button>
      <img class="layout-logo" src="https://dopyoman.github.io/jobhelper/dist/static/img/logo.png" />
      <span class="md-title">{{appName}}</span>
    </md-toolbar>

    <md-drawer :md-active.sync="isSidebarOpen">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">{{appName}}</span>
      </md-toolbar>

      <md-list>

        <span @click="isSidebarOpen = false">
          <router-link to="/">
            <md-list-item @click="isSidebarOpen = true">
              <md-icon>home</md-icon>
                <span class="md-list-item-text">Home</span>
            </md-list-item>
          </router-link>
        </span>

        <span @click="isSidebarOpen = false">
          <router-link to="/profile">
            <md-list-item @click="isSidebarOpen = true">
              <md-icon>account_circle</md-icon>
              <span class="md-list-item-text">Profile</span>
            </md-list-item>
          </router-link>
        </span>
      </md-list>
    </md-drawer>

    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {push} from '../router'
  export default {
    name: 'Layout',
    data: () => ({
      isSidebarOpen: false,
      appName:  window.store.get('appName')
    }),
    methods: {

    }
  }
</script>

<style>
  .view {
    min-height: 100vh;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
    background: white;
  }

  .md-content {
    padding: 16px;
  }
  .router-link-exact-active {
    background: #eee;
  }
  .content {
    padding: 16px;
    background: white;
  }
  .layout-logo {
    width: 35px
  }
</style>