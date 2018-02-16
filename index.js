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
        question: {
            selected: '',
            options: [
                {text: 'I want to purchase the abortion pills', value: 'purchase'},
                {text: 'I want to know more about the abortion pills ', value: 'more_info'},
            ]
        },
        for_me: true,
        weeks: {
            selected: '',
            options: [
                {
                    text: '10 weeks or less',
                    value: '<10',

                }, {
                    text: '11-12 weeks',
                    value: '11-12',

                }, {
                    text: '12 weeks or more',
                    value: '>12',

                }
            ]
        },
        related: {
            selected: '',
            options: [
                {
                    text: 'She\'s my friend',
                    value: 'friend',

                }, {
                    text: 'She\'s a member of my family',
                    value: 'family',

                }, {
                    text: 'She\'s my partner',
                    value: 'partner',

                }
            ]
        },

        moreInfo: {
            selected: '',
            options: [
                {text: 'Are they safe?', value: 'safe'},
                {text: 'Are they legal?', value: 'legal'}
            ]
        },
        purchase_the_pills: false,
        finish: false,
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
        },
        weeksResult: function () {
            if (this.weeks.selected == '<10') {
                this.finish = true;
                return {
                    class: 'alert-success',
                    message: 'You are still on time to use safely the abortion pills. You can order them in this website. First, please check if we have distribution available in your country.'
                }
            } else if (this.weeks.selected == '11-12') {
                this.finish = true;
                return {
                    class: 'alert-warning',
                    message: 'Is risky to have an abortion with pills at this time. Please contact as soon as possible one of our human counselors to review if you still can consider this option.'
                }
            } else if (this.weeks.selected == '>12') {
                this.finish = true;
                return {
                    class: 'alert-danger',
                    message: 'It is not recommendable for you to have an abortion with pills. At this time is dangerous for your health. You can explore other options. If you need advice with this, please contact one of our human counselors to review your case.'
                }
            } else {
                this.finish = false;
                return {
                    class: 'hidden',
                    message: ''
                }
            }
        },
        relatedResult: function () {
            if (this.related.selected != '') {
                this.finish = true;
                return 'Before ordering the pills, it will be recommended that she speak with one of our human counselors. She must have the last word. Please contact with them as soon as possible.';
            } else {
                this.finish = false;
                return '';
            }
        },
        moreinfoResult: function () {
            if (this.moreInfo.selected == 'safe') {
                this.finish = true;
                return {
                    class: 'alert-info',
                    message: 'Abortion pills are safe if you are in general good health, no more than 10 weeks pregnant and not allergic to the medicines.'
                }
            } else if (this.moreInfo.selected == 'legal') {
                this.finish = true;
                return {
                    class: 'alert-info',
                    message: ' Each country has different legislation about abortion and abortion methods. You must know anyway, that a safe abortion is a right for all women recognized by WHO. We\'ll do as soon as we can to help you, no matter where you are.'
                }
            } else {
                return {
                    class: 'hidden',
                    message: ''
                }
            }
        },
    },
    methods: {
        validateForm: function (event) {
            event.preventDefault();
            this.attemptSubmit = true;
            if (!this.missingGenre && !this.missingAge && !this.missingAbout) {
                this.basicInfoValid = true;
            }
        },
        resetPurchase: function (event) {
            this.weeks.selected = '';
            this.for_me = true;
        }

    }
});