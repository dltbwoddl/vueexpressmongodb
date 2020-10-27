<template>
  <div>
    <small class="text-danger">{{errors[0]}}</small>
  </div>
</template>

<script>
export default {
    props : {
            errors:{
                type : Array,
                required : true
            }
    }
}
</script>

<style>

</style>