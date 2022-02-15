import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Beers from '../components/Beers'

const Home: NextPage = ({beers}: any) => {
  console.log(beers)
  return (
    <Beers beers={beers}/>

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
