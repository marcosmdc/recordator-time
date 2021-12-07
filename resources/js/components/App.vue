<template>
    <div id="app"  :class="$style.container">
        <h1>Vue Router Demo App</h1>
        <p>
            <router-link :to="{ name: 'home' }">Home</router-link> |
            <router-link :to="{ name: 'hello' }">Hello World</router-link>
            <router-link :to="{ name: 'card' }">Card</router-link>
            <router-link :to="{ name: 'alumno' }">Alumno</router-link>
            <router-link :to="{ name: 'register' }">Register</router-link>
          
        </p>
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
    }
</script>

<style module>
.container {
    max-width: 1200px;
    margin: auto;
    text-align: center;
}

</style>