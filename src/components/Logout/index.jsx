import React from 'react';
import { observer, inject } from 'mobx-react';

const Logout = ({ store, router }) => (
  <div>
    <button onClick={() => {
    store.logout();
    router.push('/login');
    }}>
    confirm logout
  </button>
  </div>
);

export { Logout }
export default inject('store', 'router')(observer(Logout))
