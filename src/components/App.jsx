import React, {useState, useEffect, useCallback} from 'react';
import Form from './Form';
import Filter from './Filter';
import ContactsList from './ContactsList';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { nanoid } from 'nanoid'
import styled from 'styled-components'

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setContacts(getDataFromStorage())
    console.log('test')
  }, [])
  
  useEffect(() => {
    updateStorage(contacts)
  }, [contacts])
  // state = {
  //    contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', tel: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', tel: '443-89-12' },   
  //     { id: 'id-3', name: 'Eden Clements', tel: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', tel: '227-91-26' },
  //   ],
  //   filter: '',
  // }
  
  //  const formSubmitHandler = (data) => {
  //   this.state.contacts.push(data);
  // }

  const showValidationMessage = (message) => {
      Notify.warning(message);
  }

   const addNewContact = useCallback((newContact) => {
    const isExist = Object.keys(newContact).find(key => {
      const subString = newContact[key].toLocaleUpperCase();
      const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
      if (contact) return !showValidationMessage(`${contact[key]} is already in contacts`);
      else return false
    })

    if (isExist) return true;

     newContact.id = nanoid(10)
     setContacts(prevContacts => [...prevContacts, newContact])
     updateStorage(contacts);
   }, [])
  
    const getFiltredList = () => {
    if (filter) {
      const subString = filter.toLocaleUpperCase();
      const key = isNaN(+filter.charAt(0)) ? 'name' : 'number';
      return contacts.filter(el => el[key].toLocaleUpperCase().includes(subString));
    } else {
      return contacts;
    }
  }

 const onFilterChange = (event ) => {
    const { name, value } = event.currentTarget;
    setFilter(value);
  }

  const removeItem = useCallback((id) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    updateStorage(contacts);
  }, [])
//   componentDidMount() {
//     this.setState({contacts:this.getDataFromStorage()})
// }
//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
//     }
//   }


   const updateStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }

  const getDataFromStorage = () => {
    return JSON.parse(localStorage.getItem('contacts') || '[]')
  }

    const renderList = getFiltredList();
        return (
          <Container>
            <Form addNewContact={addNewContact} onNotValid={ showValidationMessage} />
            <Filter  filter ={filter} onFilterChange={ onFilterChange} />
            <ContactsList renderList={renderList} removeItem={ removeItem} />
      </Container>
    );
};


const Container = styled.div`
          height: 100vh;
          color: #010101;
          text-align:center;
`

export default App;