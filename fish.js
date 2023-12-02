AFRAME.registerComponent('fish-generator', {
    schema: {
      numFish: { default: 5 },
    },
  
    init: function () {
      const scene = this.el;
  
      for (let i = 0; i < this.data.numFish; i++) {
        const fish = document.createElement('a-entity');
        fish.setAttribute('fish', '');
        fish.setAttribute('position', {
          x: Math.random() * 10 - 5,
          y: Math.random() * 5 - 2,
          z: Math.random() * 10 - 5,
        });
        scene.appendChild(fish);
      }
    }
  });
  
  AFRAME.registerComponent('fish', {
    init: function () {
      this.el.setAttribute('gltf-model', '#fishModel');
      this.el.setAttribute('animation-mixer', '');
    }
  });
  