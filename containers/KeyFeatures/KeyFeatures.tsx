import {KeyFeaturesProps} from './KeyFeatures.props';
import {getFeatures} from '@/api/getFeatures';
import KeyFeaturesList from '../KeyFeaturesList/KeyFeaturesList';

export default async function KeyFeatures({}: KeyFeaturesProps) {
  const {data} = await getFeatures();

  return <KeyFeaturesList data={data} />;
}
