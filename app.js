new Vue({
  el:'#vue-app',
  data: {
    nome: '',
    idade: ''
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
