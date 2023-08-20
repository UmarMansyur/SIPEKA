<template>
  <div class="vertical-menu">

    <div data-simplebar class="h-100">

      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu list-unstyled" id="side-menu">
          <li class="mt-3" id="thumbnail">
            <a href="index.html" class="waves-effect text-center">
              <img src="https://api.unira.ac.id/img/profil/mhs/8e35dc4c9c4b61b341800d1ef1f10eba.jpg" alt="gambar-thumbnail" class="rounded-circle img-thumbnail avatar-xxl">
            </a>
            <h4 class="text-center mt-2" id="username">Khana Zulfana Imam</h4>
            <hr class="text-dark">
          </li>
          <li class="menu-title" data-key="t-menu">Menu</li>

          <li :class="{'mm-active' : $route.path === '/'}">
            <RouterLink to="/">
              <i data-feather="home"></i>
              <span data-key="t-dashboard">Beranda</span>
            </RouterLink>
          </li>

          <li class="menu-title" data-key="t-apps">Penjualan</li>
          <li :class="{'mm-active' : $route.path === '/transaksi'}">
            <RouterLink to="/transaksi">
              <i data-feather="shopping-cart"></i>
              <span data-key="t-dashboard">Transaksi</span>
            </RouterLink>
          </li>
          <li :class="{'mm-active' : $route.path === '/manajemen-kartu'}">
            <RouterLink to="/manajemen-kartu">
              <i data-feather="command"></i>
              <span data-key="t-dashboard">Manajemen Kartu</span>
            </RouterLink>
          </li>
          <li>
            <a href="index.html">
              <i data-feather="file-text"></i>
              <span data-key="t-dashboard">Laporan</span>
            </a>
          </li>
          <li>
            <a href="index.html">
              <i data-feather="edit-3"></i>
              <span data-key="t-dashboard">Catatan</span>
            </a>
          </li>
          <li>
            <a href="javascript: void(0);" class="has-arrow">
              <i data-feather="settings"></i>
              <span data-key="t-ecommerce">Pengaturan</span>
            </a>
            <ul class="sub-menu" aria-expanded="false">
              <li><a href="ecommerce-products.html" key="t-products">Provider</a></li>
              <li><a href="ecommerce-product-detail.html" data-key="t-product-detail">Barang</a></li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
declare const feather: any;
declare const $: any;

</script>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  feather.replace();
  $("#side-menu").metisMenu();
});
</script>