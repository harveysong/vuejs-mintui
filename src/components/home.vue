<template>
<div>
    
<mt-header fixed title="固定在顶部"></mt-header>
<mt-swipe :auto="4000">
  <mt-swipe-item>1</mt-swipe-item>
  <mt-swipe-item>2</mt-swipe-item>
  <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>

</div>
</template>
<script>
export default {
    data(){
        return {
            data : '123',
            active:true
        }
    },
    created () {
        this.fetchData();
    },
    methods :{
        fetchData(){
           
        }
    }
}
</script>