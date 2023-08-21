<template>
  <div class="navbar-header">
    <div class="d-flex">
      <!-- LOGO -->
      <div class="navbar-brand-box">
        <a href="index.html" class="logo logo-dark">
          <span class="logo-sm">
            <img src="/assets/images/logo-sm.svg" alt="" height="30">
          </span>
          <span class="logo-lg">
            <img src="/assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">SIPEKA</span>
          </span>
        </a>

        <a href="index.html" class="logo logo-light">
          <span class="logo-sm">
            <img src="/assets/images/logo-sm.svg" alt="" height="30">
          </span>
          <span class="logo-lg">
            <img src="/assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">SIPEKA</span>
          </span>
        </a>
      </div>

      <button type="button" class="btn btn-sm px-3 font-size-16 header-item" @click="toogleSidebar()">
        <i class="fa fa-fw fa-bars"></i>
      </button>

    </div>

    <div class="d-flex">

      <div class="dropdown d-inline-block">
        <button type="button" class="btn header-item bg-light-subtle border-start border-end"
          id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img class="rounded-circle header-profile-user"
            src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="Header Avatar">
          <span class="d-none d-xl-inline-block ms-1 fw-medium">Khana Zulfana Imam</span>
        </button>
      </div>
      <div class="dropdown d-inline-block ms-2">
        <button class="btn header-item noti-icon position-relative">
          <i data-feather="power"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toogleSidebar } from '../helpers/toogleSidebar';
import { onMounted } from 'vue';

onMounted(()=> {
  if(window.innerWidth < 922){
    toogleSidebar();
  }
})
</script>