<template>
    <div class="header">
        <h1>{{ theTitle }}</h1>
    </div>
</template>

<script>
export default {
    name: 'Header',
    props: ['theTitle']
}
</script>

<style scoped>
    .header 
    {
        background: cornflowerblue;
        color: ivory;
        font-family:Arial, Helvetica, sans-serif;
        /* margin: 10px; */
        padding: 10px;
        text-align: center;
        text-shadow: 2px 2px 2px gray;
    }
</style>