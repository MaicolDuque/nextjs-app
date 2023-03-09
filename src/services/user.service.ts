import { END_POINTS } from "./api";
import { postReq } from "./axios";

export async function authUser(userInfo: Record<string, string>): Promise<any> {
  return postReq(END_POINTS.auth.login, userInfo)
}
