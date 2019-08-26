import React from 'react'
import Button from 'react-bootstrap/Button'
import If from './If'
//Componente botão

export default props => (
    <If test={!props.hide}>
            <Button className='btn'
                variant={props.bstyle}
                onClick={props.onClick}>
                    <i className={'fa fa-' + props.icon}></i>
            </Button>
    </If>
        )