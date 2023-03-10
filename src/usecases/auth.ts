import { LoginReq, Token } from "@/domains/auth/dto";
import { Auth, AuthAPI } from "@/usecases/ports/auth";

export const login = async (
  deps: {
    api: AuthAPI;
    auth: Auth;
  },
  loginReq: LoginReq,
): Promise<Token> => {
  const token = await deps.api.accessToken(loginReq);
  deps.auth.saveTokenToCache(token);
  return token;
};
