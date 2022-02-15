import React from 'react';
import styles from '../styles/Layout.module.sass'
function Layout({children}:any) {
  return (
    <>
    <div className={styles.mainWrap}>
      <ul className={styles.ulWrap}>
        <li className={styles.elem}>pizza</li>
        <li className={styles.elem}>burger</li>
        <li className={styles.elem}>all</li>
      </ul>
      <div>
        <input placeholder={'search'}/>
        <button>search</button>
      </div>
    </div>
      <main>{children}</main>
      </>
  );
}

export default Layout;
