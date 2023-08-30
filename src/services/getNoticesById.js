import axios from 'axios';
import { BASE_URL } from 'utils/constants';

export async function fetchNoticeById(noticeId) {
  const url = `${BASE_URL}/notices/noticeId/${noticeId}`;

  const { data } = await axios.get(url);
  return data;
}
