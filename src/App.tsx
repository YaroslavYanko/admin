import { CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import buildHasuraProvider from 'ra-data-hasura'
import { Admin, DataProvider, Loading, Resource } from 'react-admin';
import { GoodList } from '@app/modules/menu/components/goods-list/goods-list.component';
import { GoodEdit } from '@app/modules/menu/components/goods-edit/goods-edit.component';
import { GoodsCreate } from '@app/modules/menu/components/goods-create/goods-create.component';
import { authProvider } from '@app/core/auth-provider';
import { apolloClient } from './core/apollo-client';
import { theme } from './core/themes';
import { i18nProvider } from './core/i18n';



function App() {
  const [dataProvider, setDataProvider] = useState<DataProvider<string> | null>(null)

  useEffect(() => {
    const buildDataProvider = async () => {
      const dataP = await buildHasuraProvider({
        client: apolloClient,
      })
      setDataProvider(dataP)
    }
    buildDataProvider()
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
        >

        <Resource 
        name="goods" 
        list={GoodList} 
        edit={GoodEdit} 
        create={GoodsCreate} 
        options={{label:'Товари'}}
        />
      </Admin>
    </>
  );
}

export default App;
