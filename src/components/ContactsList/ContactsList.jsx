import PropTypes from 'prop-types';
import { memo } from 'react';
import {Container } from '../Form/Form.styled'
import {StyledItem, StyledName, StyledNumber,StyledBtn} from './Contacts.styled'

const ContactsList = ({renderList, removeItem}) => {
    return (
            <Container>
        <ul>
             {renderList.map((el) => (
                 <StyledItem key={el.id}>
                     <StyledName>{el.name}</StyledName>:    
                     <StyledNumber>{el.tel}</StyledNumber>
                     <StyledBtn onClick={()=> removeItem(el.id)}>Delete contact</StyledBtn>
                     </StyledItem>))}
                </ul>
            </Container>
    )
}

ContactsList.propType = {
    renderList: PropTypes.array.isRequired, 
    removeItem: PropTypes.func.isRequired
}


export default memo(ContactsList);