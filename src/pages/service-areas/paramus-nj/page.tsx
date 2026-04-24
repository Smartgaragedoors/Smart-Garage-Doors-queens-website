import CityServiceAreaPage from '../../../components/location/CityServiceAreaPage';
import { getLocationBySlug } from '../../../config/locations';
import NotFound from '../../NotFound';

export default function ParamusNJPage() {
  const location = getLocationBySlug('paramus-nj');
  
  if (!location) {
    return <NotFound />;
  }

  return <CityServiceAreaPage location={location} />;
}
