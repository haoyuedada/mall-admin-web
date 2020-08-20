  <template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  html,body{
    margin: 0;
    padding: 0;
    height:100%;
    overflow:hidden;
    box-sizing: border-box;
    line-height:1.15;
  }
  #app{
    height: 100%;
  }
  a{
    text-decoration:none;
  }
</style>
