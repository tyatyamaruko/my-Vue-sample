let TitleVue = {
    props: function() {
        'title-prop'
    },
    template: `<h3>{{ title }}</h3>`,
    data: function () {
        return {
            title: this.title-prop,
        }
    }
}

export default {
    TitleVue
}