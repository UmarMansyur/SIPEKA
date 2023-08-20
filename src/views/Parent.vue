<template>
    <div class="layout-wrapper">
        <header id="page-topbar">
            <div class="layout-width">
                <NavbarHeader />
            </div>
        </header>
        <SideBar />
        <div class="main-content">

            <div class="page-content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">{{ $route.name }}</h4>

                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item"><a href="javascript: void(0);">Operator</a></li>
                                        <li class="breadcrumb-item active">{{ $route.name }}</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>
                    <slot />
                </div>
            </div>


            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                        </div>
                        <div class="col-sm-6">
                            <div class="text-sm-end d-none d-sm-block">
                                Design & Develop by <a href="#!" class="text-decoration-underline">Themesbrand</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavbarHeader from "../components/NavbarHeader.vue";
import SideBar from "../components/SideBar.vue";
</script>