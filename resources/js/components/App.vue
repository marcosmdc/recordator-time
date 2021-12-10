<template>
    <div id="app"  :class="$style.container">
        <h1>Asistencia - WebApp</h1>
        <p>
            <router-link :to="{ name: 'home' }"><button type="button" class="btn btn-primary">Inicio</button></router-link> |
            <router-link :to="{ name: 'hello' }"><button type="button" class="btn btn-primary">Hello World</button></router-link>
            <router-link :to="{ name: 'card' }"><button type="button" class="btn btn-primary">Card</button></router-link>
            <router-link :to="{ name: 'alumno' }"><button type="button" class="btn btn-primary">Alumno</button></router-link>
            <router-link :to="{ name: 'clase' }"><button type="button" class="btn btn-primary">Clase</button></router-link>
            <router-link :to="{ name: 'register' }"><button type="button" class="btn btn-primary">Register</button></router-link>

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
    background-image:url('/images/background.jpg');
    background-size: cover;
    height: 1500px;
}



</style>
