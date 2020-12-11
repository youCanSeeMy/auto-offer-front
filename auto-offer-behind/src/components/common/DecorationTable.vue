<template>
  <div style="padding:20px;" id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">装饰展示</div>
      <table class="table table-bordered table-striped text-center">
        <thead>
        <tr>
          <th>序号</th>
          <th>装饰名称</th>
          <th>装饰单价</th>
          <th>装饰数量</th>
          <th>装饰总价</th>
          <th>上级装饰</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for ="(decoration,index) in decorations">
          <td>{{index+1}}</td>
          <td>{{decoration.decorationName}}</td>
          <td>{{decoration.decorationPrice}}</td>
          <td>{{decoration.decorationNumber}}</td>
          <td>{{decoration.decorationTotal}}</td>
          <td>{{decoration.parentId}}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Table",
      created(){
        this.getAllData()
      },
        data () {
          return {
            decorations: [{
              decorationName:"",
              decorationPrice:"111",
              decorationNumber:"",
              decorationTotal:"",
              parentId:""
            }],
          }
        },
        methods: {
          getAllData () {
            debugger
            this.$axios
              .post('/decotation/list')
              .then(successResponse => {
                this.decorations = successResponse.data
                // this.decorations = JSON.stringify(successResponse.data);
                console.log(this.decorations);
              })
              .catch(failResponse => {
                console.log(failResponse);
              })
          }
        }
    }
</script>

<style scoped>

</style>
