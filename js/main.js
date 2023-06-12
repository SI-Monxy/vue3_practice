const app = Vue.createApp({
    data: () => ({
        message:'Hello! Vue.js'
        // newItem: '',
        // todos:[]
        // message: 'Hello, <span style="color:red;">Vue.js</span>'
    }),
    // methods:{
    //     clickHandler: function(event){
    //         this.message = this.message.split('').reverse().join('')
    //     }
    // }
    // methods:{
    //     addItem: function(event){
    //         // console.log('Clicked!')
    //         if(this.newItem === "") return
    //         let todo = {
    //             item: this.newItem,
    //             isDone: false
    //         }
    //         this.todos.push(todo)
    //         this.newItem = ""
    //     },
    //     deleteItem: function(index){
    //         console.log('Delete!')
    //         // console.log(index)
    //         this.todos.splice(index,1)
    //     }
    // }
})
app.mount('#app')