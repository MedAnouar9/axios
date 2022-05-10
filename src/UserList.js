import React from 'react'
import { Card } from 'react-bootstrap';

const UserList = ({user}  ) => {
  return (
    <div>
        <Card style={{ width: '18rem',border:'solid',backgroundColor:'#00EDDD',margin:'5%' }}>
  <Card.Body>
    <Card.Title> Name: {user.name}</Card.Title>
    <Card.Text> email: {user.email}    </Card.Text>
    <Card.Text>City: {user.city}    </Card.Text>
    <Card.Text> Phone: {user.phone}    </Card.Text>
    <Card.Text>bs: {user.bs}    </Card.Text>
    
  </Card.Body>
</Card>


    </div>
  )
}

export default UserList