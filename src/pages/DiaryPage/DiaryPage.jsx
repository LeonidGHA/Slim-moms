import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import DiaryProductsList from 'components/DiaryProductsList/DiaryProductsList';
import Calendar from 'components/Calendar/Calendar';
import { useDispatch } from 'react-redux';
import { productSearch } from 'shared/api/product-api';
import { productOperation } from 'redux/product/product-operations';

const DiaryPage = () => {
  const dispatch = useDispatch();
  const onSubmit = ({ productName, grams }) => {
    // dispatch(productOperation('мясо'));
  };
  productSearch('мясо');
  return (
    <div className="container">
      <Calendar />
      <DiaryAddProductForm onSubmit={onSubmit} />
      <DiaryProductsList />
    </div>
  );
};

export default DiaryPage;
