import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import styles from './app.module.css';
import { Button, Layout } from 'antd';
import { HeartFilled } from '@ant-design/icons';
import Home from './home/home';
import AddUser from './add-user/add-user';
import ListUsers from './list-users/list-users';


const { Header, Content, Footer } = Layout;

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header className={styles.appHeader}>
          <Link id='logo' to='/'>POLO</Link>
        </Header>
        <Content className={styles.appContent}>
          <Switch>
            <Route path='/' component={Home} exact></Route>
            <Route path='/add-user' component={AddUser} exact></Route>
            <Route path='/list-users' component={ListUsers} exact></Route>
          </Switch>
        </Content>
        <Footer className={styles.appFooter}>Made with <HeartFilled /> by <a href='https://github.com/subhashwalunj'>Subhash Walunj</a></Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
