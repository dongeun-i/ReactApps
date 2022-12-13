import { FetchApiPost, FetchApiGet } from "../network";
import actions from "./creator";

export const LOGIN = "LOGIN";
export const Login = actions(LOGIN, async (userId: string, pw: string) => {
    return await FetchApiPost("", { userId, pw });
});
