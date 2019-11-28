<template>
    <div class="list row col-md-10">
        <div class="col-md-12">
            <h5>Mailing List</h5>

            <div class="row">
              <div class="col-md coldata">
                Mailing Name
              </div>
              <div class="col-md-5 coldata">
                Mailing Date
              </div>
              <div class="col-md coldata">
                Mailing List
              </div>
            </div>

            <div v-for="(mailing, index) in mailings" :key="index">
              <div class="row">
                <div class="col-md coldata">
                  {{ mailing.name }}
                </div>
                <div class="col-md-5 coldata">
                  {{ mailing.date | formatDate}}
                </div>
                <div class="col-md coldata">
                  <router-link :to="{name: 'mailing', params: { id: mailing.id } }">
                      {{ mailing.filename }}
                  </router-link>
                </div>
              </div>
            </div>

        </div>
        <!-- <div class="col-md-6">
            <router-view @refreshData="refreshList"></router-view>
        </div> -->
    </div>
</template>

<script>
import http from "../http-common";

export default {
  name: "mailing-list",
  data() {
    return {
      mailings: []
    };
  },
  methods: {
    /* eslint-disable */
    getList() {
      http
        .get("/mailing")
        .then(response => {
          this.mailings = response.data; // JSON are parsed automatically.
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.getList();
    }
  },
  mounted() {
    this.getList();
  }
};
</script>

<style>
.list {
  text-align: center;
  margin: auto;
}
.coldata {
  text-align: left;
}
</style>
