import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from 'utils/constants';

export async function fetchFriends() {
  const url = `${BASE_URL}/servicessidebar`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log(error.data);
    toast.error(error.response.data.message);
  }
}
