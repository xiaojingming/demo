import { createApp } from 'vue';
import {
  Button, Cell, Icon, Tab, Tabs, Dialog,
  Form, Field, CellGroup, Empty, Tag, Tabbar,
  TabbarItem
} from 'vant';
import sdk from 'qcloud-iotexplorer-h5-panel-sdk';
import router from './router/router';
import App from './App.vue';
import { StandardDeviceAdapter4H5 as StandardDeviceAdapter } from 'qcloud-iotexplorer-bluetooth-adapter-llsync';
import 'vant/lib/index.css';
import './style/reset.css';

StandardDeviceAdapter.injectOptions({ appDevSdk: sdk.appDevSdk });
sdk.blueToothAdapter.addAdapter(StandardDeviceAdapter, true);

const app = createApp(App);
[router, Button, Cell, Icon, Tab, Tabs, Dialog, Form,
Field, CellGroup, Empty, Tag, Tabbar, TabbarItem]
  .forEach(plugin => app.use(plugin));
app.mount("#app");
