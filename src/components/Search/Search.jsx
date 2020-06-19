import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap'
import styled from 'styled-components'
const SerachContainer = styled.div`
    width: 500px;
    margin: auto;
    margin-bottom: 2rem;
    @media only screen and (max-width: 576px) {
        width: 92%;
    }
`
const Search = ({ onChange }) => (
    <SerachContainer>
        <InputGroup>
            <InputGroupAddon addonType='prepend'>
                <InputGroupText>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroupText>
            </InputGroupAddon>
            <Input
                type='search'
                placeholder='Filter by author...'
                onChange={(e) => onChange(e.target.value)}
            />
        </InputGroup>
    </SerachContainer>
)

export default Search
