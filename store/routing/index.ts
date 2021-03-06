import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

let browserHistory;
if (process.env.BROWSER) {
    const createBrowserHistory = require("history/createBrowserHistory").default;
    browserHistory = createBrowserHistory();
} else {
    const createMemoryHistory = require("history/createMemoryHistory").default;
    browserHistory = createMemoryHistory();
}

export const routingStore = new RouterStore();

export const history = syncHistoryWithStore(browserHistory, routingStore);

export default routingStore;
