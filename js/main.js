const app = Vue.createApp({
    data: () => ({
        
    }),
    computed: {
        computedNumber: function(){
            return Math.random()
        }
    },
    methods: {
        methodNumber: function(){
            return Math.random()
        }
    }
})
app.mount('#app')