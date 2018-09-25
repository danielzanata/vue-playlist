new Vue({
  el:'#vue-app',
  data: {
    idade: 27,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc) {
      this.idade += inc;
    },
    subtract: function(dec) {
      this.idade -= dec;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    click: function() {
      alert('Você me clicou.')
    }
  }
});
