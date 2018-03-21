
const axios = require('axios')

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImVmYzk3YWZhMmRiY2QyYmMzMDdjYmU4NDY2NzE1MWNhNWExNzcxZmQwMjI5ODkwM2Q2ZjIzY2ViY2M2ZjY2ZmFiMDZjYWZkZDFlMmNkZTI5In0.eyJhdWQiOiI2IiwianRpIjoiZWZjOTdhZmEyZGJjZDJiYzMwN2NiZTg0NjY3MTUxY2E1YTE3NzFmZDAyMjk4OTAzZDZmMjNjZWJjYzZmNjZmYWIwNmNhZmRkMWUyY2RlMjkiLCJpYXQiOjE1MjE1MzY3MTcsIm5iZiI6MTUyMTUzNjcxNywiZXhwIjoxNTUzMDcyNzE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.Zhvv1OwoE_xMLONDiWzcjVAAp-GRBjiEpEpDdvFC9danED_kHg_u3KWB6RuniRqAqM0YxFKCyjbepKEOB1tZV_h_UGw3wV_SVd_sh5NCiZPZjV7ctGODgCom59Bd6TXvCfOEFOIMrXDa5kaiUtJAI6yfjZxfoV9N0KhD8NrSCYYZ6wqgmDai2b0V2pXQD2IJPygDWW2W1EZU8Hmr_4XSJqE4fG3yURe1RnCwGTNyiQhWi0T3DD3qt1QWMG6yWtk8ZHwiaUVXLFX3D3gnTg9QPUDCwp8rh3TlYec0gu9NH_Nw0D1wAUQ22k-T6T3OQKdNz6fi0FKz-GtDybyvb2fWax1tuHPLJ_jlbeAJMkSZ4qY2qjeIgZJoGw4n4_EI8adS5z2YBdRoNWzyTnBvU5vaUySgrJWrMTVaEyBtHmoAXdZxNRYmo1vocqrvVWT1V7jTjPhz43Iki5d2JBFyM5TDVWpV73W5i1raIr8o8nDhbIgQnyMDNR4H-zXvq15ODtVgp0BErzlgnvBiaczsCO_ytqSmnTEgkdKGdy5ZYasBnhg1W2H-sicYKvEoclPPse3PEKMOGeZaaH0opiDd8ZsSiFXkPDFilu7c75T19LWe8PpnUzHc9IvzJv-J2cK5Pc-tMsrWRUfm2xVE9xJkdvix2sVoiQ4Dzuf7e3jzXZJ3G3o";

axios.defaults.headers.common['Authorization']  = `Bearer ${token}`;

module.exports = {
    fetchProfileRepos: () => {
        
        const http = "http://localhost:8000/api/employee/profile";

        return axios.get(http).then((response) => {
            return response.data.data;
        });
    },
    fetchCreateRequest: () => {

        const http = "http://localhost:8000/api/request/create";

        return axios.get(http).then((response) => {
            return response.data.data;
        });

    },
    saveRequest: (data) => {
        
        const http = "http://localhost:8000/api/request/store";

        return axios.post(http,data).then((response) => {
            return response;
        });
    }
}