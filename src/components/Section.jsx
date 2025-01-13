import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

const Section = ({ id, title, content, image, isImageLeft, bulletPoints, table, images }) => {
  return (
    <motion.section
      id={id}
      className="py-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Container>
        <Row className="align-items-center">
          {isImageLeft && (
            <Col md={6} className="mb-4 mb-md-0">
              {images ? (
                <Row>
                  {images.map((img, index) => (
                    <Col key={index} xs={6} className="mb-3">
                      <motion.img
                        src={img}
                        alt={`${title} ${index + 1}`}
                        className="img-fluid rounded shadow-sm"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <motion.img
                  src={image}
                  alt={title}
                  className="img-fluid rounded shadow-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </Col>
          )}
          <Col md={6}>
            <Card className="shadow-sm">
              <Card.Body>
                <Card.Title className="display-6 mb-4">{title}</Card.Title>
                <Card.Text className="lead mb-4">{content}</Card.Text>
                {bulletPoints && (
                  <ul className="list-unstyled">
                    {bulletPoints.map((point, index) => (
                      <li key={index} className="mb-2">
                        {point.includes(':') ? (
                          <>
                            <span style={{ fontWeight: 'bold' }}>
                              {point.split(':')[0]}:
                            </span>
                            <span> {point.split(':')[1]}</span>
                          </>
                        ) : (
                          <span>• {point}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
                {table && (
                  <Table striped bordered hover className="mt-4">
                    <thead>
                      <tr>
                        <th>Aspect</th>
                        <th>Supervised Learning</th>
                        <th>Unsupervised Learning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table.map((row, index) => (
                        <tr key={index}>
                          <td>{row.aspect}</td>
                          <td>{row.supervised}</td>
                          <td>{row.unsupervised}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                )}
              </Card.Body>
            </Card>
          </Col>
          {!isImageLeft && (
            <Col md={6} className="mb-4 mb-md-0">
              {images ? (
                <Row>
                  {images.map((img, index) => (
                    <Col key={index} xs={6} className="mb-3">
                      <motion.img
                        src={img}
                        alt={`${title} ${index + 1}`}
                        className="img-fluid rounded shadow-sm"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                      />
                    </Col>
                  ))}
                </Row>
              ) : (
                <motion.img
                  src={image}
                  alt={title}
                  className="img-fluid rounded shadow-sm"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                />
              )}
            </Col>
          )}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Section;