<template>
    <div class="login-wrapper">
        <div class="title">
            <h3>Login</h3>
        </div>
   

        <div class="login-input">
            <label for="email">email</label>
            <input type="email">
        </div>

        <div class="login-input">
            <label for="password">password</label>
            <input id="password" type="password">
        </div>

        <div>
            <button role="button" class="submit" @click="goToNext()">
                <text v-if="!loading">
                    Submit
                </text>
                <text v-else>
                    Loading ...
                </text>
            </button>
        </div>

     </div>

</template>

<script>
import {linkTo} from '@storybook/addon-links'
export default {
    data() {
        return{
            loading: false
        }
    },
    methods: {
        link: linkTo('Card', 'Primary'),
        goToNext() {
            this.loading = true;
            setTimeout(() => {
                this.link();
            }, 2000)
        }
    }

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');

.login-wrapper {
    font-family: 'Quicksand', sans-serif;
    width: 400px;
    box-shadow: rgb(150, 150, 150) 0px 1px 3px;
    padding: 1rem;
    align-items: center;
    text-align: center;
}

label {
    font-size: small;
    text-transform: uppercase;
}

.login-wrapper > * {
    margin: .5rem;
}

.login-input {
    margin: 1rem;
}
input[type="password"], input[type="email"]{
    display: block;
    height: 1.5rem;
    padding: .5rem;
    border: rgba(150, 150, 150, 0.5)1px solid;
    border-radius: .3rem;
    margin: auto;
}

input:focus-visible {
    outline: none !important;
    border: rgb(76, 6, 141) 1px solid !important;
    box-shadow: rgb(76, 6, 141) 0px 2px 1px;
}

h3 {
    margin: 0;
}

.submit {
    background: rgb(76, 6, 141);
    color: white;
    padding: 1rem;
    border: none;
    border-radius: .3rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: .5s all linear;
}

.submit:hover{
    background-color: rgb(99, 22, 172);
}

</style>
