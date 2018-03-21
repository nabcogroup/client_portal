
const axios = window.axios || require('axios');
export default class Employee {

    constructor() {

        this.item = {};
    }

    show() {
        axios.get('http://localhost:8000/api/employee/profile').then((response) => {
            this.item = response.data.data;
        });
    }
}