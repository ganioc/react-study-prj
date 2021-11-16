import React from 'react';
import {Menu, Input} from 'semantic-ui-react';

function MenuBar(){
    // let [state, setState] = useState('home');

    return(
        <Menu secondary>
            <Menu.Item
                name='home'
            />

            <Menu.Menu position='right'>
                <Menu.Item>
                    <Input icon='search' placeholder='Search...' />
                </Menu.Item>
                <Menu.Item
                    name='login'>

                </Menu.Item>
            </Menu.Menu>



        </Menu>
    )
}
export default MenuBar;