import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import OIPImage from '../assets/images/OIP (3).jpeg'; // Adjust the import path as needed

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center text-center text-white"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.h1
              className="display-4 mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Supervised vs. Unsupervised Learning
            </motion.h1>
            <motion.p
              className="lead mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Exploring the Foundations, Differences, and Real-World Applications
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Button
                variant="light"
                size="lg"
                onClick={() => {
                  const supervisedSection = document.getElementById('supervised');
                  if (supervisedSection) {
                    supervisedSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get Started
              </Button>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Image
                src={OIPImage}
                alt="Machine Learning Illustration"
                fluid
                rounded
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;