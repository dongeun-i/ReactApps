import { AnyAction } from "redux";

import { LOGIN } from "../action";

export type userState = {
    token?: string;
    id: number | null;
    userId: string;
    nickname: string;
    name: string;
    login_fail_reason?: string;
};

const initialState: userState = {
    token: "",
    id: null,
    userId: "",
    nickname: "",
    name: "",
    login_fail_reason: "",
};

export const user = (
    state: userState = initialState,
    { type, payload }: AnyAction
) => {
    switch (type) {
        case LOGIN + "_LOADING":
            return {
                ...state,
                login_fail_reason: "",
            };
        case LOGIN + "_ERROR":
            return {
                ...state,
                login_fail_reason: payload.msg,
            };
    }
};
