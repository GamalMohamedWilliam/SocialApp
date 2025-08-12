import axios from "axios";


export async function LoginFn(dataForm) {
  const { data } = await axios.post('https://linked-posts.routmisr.com/users/signin', dataForm);
  return data;
}
