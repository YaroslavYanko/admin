import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';

import { Admin, DataProvider, Loading, Resource } from 'react-admin';
import { authProvider } from '@app/core/auth-provider';

import { theme } from './core/themes';
import { i18nProvider } from './core/i18n';
import { Layout } from './common/components/layout/layout.component';

import { buildDataProvider } from './core/data-provider';
import { goodsResource } from './modules/goods/goods.resource';
import { categoryResource } from './modules/goods/category.resource';
import { ordersResource } from './modules/goods/orders.resource';
import { Dashboadr } from './modules/dashboard/dashboard.components';
import { customerResource } from './modules/customers/customers.resource';
import OneSignalReact from 'react-onesignal';




function App() {


  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null)

  useEffect(() => {
    const getDataProvider = async () => {
      const dataP = await buildDataProvider()

      setDataProvider(dataP)
    }
    getDataProvider()
  }, [])

  useEffect(() => {
    OneSignalReact.init({
      appId: "cbaf804b-15cb-4449-8fed-b85012e9780f",
    });
  }, [])

  if (!dataProvider) {
    return <Loading />
  }

  return (
    <>
      <CssBaseline />
      <Admin
        dataProvider={dataProvider}
        authProvider={authProvider}
        theme={theme}
        i18nProvider={i18nProvider}
        requireAuth
        layout={Layout}
        dashboard={Dashboadr}
      >

        <Resource {...goodsResource} />
        <Resource {...categoryResource} />
        <Resource  {...ordersResource} />
        <Resource  {...customerResource} />


        <Resource name='order_status' />
        <Resource name='orders_products' />
        <Resource name='last_week_orders' />


      </Admin>
    </>
  );
}

export default App;
