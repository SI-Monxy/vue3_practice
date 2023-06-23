
const app = Vue.createApp({
    data: () => ({
       counter:0
    }),
    methods:{
        clickHandler:function(){
            this.counter += 2
        }
    }
})
app.mount('#app')

