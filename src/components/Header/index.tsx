import React, { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faUser, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../core/assets/prime-brand.png'
import {
  Nav,
  Menu,
  MenuItem,
  Search,
  SearchInput,
  UserMenu,
  SearchIcon,
} from './styled'

const Header: FC = () => {
  const [searchValue, setSearchValue] = useState('')

  //    const handleSubmit = (e) =>{
  //        e.prevantDefault();
  //        console.log(searchValue);
  //    }

  return (
    <Nav>
      <img src={Logo} alt="amazon-brand" />
      <Menu>
        <Link to="/">
          <MenuItem>Ínicio</MenuItem>
        </Link>
        <Link to="/series"><MenuItem>Séries</MenuItem></Link>
        <Link to="/movies"><MenuItem>Filmes</MenuItem></Link>
        <Link to="/childish"><MenuItem>Infantil</MenuItem></Link>
      </Menu>
      <Search>
        <SearchInput placeholder="Busca" value={searchValue} 
          onChange={(e) => setSearchValue(e.target.value)} />
        <SearchIcon icon={faSearch} />
      </Search>
      <UserMenu>
        <FontAwesomeIcon icon={faUser} />
        <FontAwesomeIcon icon={faCaretDown} />
      </UserMenu>
    </Nav>
  )
}

export default Header
