AFRAME.registerComponent('car',{
    schema:{
        model:{type:'string',default:'./car-gltf-main/assets/car/scene.gltf'}

    },

    init:function(){
        this.el.setAttribute('gltf-model',this.data.model)
        
         
        const r={x:0,y:0,z:0}
        this.el.setAttribute('rotation',r)

        const p={x:1,y:5,z:0}
        this.el.setAttribute('position',p)

    
    }
})