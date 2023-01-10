import Detail from "../pages/detail";
import Favorite from "../pages/favorite";
import Home from "../pages/home";
import Play from "../pages/play";
import Search from "../pages/search";
import Watchlist from "../pages/watchlist";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/play", component: Play },
  { path: "/search", component: Search },
  { path: "/detail", component: Detail },
  { path: "/favorite", component: Favorite, layout: null },
  { path: "/watchlist", component: Watchlist },
];
export { publicRoutes };
