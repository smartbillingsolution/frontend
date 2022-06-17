import * as React from 'react';
import * as S from './style'
interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FunctionComponent<HomeLayoutProps> = (props) => {
    const { children } = props
    return (
        <S.HomeContainer>
            {children}
        </S.HomeContainer>
    );
}

export default HomeLayout;