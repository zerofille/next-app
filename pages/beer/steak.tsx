import Beers from '../../components/Beers';
import React from 'react';

export default function Pizza({forSteak}: any) {
  return <Beers beers={forSteak}/>
}


export const getStaticProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers?food=steak');
  const forSteak = await res.json();

  return {
    props: {
      forSteak,
    },
  };
};
