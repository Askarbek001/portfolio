import React from 'react';
import Item from './Item';

export default function Items(props) {
    return (
        <main className="items">
            {props.items.map((obj) => (
                <Item key={obj.id} item={obj} />
            ))}
        </main>
    );
}
