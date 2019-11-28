<template>
  <div v-if="contentList" class="col-md-12" style="display: flex;justify-content: center;">

    <div class="col-md-10" >
      <vue-good-table
        title="Demo Table"
        styleClass="vgt-table striped"
        max-height="300px"
        :columns="columns"
        :rows="this.contentList"
        :fixed-header="true"
        :sort-options="{ enabled: false }"
        :pagination-options="{
            enabled: true,
            mode: 'records',
            perPage: 10,
            position: 'bottom',
            perPageDropdown: [10],
            dropdownAllowAll: false,
            setCurrentPage: 1,
            nextLabel: 'next',
            prevLabel: 'prev',
            rowsPerPageLabel: 'Rows per page',
            ofLabel: 'of',
            pageLabel: 'page', // for 'pages' mode
            allLabel: 'All'}"

      />
    </div>

  </div>
  <div v-else>
    <br/>
    <p>Data empty...</p>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: "mailing-grid",
  props: {
    contentList: {
      type: Array,
      default: () => ([])
    }
  },
  data(){
    return {
      columns: [
        {
          label: 'ID',
          field: 'id',
          filterable: false,
        },
        {
          label: 'Name',
          field: 'name',
          filterable: true,
        },
        {
          label: 'Postal Code',
          field: 'postalcode',
          type: 'number',
          html: false,
          filterable: true,
        }
      ]
    };
  }
};
</script>
