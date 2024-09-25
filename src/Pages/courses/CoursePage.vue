<template>
<p>asdasd</p>
    <h1>{{course.title}}</h1>
    <p>{{course.shortDescription}}</p>
    <p>{{course.price}}</p>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return{
            course:"",
        }
    },
    async created(){
        try {
            // console.log(this.$route.params.id);  
            const url="/v1/courses/"+this.$route.params.id; 
            // + this.$route.params.id;
            console.log(url)
            const response=await axios.get(url);
            this.course=response.data;
            // console.log(response.data)
           
        } catch (error) {
            console.log(error.message);
        }
    }
}
</script>