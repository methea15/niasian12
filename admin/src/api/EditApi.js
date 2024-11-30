import axios from 'axios';

const API_URL = 'http://localhost:8081/tents';

const getTents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;  // Return the list of tents
    } catch (error) {
        console.error('Error fetching tents:', error);
        throw error;
    }
};

const addTent = async (tentData) => {
    try {
        const response = await axios.post(API_URL, tentData);
        return response.data;  // Return the added tent
    } catch (error) {
        console.error('Error adding tent:', error);
        throw error;
    }
};

const updateTent = async (id, tentData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, tentData);
        return response.data;  // Return the updated tent
    } catch (error) {
        console.error('Error updating tent:', error);
        throw error;
    }
};

const deleteTent = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting tent:', error);
        throw error;
    }
};

const TentService = { getTents, addTent, updateTent, deleteTent };
export default TentService;