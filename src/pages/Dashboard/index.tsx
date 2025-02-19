import * as React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { IUser, getUser } from '../../reducers/user';
import { selectFullName } from '../../selectors/auth';
import Layout from '../../containers/Layout';
import { IAuthState, getAuth } from '../../reducers/auth';

import * as envs from '../../env';

console.log(envs);

export default () => {
  const tree = useSelector(state => state);
  const user: IUser = useSelector(getUser, shallowEqual);
  const auth: IAuthState = useSelector(getAuth, shallowEqual);
  const fullName = useSelector(selectFullName, shallowEqual);

  let message = 'You not authorized';
  if (auth.authorized) {
    message = `${user.name} ${user.lastname}`;
  }
  return (
    <Layout>
      <h1>Dashboard </h1>
      <p>{message}</p>
      <p>"{fullName}" from reselect</p>
      <pre>APP TREE: {JSON.stringify(tree, null, '\t')}</pre>
    </Layout>
  );
};
