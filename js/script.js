// import TitleVue from './components/TitleVue';

let TitleVue = {
    props: [
        'title'
    ],
    template: `<h3>{{ removeSpace() }}</h3>`,
    methods: {
        removeSpace() {
            let arr = this.title.split(" ");
            return arr[0] + arr[1] + arr[2];
        }
    }
}

new Vue({
    el: "#app",
    components: {
        'title-view': TitleVue
    }
})