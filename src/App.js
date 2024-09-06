
import './App.css';
import ArrayOfNumbers from './FilterTask/ArrayOfNumbers';
import BooleanFilter from './FilterTask/BooleanFilter';
import CategoryFilter from './FilterTask/CategoryFilter';
import CheckBoxFilter from './FilterTask/CheckBoxFilter';
import DateRangeFilter from './FilterTask/DateRangeFilter';
import FilterByRange from './FilterTask/FilterByRange';
import FilterMultipleCriteria from './FilterTask/FilterMultipleCriteria';
import FilterTxtInput from './FilterTask/FilterTxtInput';
import SearchFilter from './FilterTask/SearchFilter';
import SortAndFilter from './FilterTask/SortAndFilter';
import ButtonTxt from './TurneryTask/ButtonTxt';
import CartStatus from './TurneryTask/CartStatus';
import DarkModeToggle from './TurneryTask/DarkModeToggle';
import FormSubmission from './TurneryTask/FormSubmission';
import Greeting from './TurneryTask/Greeting ';
import LoadingSpinner from './TurneryTask/LoadingSpinner';
import LoginStatus from './TurneryTask/LoginStatus';
import ModelShow from './TurneryTask/ModelShow';
import NotificationBadge from './TurneryTask/NotificationBadge';
import PriceDisplay from './TurneryTask/PriceDisplay';
import ProductStock from './TurneryTask/ProductStock';
import ProfileImg from './TurneryTask/ProfileImg';
import ReadMoreAndLess from './TurneryTask/ReadMoreAndLess';
import ResponsiveNavbar from './TurneryTask/ResponsiveNavbar';
import { SaleTimer } from './TurneryTask/SaleTimer';
import CheckboxRequired from './ValidationTask/CheckboxRequired';
import ConfirmPass from './ValidationTask/ConfirmPass';
import CreditCardNumber from './ValidationTask/CreditCardNumber';
import EmailFormat from './ValidationTask/EmailFormat';
import MinimunAge from './ValidationTask/MinimunAge';
import NumberInput from './ValidationTask/NumberInput';
import PasswordLength from './ValidationTask/PasswordLength';
import RequiredField from './ValidationTask/RequiredField';
import ShowHidePass from './ValidationTask/ShowHidePass';
import SignUp from './ValidationTask/SignUp';
import ToggleBtnColor from './ValidationTask/ToggleBtnColor';
import UsernameAvailibility from './ValidationTask/UsernameAvailibility';
import UserRole from './ValidationTask/UserRole';
import Weather from './ValidationTask/Weather';
import ZipCodeFormat from './ValidationTask/ZipCodeFormat';

function App() {
  return (
    <div className="App">
       {/* <ProductStock quantity={0}/> */}
    <DateRangeFilter/>
    </div>  
  );
}

export default App;
