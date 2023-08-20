<template>
  <div class="row">
    <div class="col-md-4">
      <div class="card card-h-100">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1">
              <span class="mb-3 lh-1 d-block text-dark">Pendapatan</span>
              <h4 class="mb-3">
                <span>Rp. 100.000</span>
              </h4>
              <div class="text-nowrap">
                <span class="badge bg-danger text-white">{{ new Date().toISOString().slice(0, 10) }}</span>
              </div>
            </div>
            <div class="flex-shrink-0 text-end dash-widget">
              <div id="mini-chart1" class="apex-charts">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card card-h-100">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1">
              <span class="mb-3 lh-1 d-block text-dark">Pendapatan</span>
              <h4 class="mb-3">
                <span>Rp. 100.000</span>
              </h4>
              <div class="text-nowrap">
                <span class="badge bg-danger text-white">{{ new Date().toISOString().slice(0, 10) }}</span>
              </div>
            </div>
            <div class="flex-shrink-0 text-end dash-widget">
              <div id="mini-chart2" class="apex-charts">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="card card-h-100">
        <div class="card-body">
          <div class="d-flex align-items-center">
            <div class="flex-grow-1">
              <span class="mb-3 lh-1 d-block text-dark">Pendapatan</span>
              <h4 class="mb-3">
                <span>Rp. 100.000</span>
              </h4>
              <div class="text-nowrap">
                <span class="badge bg-danger text-white">{{ new Date().toISOString().slice(0, 10) }}</span>
              </div>
            </div>
            <div class="flex-shrink-0 text-end dash-widget">
              <div id="mini-chart3" class="apex-charts">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>