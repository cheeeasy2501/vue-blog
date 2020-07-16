import { TOKEN as tokenUrl } from "../../server/config/api/auth.config";
import authModule from "@/store/modules/auth.module";
import http from "@/services/http.service";

class routerGuards {
  async checkToken(token) {
    if (!token) {
      return false;
    }

    if (token && authModule.state.auth === false) {
      const validate = await this.validateToken(token);
      return validate;
    }

    return true;
  }

  async validateToken(token) {
    const options = {
      method: "POST",
      headers: {
        "x-access-token": token,
      },
    };
    const tokenValidation = await http.request(tokenUrl, options);

    if (tokenValidation.status !== 200) {
      localStorage.removeItem("jwt");
      return false;
    }

    const data = await tokenValidation.json();
    authModule.state.auth = data.auth;

    return true;
  }

  isAuthorized() {
    return authModule.state.auth;
  }
}

export default new routerGuards();
