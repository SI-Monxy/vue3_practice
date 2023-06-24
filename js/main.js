
const app = Vue.createApp({
    data: () => ({
       counter:0
    }),
    methods:{
        clickHandler:function(){
            this.counter += 3
        }
    }
})
app.mount('#app')

