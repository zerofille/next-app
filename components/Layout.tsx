import React, { useState } from 'react';
import styles from '../styles/Layout.module.sass'
import Link from 'next/link'
import { useRouter } from 'next/router'


function Layout({children}: any) {
  const [value, setValue] = useState('')
  const submitHandler = async (e: any) => {
    e.preventDefault()
    const res = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${value}`)
    const data = res.json()
    console.log(data)
  }
  return (
    <>
      <div className={styles.mainWrap}>
        <ul className={styles.ulWrap}>
          <Link href={'/beer/pizza'}>
            <li className={styles.elem}> best with pizza</li>
          </Link>
          <Link href={'/beer/steak'}>
            <li className={styles.elem}>best with steak</li>
          </Link>
          <Link href={'/'}>
            <li className={styles.elem}>all</li>
          </Link>
        </ul>

        <form onSubmit={(e) => submitHandler(e)}>
          <input onChange={(e) => setValue(e.target.value)} value={value} id="search" placeholder={'search'}/>
          <button>search</button>
        </form>
      </div>
      <main>{children}</main>
    </>
  );
}

export default Layout;


