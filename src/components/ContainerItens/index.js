import React from 'react';
import {ContainerItens as Container} from './styles';

function ContainerItens({children, isMinHeight}){

    return <Container isMinHeight={isMinHeight}>{children}</Container>
}

export default ContainerItens