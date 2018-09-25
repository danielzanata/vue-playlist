new Vue({
  el:'#vue-app',
  data: {
    nome: 'Zanatinha',
    trabalho: 'Analista',
    website: 'http://www.thenetninja.co.uk',
    websiteTag: '<a href="http://www.thenetninja.co.uk">The Net Ninja Tag</a>'
  },
  methods: {
    saudacao: function(tempo) {
      return 'Bom' + tempo;
    }
  }
});
