import CityServiceAreaPage from '../../../components/location/CityServiceAreaPage';
import { getLocationBySlug } from '../../../config/locations';
import NotFound from '../../NotFound';

export default function EdisonNJPage() {
  const location = getLocationBySlug('edison-nj');
  
  if (!location) {
    return <NotFound />;
  }

  return <CityServiceAreaPage location={location} />;
}
