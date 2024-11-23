import api from './mainapi';

export const UserRegister = async (data) => {
    try {
        const res = await api.post("/signUp", {
            email: data.email,
            password: data.password,
            userRole: data.role,
        });
        return res;
    } catch (error) {
        alert(error);
    }
}

export const UserLogin = async (data) => {
    try {
        const resp = await api.post('/login', {
            email: data.email,
            password: data.password
        });
        return resp;

    } catch (error) {
        alert(error);
    }
}
export const getAllUser = async (data) => {
    try {
        const response = await api.get('/user',
            {
                email: data.email,
                password: data.password
            });
        return response;
    } catch (error) {
        alert(error)
    }
}
