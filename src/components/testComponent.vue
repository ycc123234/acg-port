<template>
  <div id="testComponent">
    <div v-for="(item,index) in testList" :key="index">
      <slot :item="item" :attribute="attribute"></slot>
     

    </div>
  </div>
</template>

<script>
export default {
  name: "temp",
  data() {
    return {
      testList: [
        {
          id: 1,
          content: "one content ",
          type: "String",
        },
        {
          id: 2,
          content: "two content ",
          type: "String",
        },
        {
          id: 3,
          content: "three content ",
          type: "String",
        },
      ],
    };
  },

  created() {},
  mounted() {},

  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
#temp {
}
</style>
