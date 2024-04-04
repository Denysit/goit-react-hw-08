import ContactList from '../components/ContactList/ContactList'
import ContactForm from '../components/ContactForm/ContactForm'
import SearchBox from '../components/SearchBox/SearchBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contacts/operations'
import { selectError, selectLoader } from '../redux/contacts/selectors'
import PageTitle from "../components/PageTitle"


export default function Contacts() {
    

  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);

    return (
      <div className='container'>
        <PageTitle>Contacts</PageTitle>
      <h1 className='title'>Phonebook</h1>
      <ContactForm/>
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error Mesage: {error} </p>}
      <ContactList />
    </div>
    )
}