import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaUserGraduate } from 'react-icons/fa'; // Import the FaUserGraduate icon

const Team = () => {
  const teamMembers = [
    {
      name: 'Mohamed Kamara',
      id: '9020',
      color: 'text-primary', // Blue color
    },
    {
      name: 'Abdulrahim Bittar',
      id: '7905',
      color: 'text-success', // Green color
    },
    {
      name: 'Abdul Hakeem Mohamed',
      id: '7229',
      color: 'text-warning', // Yellow color
    },
    {
      name: 'Solomon AB Kamanda',
      id: '7925',
      color: 'text-danger', // Red color
    },
    {
      name: 'Kadijatu Kamara',
      id: '8173',
      color: 'text-info', // Light blue color
    },
    {
      name: 'Peter Sidikie Gbla',
      id: '6297',
      color: 'text-secondary', // Gray color
    },
    {
      name: 'Foday Samura',
      id: '8292',
      color: 'text-dark', // Dark color
    },
  ];

  return (
    <section id="team" className="py-5 bg-light">
      <Container>
        <h2 className="text-center display-4 mb-5">Our Team</h2>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-100 shadow-sm text-center">
                  <div className="mt-4">
                    <FaUserGraduate size={80} className={member.color} /> {/* Use FaUserGraduate with dynamic color */}
                  </div>
                  <Card.Body>
                    <Card.Title className="h5">{member.name}</Card.Title>
                    {member.id && (
                      <Card.Text>
                        <small className="text-muted">ID: {member.id}</small>
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Team;