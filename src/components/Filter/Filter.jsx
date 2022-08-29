import PropTypes from 'prop-types';
import {Container, Header, LabelContainer, UserInput } from '../Form/Form.styled'

const Filter = ({ filter, onFilterChange }) => {
        return (
            <>
                <Container>
                <Header>Contacts</Header>
                <LabelContainer>Find contacts by Name
            
                <UserInput
                    type="text"
                    name="filter"
                    placeholder='Enter name'
                    value={filter}
                    onChange={onFilterChange} />
                </LabelContainer>
                    </Container>
            </>
        )
}

    Filter.propTypes = {
        filter: PropTypes.string.isRequired,
        onFilterChange: PropTypes.func.isRequired,
    }
    
export default Filter;