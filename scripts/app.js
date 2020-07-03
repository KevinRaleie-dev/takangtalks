var info = new Vue({
    el: '#info',
    data: {
        info: 'Takang Talks',
        more_info: 'with Kay Takang.',
        notification: '🚀 Launching soon. Become the first to know when we launch.',
        description: 'Positively contributing to building and strengthening relationships. Takang Talks is a platform for this purpose.',
    },
    methods: {
        getNotification() {
            console.log("notification")
        }
    }
});

var about = new Vue({
    el: '#about',
    data: {
        about: 'Kay is on a mission to contribute to building and strengthening relationships. With her background in psychology and communication, Kay, former Kovsie alumnae has successfully impacted the lives of many from different backgrounds. She currently works in collaboration with the Free State Department of Education to further her passion. She is highly experienced in strategic leadership, communication and collaboration on multimillion dollar projects that target underprivileged communities.',
    },
});

var form = new Vue({
    el: '#submit-form',
    data: {
        name: '',
        email: '',
    },
    methods: {
        submitForm() {
            this.validateEmail(form.email)
            form.name = ''
            form.email = ''
        },
        validateEmail(email) {
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            error = regex.test(String(email).toLowerCase());
            return error;
        }
    }
})