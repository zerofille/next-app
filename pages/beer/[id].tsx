import Image from 'next/image';
import styles from '../../styles/BeerInfo.module.sass'
export default function BeerInfo({beer}: any) {

  return (
    <div className={styles.mainWrap}>
      <Image src={beer[0].image_url} height={'700px'} width={'200px'}/>
      <div>
      <h3>{beer[0].name}</h3>
      <h4>abv:{beer[0].abv}</h4>
      <p>{beer[0].description}</p>

      <h4>Food pairing</h4>
      <ul>  {beer[0].food_pairing.map((e:any) => {
        return (
          <li key={e}>{e}</li>
        )
      })}
      </ul>
      </div>
    </div>)
}
export const getServerSideProps = async (context: any) => {
  const res = await fetch(`https://api.punkapi.com/v2/beers/${context.params.id}`);
  const beer = await res.json();

  return {
    props: {
      beer,
    },
  };
};
