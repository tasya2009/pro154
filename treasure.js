AFRAME.registerComponent('treasure-generator', {
    schema: {
      numCoins: { default: 3 },
    },
  
    init: function () {
      const scene = this.el;
  
      for (let i = 0; i < this.data.numCoins; i++) {
        const coin = document.createElement('a-entity');
        coin.setAttribute('treasure', '');
        coin.setAttribute('position', {
          x: Math.random() * 10 - 5,
          y: Math.random() * 5 - 2,
          z: Math.random() * 10 - 5,
        });
        scene.appendChild(coin);
      }
    }
  });
  
  AFRAME.registerComponent('treasure', {
    init: function () {
      this.el.setAttribute('gltf-model', '#coinModel');
      this.el.setAttribute('animation-mixer', '');
    }
  });
  