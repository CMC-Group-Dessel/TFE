import React, { FunctionComponent, ReactNode } from 'react'

export interface FlexRowProps {
    classes?: string,
    children: ReactNode;
}


const FlexRow: FunctionComponent<FlexRowProps> = ({children, classes}) => {
    return (
        <div className={`${classes} flex flex-row`}>
        {children}
        </div>
    )
}

export default FlexRow;