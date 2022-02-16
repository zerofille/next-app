import Beers from '../../components/Beers';
import React from 'react';

export default function Pizza({forPizza}: any) {
  return <Beers beers={forPizza}/>
}


export const getStaticProps = async () => {
  const res = await fetch('https://api.punkapi.com/v2/beers?food=pizza');
  const forPizza = await res.json();

  return {
    props: {
      forPizza,
    },
  };
};
