<template>
    <div id="app" class="container-fluid">
        <div class="site-info">
            <h3>Vue Nodejs MySql example</h3>
        </div>
        <nav>
          <router-link class="btn btn-primary" to="/add">Mailing list upload</router-link>
          <router-link class="btn btn-primary" to="/mailings">List of mailing</router-link>
        </nav>

        <br/> <br/>

        <router-view/>
    </div>
</template>

<script>
export default {
  name: "app",
  methods: {
    /* eslint-disable */
  }
};
</script>

<style>
.site-info {
  color: blue;
  margin-top: 30px;
  margin-bottom: 30px;
}

.btn-primary {
  margin-right: 5px;
}

.container-fluid {
  text-align: center;
}
</style>
