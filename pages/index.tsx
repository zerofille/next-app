import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Link from 'next/link'

const Home: NextPage = ({beers}: any) => {
  console.log(beers)
  return (

    <main className={styles.mainWrap}>
      {beers.map((e: any) => {
        return (<div className={styles.beerWrap} key={e.id}>
          <h3>{e.name}</h3>
          <Image  width={'90px'} height={'170px'} src={e.image_url}/>
          <p>{e.tagline}</p>
        </div>)
      })}
    </main>
  )
}

export default Home

export const getStaticProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers');
  const beers = await res.json();

  return {
    props: {
      beers,
    },
  };
};
