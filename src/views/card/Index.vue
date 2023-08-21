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
        <div class="row justify-content-center border align-items-center">
          <div class="col-md-3 my-2 align-items-center">
            <div class="input-group">
              <button class="btn btn-primary" type="button" id="button-addon2">
                <i class="bx bx-search-alt"></i>
              </button>
              <input type="text" class="form-control" placeholder="Cari Kartu">
            </div>
          </div>
          <div class="col-md-12 border">
            <div class="table-responsive mt-2">
              <table class="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th rowspan="2">Nama Kartu</th>
                    <th rowspan="2">Kategori</th>
                    <th rowspan="2">Provider</th>
                    <th rowspan="2" class="text-center">Stok</th>
                    <th rowspan="2" class="text-end">Harga Jual</th>
                    <th rowspan="2" class="text-end">Harga Beli</th>
                    <th colspan="2" class="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Xl Axiata 6GB</td>
                    <td>Kartu</td>
                    <td>XL</td>
                    <td class="text-center">10</td>
                    <td class="text-end">10000</td>
                    <td class="text-end">9000</td>
                    <td class="text-center">
                      <button class="btn btn-info btn-sm">
                        <i class="bx bx-pencil"></i>
                      </button>
                    </td>
                    <td class="text-center">
                      <button class="btn btn-danger btn-sm">
                        <i class="bx bx-trash"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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