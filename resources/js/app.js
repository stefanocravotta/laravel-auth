/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});


$().ready(function(){

    /* FORM CREATE */
    $('#form-create').submit(function(event){
        $('#error-create-title').hide();
        if($('#title-create').val().length === 0){
            $('#title-create').addClass('is-invalid');
            $('#error-create-title').show('slow').text('Il titolo è un campo obbligatorio').fadeOut(5000);
        }else if($('#title-create').val().length < 3){
            $('#title-create').addClass('is-invalid');
            $('#error-create-title').show('slow').text('Il titolo deve avere almeno 3 caratteri').fadeOut(5000);
        }else{
            $('#title-create').removeClass('is-invalid');
        }

        $('#error-create-content').hide();
        if($('#content-create').val().length === 0){
            $('#content-create').addClass('is-invalid');
            $('#error-create-content').show('slow').text('Il contenuto è un campo obbligatorio').fadeOut(5000);
        }else if($('#content-create').val().length < 3){
            $('#content-create').addClass('is-invalid');
            $('#error-create-content').show('slow').text('Il contenuto deve avere almeno 10 caratteri').fadeOut(5000);
        }else{
            $('#content-create').removeClass('is-invalid');
        }

        event.preventDefault();
    });

    /* FORM EDIT */
    $('#form-edit').submit(function(event){
        $('#error-edit-title').hide();
        if($('#title-edit').val().length === 0){
            $('#title-edit').addClass('is-invalid');
            $('#error-edit-title').show('slow').text('Il titolo è un campo obbligatorio').fadeOut(5000);
        }else if($('#title-edit').val().length < 3){
            $('#title-edit').addClass('is-invalid');
            $('#error-edit-title').show('slow').text('Il titolo deve avere almeno 3 caratteri').fadeOut(5000);
        }else{
            $('#title-edit').removeClass('is-invalid');
        }

        $('#error-edit-content').hide();
        if($('#content-edit').val().length === 0){
            $('#content-edit').addClass('is-invalid');
            $('#error-edit-content').show('slow').text('Il contenuto è un campo obbligatorio').fadeOut(5000);
        }else if($('#content-edit').val().length < 3){
            $('#content-edit').addClass('is-invalid');
            $('#error-edit-content').show('slow').text('Il contenuto deve avere almeno 10 caratteri').fadeOut(5000);
        }else{
            $('#content-edit').removeClass('is-invalid');
            event
        }

        event.preventDefault();
    });
});
