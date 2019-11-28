<template>
  <div class="submitform">
    <div v-if="!submitted">
        <div class="form-group">
          <label for="name">Mailing Name</label>
          <input type="text" class="form-control" required v-model="name" >
        </div>

        <div class="form-group">
          <label for="date">Mailing Date</label>
          <input type="date" class="form-control" required v-model="date" >
        </div>

        <div class="form-group">
          <label for="file">Mailing List</label>
          <input type="file" id="file" ref="file" multiple v-on:change="handleFileUpload()"/>
        </div>

        <br/> <br/>
        <button v-on:click="save" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>Data successfully saved!</h4>
      <button class="btn btn-success" v-on:click="reset">Add</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import http from "../http-common";

export default {
  name: "add",
  data() {
    return {
      name: "",
      date: "",
      file: "",
      submitted: false
    };
  },
  methods: {
    save() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("date", this.date);
      formData.append("file", this.file);

      http
        .post("/mailing", formData)
        .then(response => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    reset() {
      this.submitted = false;
      this.name = ""
      this.date = ""
      this.file = ""
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
  }
}
</script>

<style>
.submitform {
  max-width: 300px;
  margin: auto;
}
</style>
