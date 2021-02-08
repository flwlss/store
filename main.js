new Vue({
    el:"#slider",
    data: {
        currentView: 'first'
    },
    components: {
        first: {
            template: '#first-slide'
        },
        second: {
            template: '#second-slide'
        },
        third: {
            template: '#third-slide'
        },
        fourth: {
            template: '#fourth-slide'
        }
    },
    methods: {
        switchView: function(view) {
            this.currentView = view
        }
    }
})