import ContactList from '../components/ContactList/ContactList'
import ContactForm from '../components/ContactForm/ContactForm'
import SearchBox from '../components/SearchBox/SearchBox'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContacts } from '../redux/contacts/operations'
import { selectError, selectLoader } from '../redux/contacts/selectors'
import { BiSolidContact } from "react-icons/bi";


export default function Contacts() {
    

  const dispatch = useDispatch();
  const loading = useSelector(selectLoader);
  const error = useSelector(selectError);
  
  useEffect(() => {
    dispatch(fetchContacts());

  }, [dispatch]);

   const logoStyle = {
    fontSize: '60px',
    color: '#0734ff',
    marginBottom: '20px',
  };

    return (
      <div className='container'>
        <BiSolidContact style={logoStyle}/>
      <ContactForm/>
      <SearchBox />
      {loading && <p>Loading...</p>}
      {error && <p>Error Mesage: {error} </p>}
      <ContactList />
    </div>
    )
}