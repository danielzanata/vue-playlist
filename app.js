new Vue({
  el:'#vue-app',
  data: {
    nome: 'Zanatinha',
    trabalho: 'Analista'
  },
  methods: {
    saudacao: function(tempo) {
      return 'Bom' + tempo;
    }
  }
});
