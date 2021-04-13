import React from 'react'
import { Input, Menu } from 'semantic-ui-react'
import {useState} from 'react'

function login() {

    const state = { activeItem: 'home' }

    const handleItemClick = (e, { name }) => setactiveItem({ activeItem: name })
  
    const [activeItem, setactiveItem] = useState()
  
      return (
        <Menu secondary>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      )
    
}

export default login
