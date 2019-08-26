import React from 'react'
import Button from 'react-bootstrap/Button'
//Componente botão

export default props => {
    if(props.hide) {
        return null
    } else {
        return (
            <Button className='btn'
                variant={props.bstyle}
                onClick={props.onClick}>
                    <i className={'fa fa-' + props.icon}></i>
            </Button>
        )
    }
}