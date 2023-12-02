AFRAME.registerComponent('movement-controls', {
    init: function () {
      const scubaDiver = this.el;
  
      window.addEventListener('keydown', (event) => {
        const angularVelocity = 2; 
        const positionStep = 0.1; 
  
        switch (event.key) {
          case 'ArrowUp':
            scubaDiver.object3D.position.add(
              scubaDiver.object3D.getWorldDirection().multiplyScalar(positionStep)
            );
            break;
          case 'ArrowDown':
            scubaDiver.object3D.position.add(
              scubaDiver.object3D.getWorldDirection().multiplyScalar(-positionStep)
            );
            break;
          case 'ArrowLeft':
            scubaDiver.object3D.rotation.y += THREE.Math.degToRad(angularVelocity);
            break;
          case 'ArrowRight':
            scubaDiver.object3D.rotation.y -= THREE.Math.degToRad(angularVelocity);
            break;
        }
      });
    }
  });
  