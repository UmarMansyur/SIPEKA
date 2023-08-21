<template>
  <Parent>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="alert alert-danger alert-top-border">
                  Silahkan masukkan rentang waktu untuk melihat laporan.
                </div>
              </div>
              <div class="col-md-2">
                <div class="input-group mb-3">
                  <label for="" class="mt-2 me-2">Tampilkan</label>
                  <select class="form-select">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="25">25</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>
              </div>
              <div class="col-md-4"></div>
              <div class="col-md-6 mb-3 text-end">
                <button class="btn btn-warning"><i class="bx bx-printer"></i> Cetak </button>
                <button class="btn btn-success mx-2"><i class="bx bx-download"></i></button>
                <button class="btn btn-light"><i class="bx bx-filter"></i></button>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                  <table class="table table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>Tanggal Transaksi</th>
                        <th>Nama Paket</th>
                        <th>Jenis</th>
                        <th>Jumlah</th>
                        <th>Harga Jual</th>
                        <th>Harga Beli</th>
                        <th>Total Harga</th>
                        <th>Keuntungan</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>29/07/2001</td>
                        <td>XL Axiata</td>
                        <td>Kartu</td>
                        <td>1</td>
                        <td>Rp. 500.000</td>
                        <td>Rp. 1.000.000</td>
                        <td>Rp. 1.000.000</td>
                        <td>Rp. 500.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div class="float-start">
                  Menampilkan 1 dari 1 data
                </div>
                <div class="float-end">
                  <Pagination></Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parent>
</template>

<script setup lang="ts">
import Parent from '../Parent.vue';
import Pagination from '../../components/Pagination.vue'
</script>