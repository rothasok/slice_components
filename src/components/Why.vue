<template>
  <!-- why section -->
  <section class="why_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>Why Choose <span>Us</span></h2>
      </div>
      <div class="why_container" v-for="(why,index) in whys" :key="index" >
        <div class="box" >
          <div class="img-box">
            <img :src="why.img" alt="" />
          </div>
          <div class="detail-box">
            <h5>{{why.header}}</h5>
            <p>
              {{why.detail}}
            </p>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href=""> Read More </a>
      </div>
    </div>
  </section>
  <!-- end why section -->
</template>
<script>

export default {
  data() {
    return {
      whys: [
        {
          img: "images/w1.png",
          detail:
            " Incidunt odit rerum tenetur alias architecto asperiores omni cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
          header:"Expert Management"
        },
         {
          img: "images/w2.png",
          detail:
            "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
          header:"Secure Investment"
        },
        {
          img: "images/w3.png",
          detail:
            "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
          header:"Instant Trading"
        },
        {
          img: "images/w4.png",
          detail:
            "Incidunt odit rerum tenetur alias architecto asperiores omnis cumque doloribus aperiam numquam! Eligendi corrupti, molestias laborum dolores quod nisi vitae voluptate ipsa? In tempore voluptate ducimus officia id, aspernatur nihil. Tempore laborum nesciunt ut veniam, nemo officia ullam repudiandae repellat veritatis unde reiciendis possimus animi autem natus",
          header:"Happy Customers"
        },
        
      ],
    };
  },
};
</script>
