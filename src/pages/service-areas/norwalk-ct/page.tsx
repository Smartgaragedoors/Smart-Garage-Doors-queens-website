import CityServiceAreaPage from '../../../components/location/CityServiceAreaPage';
import { getLocationBySlug } from '../../../config/locations';

export default function NorwalkCTPage() {
  const location = getLocationBySlug('norwalk-ct');
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return <CityServiceAreaPage location={location} />;
}
