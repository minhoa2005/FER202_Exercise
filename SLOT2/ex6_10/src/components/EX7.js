import React from 'react'
import { Card, CardText } from 'react-bootstrap';

export default function EX7() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '20px' }}>
            <Card style={{ width: '20rem', backgroundColor: 'lightblue' }}>
                <Card.Header>
                    <div className="bg-light" style={{ width: '280px', height: '280px' }}>280x280</div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some text inside the first card
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem', backgroundColor: 'lightblue' }}>
                <Card.Header>
                    <div className="bg-light" style={{ width: '280px', height: '280px' }}>280x280</div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some text inside the first card
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem', backgroundColor: 'lightblue' }}>
                <Card.Header>
                    <div className="bg-light" style={{ width: '280px', height: '280px' }}>280x280</div>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        Some text inside the first card
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
