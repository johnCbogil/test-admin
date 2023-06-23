
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from './dataProvider';
import { UserList } from './users';
import { authProvider } from './authProvider';

export const App = () => (
  
    <Admin authProvider={authProvider} dataProvider={dataProvider}>
     <Resource name="users" list={UserList} />
     {/* <Resource name="albums" list={ListGuesser} /> */}
    </Admin>
  );
