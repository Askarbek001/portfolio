import React from 'react';
import Button from 'react-bootstrap/Button';

export default function Item(props) {
    return (
        <div className="goods">
            <div
                style={{
                    backgroundImage: `url(${props.item.main_image.path.original})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '200px',
                    borderRadius: '10px',
                }}
            ></div>
            <div>
                <h5>{props.item.title}</h5>
                <Button>{props.item.price} сом</Button>
                <span>{props.item.discount}</span>
            </div>
        </div>
    );
}
