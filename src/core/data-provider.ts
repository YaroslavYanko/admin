import buildHasuraProvider from 'ra-data-hasura'
import { DataProvider } from 'react-admin';
import { apolloClient } from '@app/core/apollo-client';

export const buildDataProvider = async()=>{
    const dataProviderHasura = await buildHasuraProvider({
        client: apolloClient,
      })

      const dataP: DataProvider = {
        getList: (resource, params) =>
          dataProviderHasura.getList(resource, params),
        getOne: (resource, params) => 
        dataProviderHasura.getOne(resource, params),
        getMany: (resource, params) =>
          dataProviderHasura.getMany(resource, params),
        getManyReference: (resource, params) =>
          dataProviderHasura.getManyReference(resource, params),
        update: (resource, params) => {
          delete params.previousData.client_adress
          return dataProviderHasura.update(resource, params)
        },
        updateMany: (resource, params) =>
          dataProviderHasura.updateMany(resource, params),
        create: (resource, params) =>
          dataProviderHasura.create(resource, params),
        delete: (resource, params) =>
          dataProviderHasura.delete(resource, params),
        deleteMany: (resource, params) =>
          dataProviderHasura.deleteMany(resource, params),
      };

      return dataP
}