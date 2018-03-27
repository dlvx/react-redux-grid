import React from 'react';
import {
  Link
} from 'react-router-dom'
import { Card, Image} from 'semantic-ui-react'


function cardComponent(props){
    return (
        <Card>
            <Image src={`https://loremflickr.com/g/320/240/mxr,pedal/all?random=${props.index}`} />
            <Card.Content>
                <Card.Header>Jose</Card.Header>
                <Card.Meta>Joined in 2016</Card.Meta>
                <Card.Description>Jose is a comedian living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Link to={`/grid/${props.item.id}`} className="grid-item-link">More</Link>
            </Card.Content>
        </Card>
    )
}

export default cardComponent