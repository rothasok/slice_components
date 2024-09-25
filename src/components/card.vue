<template>
<p>{{msg}}</p>
    <div class="card" style="width: 18rem;">
  <img :src="image" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">{{title}}</h5>
    <p class="card-text">{{description}}</p>
    <!-- <a :href="link" class="btn btn-primary">Purchase</a> -->
  </div>
</div>
</template>
<script>


export default {
    props:["link","title","image","description","msg"]
        
    };

</script>
