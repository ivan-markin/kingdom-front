import {getHouses} from '@/api/getHouses';
import {getPage} from '@/api/getPage';
import {iHouse} from '@/interfaces/House.interface';
import {Metadata} from 'next';
import {notFound} from 'next/navigation';
import style from './page.module.scss';
import PageHero from '@/containers/page/PageHero/PageHero';
import HouseDescription from '@/containers/page/HouseDescription/HouseDescription';
import PageSlider from '@/containers/page/PageSlider/PageSlider';
import LayoutSection from '@/containers/LayoutSection/LayoutSection';
import Complectation from '@/containers/Complectation/Complectation';
import ExhibitionArea from '@/containers/ExhibitionArea/ExhibitionArea';
import Form from '@/components/Form/Form';
import Faq from '@/components/FAQ/FAQ';
import Footer from '@/containers/Footer/Footer';
import ActionPanel from '@/components/ActionPanel/ActionPanel';

const metadata: Metadata = {
  title: 'Дом',
};

export async function generateStaticParams() {
  const houses = await getHouses();
  return houses.data.map((house: iHouse) => ({
    alias: house.attributes.alias,
  }));
}

export default async function HousePage({params}: {params: {alias: string}}) {
  const data = await getPage(params.alias);

  if (!data) {
    notFound();
  }

  const {data: house} = data;

  return (
    <div className={style.page}>
      <PageHero data={house} />
      <HouseDescription data={house} />
      <span id='pageGallery'>
        <PageSlider data={house} />
      </span>
      <span id='layouts'>
        <LayoutSection data={house} />
      </span>
      <span id='complectation'>
        <Complectation data={house} />
      </span>
      <ExhibitionArea />
      <Form id='form' />
      <Faq />
      <Footer />

      {/* <ActionPanel /> */}
    </div>
  );
}
