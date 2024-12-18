// h3:import
import {
  createApp,
  createRouter,
  defineEventHandler,
  getQuery,
  setResponseHeader,
} from "h3";
import { getFortune } from "./omikuzi/omikuzi.js";

// ここでappを作成している
export const app = createApp();

// ここでrouterを作成している
// routerとは、リクエストを受け取り、それに対するレスポンスを返すためのもの
const router = createRouter();
app.use(router);

// ここでGETリクエストを受け取る

router.get(
  "/",
  defineEventHandler((event) => {
    setResponseHeader(event, "Access-Control-Allow-Origin", "*");
    return { message: "これはgetの処理" };
  })
);

router.get(
  "/test",
  defineEventHandler((event) => {
    setResponseHeader(event, "Access-Control-Allow-Origin", "*");
    return { message: "これはgetの処理" };
  })
);

// GET,POST,PUT,DELETE
// GET: リソースの取得
// POST: リソースの作成
// PUT: リソースの更新
// DELETE: リソースの削除
