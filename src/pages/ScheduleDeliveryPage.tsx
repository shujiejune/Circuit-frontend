import OrderSearchBar from '../components/Schedule/OrderSearchBar';
import FilterProducts from '../components/Schedule/FilterProducts';

export default function ScheduleDeliveryPage() {
  return (
    <>
      <h4>You are on the scheduling page</h4>
      <FilterProducts></FilterProducts>
      <OrderSearchBar></OrderSearchBar>
    </>
  );
}
