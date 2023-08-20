<template>
  <Parent>
    <div class="card">
      <div class="card-header">
        <h4 class="card-title">Manajemen Kartu</h4>
        <p class="card-desc text-muted mb-0">Anda dapat melakukan penambahan, penghapusan dan pengeditan untuk setiap
          kartu yang dimasukkan. Jika anda tidak menemukan kategori kartu yang diinginkan anda dapat mengujungi menu
          pengaturan.</p>
      </div>
      <div class="card-body">
        <div class="row justify-content-center">
          <div class="col-md-3">
           <div class="input-group">
              <button class="btn btn-primary" type="button" id="button-addon2">
                <i class="bx bx-search-alt"></i>
              </button>
              <input type="text" class="form-control" placeholder="Cari Kartu">
           </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>

<script setup lang="ts">
import Parent from '../Parent.vue';
</script>