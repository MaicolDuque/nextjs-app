import axios from "axios";

const options = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  }
}

export async function postReq(url: string, userInfo: Record<string, string>): Promise<any> {
  const { data } = await axios.post(url, userInfo, options)
  return data
}
