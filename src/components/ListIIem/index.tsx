import React, {FC} from 'react';
import {StyledListItem, Folder} from './styled'
import {Movie} from '../../core/types'

const ListItem: FC <Movie> = (props) =>{
    const {poster} = props;
    const url_path:string  = 'https://image.tmdb.org/t/p/w220_and_h330_face/';
    console.log('list item: ', poster);

    return <StyledListItem><Folder src={url_path + poster}/></StyledListItem>

}

export default ListItem