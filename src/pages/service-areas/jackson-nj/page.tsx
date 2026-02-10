import CityServiceAreaPage from '../../../components/location/CityServiceAreaPage';
import { getLocationBySlug } from '../../../config/locations';

export default function JacksonNJPage() {
  const location = getLocationBySlug('jackson-nj');
  
  if (!location) {
    return <div>Location not found</div>;
  }

  return <CityServiceAreaPage location={location} />;
}
