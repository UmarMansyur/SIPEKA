<template>
  <Parent>
    <div class="card">
      <div class="card-header">
        <div class="form-check form-switch form-switch-sm float-end" dir="ltr">
          <input type="checkbox" class="form-check-input" id="sisa" @click="checked()">
          <label class="form-check-label" for="sisa">Sisa</label>
        </div>
        <h4 class="card-title">Transaksi Penjualan Kartu</h4>
        <div class="card-desc">Fitur transaksi memiliki dua jenis, yaitu: Transaksi Biasa dan Transaksi Sisa. Anda dapat
          mengubahnya sesuai kebutuhan dengan mengaktifkan toggle di pojok kanan atas</div>
      </div>
      <div class="card-body p-4">
        <div v-if="normalTransaction">
          <div class="row">
            <div class="col-12">
              <div class="alert alert-danger alert-top-border d-none d-lg-block">
                <p class="mb-0">
                  Isi form berikut dengan benar. Pastikan data yang diinput sudah
                  valid. Data yang diinputkan secara otomatis akan mengurangi stok dan menambah pendapatan di halaman
                  dashboard.
                  Jika stok barang tidak ada. Anda dapat mengedit stok di halaman manajemen stok
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <h5 class="font-size-14 mb-4"><i class="mdi mdi-arrow-right text-primary me-1"></i> Transaksi Biasa</h5>
            <div class="col-md-6 mb-3">
              <label for="jenis_kartu" class="form-label">Jenis Kartu:</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Jenis Kartu</option>
                <option value="1">Kartu Kredit</option>
                <option value="2">Kartu Debit</option>
              </select>
            </div>
            <div class="col-md-6 mb-3">
              <label for="jenis_barang">Kartu/Voucher</label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Pilih Kartu/Voucher</option>
                <option value="1">Kartu Kredit</option>
                <option value="2">Kartu Debit</option>
              </select>
            </div>
            <div class="col-md-3 mb-3">
              <label for="amount" class="form-label">Jumlah:</label>
              <input type="number" class="form-control" id="amount" placeholder="0">
            </div>
            <div class="col-md-3 mb-3">
              <label for="price" class="form-label">Harga:</label>
              <div class="input-group">
                <div class="input-group-text">Rp.</div>
                <input type="text" class="form-control" id="price" placeholder="0" readonly>
              </div>
            </div>
            <div class="col-md-6">
              <label for="price" class="form-label">Total:</label>
              <div class="input-group">
                <div class="input-group-text">Rp.</div>
                <input type="text" class="form-control" id="price" placeholder="0" readonly>
              </div>
            </div>
            <div class="col-12 my-3 text-end">
              <button class="btn btn-light btn-sm">
                <i class="bx bx-revision font-size-18"></i> Reset
              </button>
              <div class="vr mx-3"></div>
              <button class="btn btn-primary btn-sm">
                <i class="bx bx-cart font-size-18"></i> Tambah
              </button>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-striped">
                  <thead class="align-middle">
                    <tr>
                      <th style="width: 5%;" class="text-center">No</th>
                      <th style="width: 30%">Jenis Kartu</th>
                      <th style="width: 10%" class="text-center">Kartu/Voucher</th>
                      <th style="width: 10%;" class="text-center">Jumlah</th>
                      <th class="text-end">Harga</th>
                      <th class="text-end">Total</th>
                      <th class="text-center">#</th>

                    </tr>
                  </thead>
                  <tbody class="align-middle">
                    <tr>
                      <td class="text-center">1</td>
                      <td>Xl Axiata 6 GB</td>
                      <td class="text-center">
                        <span class="badge bg-danger font-size-12">asdf</span>
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-end">Rp. 100.000</td>
                      <td class="text-end">Rp. 100.000</td>
                      <td class="text-center">
                        <button class="btn btn-danger btn-sm">
                          <i class="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <!-- <tr>
                    <td colspan="7" class="text-center">Tidak ada data</td>
                  </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-4">
              <div class="alert alert-success py-3">
                <h5 class="text-center">Total Harga</h5>
                <h3 class="text-center">Rp. 0</h3>
                <p class="mb-0 text-center">Tekan simpan untuk menyimpan transaksi
                </p>

              </div>
              <div class="my-3 d-grid">
                <button class="btn btn-primary btn-block">
                  <i class="bx bx-send"></i> Simpan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="row">
            <div class="col-12">
              <div class="alert alert-warning d-none d-lg-block">
                <p class="mb-0">
                  Isi form berikut dengan benar. Pastikan data yang diinput sudah
                  valid. Jika inputan melebih stok, maka tomol simpan akan dinonaktifkan.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 my-auto">
              <div class="alert alert-success">
                <h6 class="text-center">Total Harga:</h6>
                <h3 class="text-center">Rp. 0</h3>
                <p class="text-center">Data yang terdapat pada tabel bersifat sementara! Untuk menyimpan data
                  transaksi klik tombol <b>tambah</b>.</p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="row mb-3">
                <div class="col-12 mb-3">
                  <label for="adfsdf" class="form-label">Pilih Jenis Kartu:</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Pilih Jenis Kartu</option>
                    <option value="1">Kartu Kredit</option>
                    <option value="2">Kartu Debit</option>
                  </select>
                </div>
                <div class="col-md-6 mb-3">
                  <label for="jenis_kartu" class="form-label">Pilih Jenis Kartu:</label>
                  <select class="form-select" aria-label="Default select example">
                    <option selected>Pilih Jenis Kartu</option>
                    <option value="1">Kartu Kredit</option>
                    <option value="2">Kartu Debit</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="jumlah" class="form-label">Jumlah:</label>
                  <input type="number" class="form-control" id="jumlah" placeholder="0">
                </div>
                <div class="col-md-3">
                  <div class="d-grid mt-4 pt-1">
                    <button class="btn btn-primary">
                      <i class="bx bx-cart"></i> Tambah
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-8">
              <div class="table-responsive">
                <table class="table table-bordered table-hover table-striped">
                  <thead class="align-middle">
                    <tr>
                      <th style="width: 5%;" class="text-center">No</th>
                      <th style="width: 30%">Jenis Kartu</th>
                      <th style="width: 10%" class="text-center">Kartu/Voucher</th>
                      <th style="width: 10%;" class="text-center">Jumlah</th>
                      <th class="text-end">Harga</th>
                      <th class="text-end">Total</th>
                      <th class="text-center">#</th>

                    </tr>
                  </thead>
                  <tbody class="align-middle">
                    <tr>
                      <td class="text-center">1</td>
                      <td>Xl Axiata 6 GB</td>
                      <td class="text-center">
                        <span class="badge bg-danger font-size-12">asdf</span>
                      </td>
                      <td class="text-center">1</td>
                      <td class="text-end">Rp. 100.000</td>
                      <td class="text-end">Rp. 100.000</td>
                      <td class="text-center">
                        <button class="btn btn-danger btn-sm">
                          <i class="bx bx-trash"></i>
                        </button>
                      </td>
                    </tr>
                    <!-- <tr>
                    <td colspan="7" class="text-center">Tidak ada data</td>
                  </tr> -->
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-4">
              <div class="alert alert-success py-3">
                <h5 class="text-center">Total Harga</h5>
                <h3 class="text-center">Rp. 0</h3>
              </div>
              <div class="my-3 d-grid">
                <button class="btn btn-primary btn-block">
                  <i class="bx bx-send"></i> Simpan
                </button>
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
import { ref } from 'vue';

const normalTransaction = ref<Boolean>(true);
const checked = () => {
  normalTransaction.value = !normalTransaction.value;
};
</script>