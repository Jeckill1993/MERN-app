import axios from 'axios';

export const authAPI = {
    register: (formData) => {
        return axios.post('/api/auth/register', {fullName: formData.fullName, email: formData.email, password: formData.password}).then(
            response => {return response}
        )
    },
    signIn: (formData) => {
        return axios.post('/api/auth/login', {email: formData.email, password: formData.password}).then(
            response => {return response}
        )
    }
}
