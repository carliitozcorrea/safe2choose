var app = new Vue({
    el: "#app",
    data: {
        attemptSubmit: false,
        basicInfoValid: false,

        genre: {
            selected: '',
            options: [
                {text: 'Female', value: 'F'},
                {text: 'Male', value: 'M'},
            ]
        },
        age: {
            selected: '',
            options: [
                {text: 'Younger than 15', value: '<15'},
                {text: '15-20', value: '15-20'},
                {text: '21-26', value: '21-26'},
                {text: '27-32', value: '27-32'},
                {text: '33-38', value: '33-38'},
                {text: '39-43', value: '39-43'},
                {text: '43+', value: '>43'}
            ]
        },
        about: {
            selected: '',
            options: [
                {text: 'A friend/ a member of my family', value: 'friend'},
                {text: 'By Social Media', value: 'social'},
                {text: 'Searching on the Internet/Google', value: 'searching'},
                {text: 'Because a press release/news', value: 'news'},
            ]

        },

        question:{
            selected:'',
            options:[
                {text:'I want to purchase the abortion pills',value:'purchase'},
                {text:'I want to know more about the abortion pills ',value:'moreinfo'},
            ]
        }
    },
    computed: {
        missingGenre: function () {
            return this.genre.selected === '';
        },
        missingAge: function () {
            return this.age.selected === '';
        },
        missingAbout: function () {
            return this.about.selected === '';
        }
    },
    methods: {
        validateForm: function (event) {
            event.preventDefault();
            this.attemptSubmit = true;
            if (!this.missingGenre && !this.missingAge && !this.missingAbout) {
                this.basicInfoValid = true;
            }
        },
        validateSecondForm: function (event) {
            event.preventDefault();
        }

    }
});