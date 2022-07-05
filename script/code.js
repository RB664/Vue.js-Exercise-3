const app = Vue.createApp({
    template: `
    <div>
    <input type='text' id='input' placeholder='Enter your data' @keypress="display"/>
    </div>
    <lable id='output' v-if="show">{{result}} {{input}}</lable>
    `,
    data: function () {
        return {
            show: false,
            result: 'You pressed a/A key',
        }
    },
    methods: {
        display(event) {
            console.log(event)
            if (event.code == "KeyA") {
                this.show = true
            }else{
                this.show = false
            }
        }
    }
});
app.mount('#app');