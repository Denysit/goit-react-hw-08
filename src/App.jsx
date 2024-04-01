import './App.css'
import ContactList from './components/ContactList/ContactList'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from './redux/contactsOps'
import { selectError, selectLoader } from './redux/contactsSlice'

function App() {

  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);
  
  return (
    <div className='container'>
      <h1 className='title'>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error Mesage: {error} </p>}
      <ContactList />
    </div>
  );
}

export default App
