import { useDispatch } from 'react-redux';

import Calendar from 'components/Calendar/Calendar';
// import { useDispatch } from 'react-redux';
import { productSearch } from 'shared/api/product-api';
import { productOperation } from 'redux/product/product-operations';

import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Summary from 'components/Summary/Summary';

import {
  dayProductInfoOperation,
  dayProductPostOperation,
} from 'redux/day/day-operations';

const DiaryPage = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const dailyRateId = useSelector(state => state.dailyRate.id);
  const date = startDate.toLocaleDateString('en-CA');

  if (!dailyRateId) {
    return <Navigate to="/calculator" />;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(dayProductInfoOperation({ date }));
  }, [date, dispatch]);

  const onSubmit = data => {
    const dataPost = { date, ...data };
    dispatch(dayProductPostOperation(dataPost));
  };

  return (
    <>
      <div className="container">
        <DatePicker
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        <DiaryAddProductForm onSubmit={onSubmit} />
        <DiaryProductsList date={date} />
      </div>

      <Summary />
    </>
  );
};

export default DiaryPage;
