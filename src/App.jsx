import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import useScrollTop from "./hooks/useScrollTop";

const App = memo(() => {
  // 切换路由的时候，自动滚动到顶部
  useScrollTop();

  return (
    <div className="app">
      <AppHeader></AppHeader>
      {/* Suspense放在这，避免打印两次的问题 */}
      <Suspense fallback="loading....">
        <div className="page">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter></AppFooter>
    </div>
  );
});

export default App;
