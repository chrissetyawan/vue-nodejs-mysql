<template>
  <div v-if="mailing">
    <h4> {{ mailing.filename}} </h4>
    <br />
    <!-- component example -->
    <div>
      <mailing-grid :contentList="contents" />
    </div>
    <!-- end component example -->

    <br />
    <span class="btn btn-primary" v-on:click="download()">Download</span>
  </div>
  <div v-else>
    <br/>
    <p>Please click on a mailing...</p>
  </div>
</template>

<script>
/* eslint-disable */
import http from "../http-common";
import MailingGrid from "./MailingGrid.vue";

export default {
  name: "mailing",
  components : {
    MailingGrid
  },
  props: ["id"],
  computed: {
    contents() {
      return this.mailing.content ? JSON.parse(this.mailing.content) : []
    },
  },
  data() {
    return {
      mailing: {}
    };
  },
  created() {
    this.getDetail();
  },
  methods: {

    getDetail() {
      http.get("/mailing/"+ this.id)
        .then(response => {
          this.mailing = response.data; // JSON are parsed automatically.
        })
        .catch(e => {
          console.log(e);
        });
    },
    download() {
      http
      .get("/mailing/download/"+ this.id, {responseType: 'blob'})
      .then((response) => {
         const url = window.URL.createObjectURL(new Blob([response.data]));
         const link = document.createElement('a');
         link.href = url;
         link.setAttribute('download', this.mailing.filename);
         document.body.appendChild(link);
         link.click();
         link.remove();// you need to remove that elelment which is created before.
       })
       .catch(e => {
         console.log(e);
       })
     }
  }
};
</script>
