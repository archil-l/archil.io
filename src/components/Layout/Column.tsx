import React from 'react';

type ColumnProps = {
    size: '' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' |
    'nine' | 'ten' | 'eleven' | 'twelve' | 'one-third' | 'two-thirds' | 'one-half' | 'full',
    children: React.ReactNode
    className?: string
}

const Column = ({ size, className, children }: ColumnProps) => {
    return (
        <div className={`${size} columns ${className ? className : ''}`}>
            {children}
        </div>
    );
}

export default Column;