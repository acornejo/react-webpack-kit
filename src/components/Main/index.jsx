import React from 'react';
import { observer, inject } from 'mobx-react';

const Main = ({ store, router }) => (
  <div>
    Hello {store.user}!
    <div>
      <button onClick={() => router.push('/logout')}>Logout?</button>
    </div>
  </div>
);

export { Main }
export default inject('store', 'router')(observer(Main))
