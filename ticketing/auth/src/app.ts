import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { NotFoundError } from "./errors/not-found-error";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // tắt mã hoá tren cookie
    secure: true, // cookie sẽ chỉ được sử dụng nếu người dùng đang truy cập ứng dụng của chúng tôi qua kết nối HTTPS
  })
);

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all("*", async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
