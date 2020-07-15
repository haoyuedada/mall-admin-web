<template>
    <div class="tag-container">
      <ScrollPane>
        <router-link
          v-for="tag in tagViews"
          :to="{path:tag.path}"
          :key="tag.path">
          {{ tag.name }}
          <span class="el-icon-close" @click.prevent.stop="closeTag(tag)" v-if="tag.path!='/home1'"></span>
        </router-link>
      </ScrollPane>
    </div>
</template>

<script>
  import ScrollPane from './ScrollPane'
  import { duplicateRemove } from '@/utils/publicMethods'

	export default {
		name: "TagViews",
    components:{ ScrollPane },
    data(){
		  return {
        tagViews:[
          {name:'首页',path:'/home1'}
        ]
      }
    },
    watch:{
		  $route(to,from){
        let obj = {};
        let tagName = to.meta.title;
        let path = to.path;
        let bool = false;
        obj.name = tagName;
        obj.path = path;
        this.tagViews.forEach(item => {
          if(item.path == path){
            bool = true;
          }
        })
        if(!bool){
          this.tagViews.push(obj);
        }
      }
    },
    methods:{
      closeTag(a,b,c){
        console.log(a);
        console.log(b);
        console.log(c);
      }
    }
	}
</script>

<style scoped>
.tag-container{
  height: 39px;
  background-color: #fff;
}
a{
  float: left;
  text-decoration: none;
  padding: 4px 7px 4px 9px;
  margin-left: 8px;
  border-radius: 2px;
  margin-top: 7px;
  font-family: unset;
  font-size: 12px;
  color: #fff;
  background-color: #42b983;
}
</style>
