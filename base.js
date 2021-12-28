AFRAME.registerComponent('base',{
    schema:{
        radius:{type:'number', default:20},
        height:{type:'number',default:2}
        
    },

    init:function(){
        var {radius}=this.data
        this.el.setAttribute('geometry',{
            primitive:'cylinder',
            radius:this.data.radius,
            height:this.data.height
        })

        this.el.setAttribute('material',{color:'skyblue'})
    }
})