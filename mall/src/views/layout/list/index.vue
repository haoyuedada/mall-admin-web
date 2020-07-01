<template>
    <div id="tableData" :data="tableData">

    </div>
</template>

<script>
  import {fetchListWithChildren} from '@/api/productCate'

	export default {
		name: "productList",
    data(){
		  return {
        list: null
      }
    },
    created(){
      this.getProductCateList();
    },
    methods:{
      getProductCateList(){
        fetchListWithChildren().then(response => {
          let list = response.data;
          this.productCateOptions = [];
          for (let i = 0; i < list.length; i++) {
            let children = [];
            if (list[i].children != null && list[i].children.length > 0) {
              for (let j = 0; j < list[i].children.length; j++) {
                children.push({label: list[i].children[j].name, value: list[i].children[j].id});
              }
            }
            this.productCateOptions.push({label: list[i].name, value: list[i].id, children: children});
          }
        })
      }
    }
	}
</script>

<style scoped>

</style>
