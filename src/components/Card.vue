<template>

<div class="card">
    <div class="media" :style="mediaBg" v-if="mediaHref"></div>
    <h4 class="title"> {{title}} </h4>
    <small class="secondary-text"> {{subText}} </small>
    <p class="supporting-text"> {{supportingText}} </p>
</div>
  
</template>

<script>
export default {
    name: `Card`,
    props: {
        title: String,
        subText: String,
        mediaHref: String,
        supportingText: String,
    },
    computed: {
        mediaBg() {
            return {
                backgroundImage: `url(${this.mediaHref})`
            }
        }
    }

}
</script>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
<style scoped>
    .card {
        background-color: #fff;
        border-radius: .2rem;
        box-shadow: rgb(150, 150, 150) 0px 1px 3px; 
        width: 350px;
        padding: .8rem;
    }

    .media {
      height: 150px;
    }

    .title, .secondary-text{
       margin-bottom: 0;
    }
    .material-button {
      color: rgb(76, 6, 141);
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      padding: .5rem;
      font-weight: bold;
      transition: .3s all linear;
    }
    .material-button:hover {
      background-color: rgba(106, 20, 185, 0.082);
    }
</style>
