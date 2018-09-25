new Vue({
  el:'#vue-app',
  data: {
    idade: 27
  },
  methods: {
    logName: function() {
      console.log('Você digitou seu nome.')
    },
    logAge: function() {
      console.log('Você digitou sua idade.')
    }
  }
});
