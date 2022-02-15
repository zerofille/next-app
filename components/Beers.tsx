import React from 'react';
import styles from '../styles/Home.module.sass';
import Image from 'next/image';
import Link from 'next/link'

function Beers({beers}: any) {
  console.log(beers)
  return (
    <main className={styles.mainWrap}>
      {beers.map((e: any) => {
        return (
          <Link key={e.id} href={`/beers/${e.id}`}>
            <div className={styles.beerWrap}>
              <h3>{e.name}</h3>
              <Image width={'90px'} height={'170px'} src={e.image_url}/>
              <p>{e.tagline}</p>
            </div>
          </Link>)
      })}
    </main>
  );
}

export default Beers;


