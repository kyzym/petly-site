import axios from 'axios';
import { BASE_URL } from 'utils/constants';

export async function deleteNoticeById(noticeId) {
  const url = `${BASE_URL}/notices/delete/${noticeId}`;

  const { data } = await axios.delete(url);
  return data;
}
