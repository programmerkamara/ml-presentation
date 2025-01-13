import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section from './components/Section';
import Team from './components/Team';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

// Import local images
import kmeanImage from './assets/images/kmean.jpeg';
import supImage from './assets/images/sup.png';
import suImage from './assets/images/su.png';
import OIPImage from './assets/images/OIP.jpeg';
import OIP4Image from './assets/images/OIP (4).jpeg';
import OIP3Image from './assets/images/OIP (3).jpeg';
import OIP2Image from './assets/images/OIP (2).jpeg';
import OIP1Image from './assets/images/OIP (1).jpeg';
import linImage from './assets/images/lin.png';
import unsuppImage from './assets/images/unsupp.jpeg';
import unsupImage from './assets/images/unsup.png';
import suppImage from './assets/images/supp.png';
import regressionImage from './assets/images/regression.jpeg';
import OIP8Image from './assets/images/OIP (8).jpeg';
import OIP7Image from './assets/images/OIP (7).jpeg';
import OIP6Image from './assets/images/OIP (6).jpeg';
import OIP5Image from './assets/images/OIP (5).jpeg';
import downloadImage from './assets/images/download.jpeg';
import download1Image from './assets/images/download (1).jpeg';
import dcImage from './assets/images/dc.jpeg';
import cluImage from './assets/images/clu.png';

// Welcome Message Component
const WelcomeMessage = () => {
  return (
    <section id="welcome" className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4 mb-4">Welcome to Our Presentation!</h2>
            <p className="lead">
              We are excited to share our insights on Supervised vs. Unsupervised Learning. Let's dive into the fascinating world of machine learning together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Thank You Message Component
const ThankYouMessage = () => {
  return (
    <section id="thank-you" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4 mb-4">Thank You!</h2>
            <p className="lead">
              We appreciate your time and attention. We hope you found this presentation insightful and informative.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Question Section Component
const QuestionSection = () => {
  return (
    <section id="questions" className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            <h2 className="display-4 mb-4">Questions?</h2>
            <p className="lead">
              If you have any questions or would like to discuss further, feel free to reach out to us. We're here to help!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WelcomeMessage /> {/* Welcome Message Section */}
      <Team /> {/* Meet Our Team Section */}
      <Section
        id="supervised"
        title="Supervised Learning: Learning with Guidance"
        content="Supervised learning is a type of machine learning where the model is trained on labeled data. The input data is paired with the correct output, and the goal is to learn a mapping from inputs to outputs. It is widely used for prediction tasks like classification and regression."
        image={supImage} // Unique image
        isImageLeft={true}
        bulletPoints={[
          "Definition: Training a model on labeled data (input-output pairs).",
          "Algorithms: Linear Regression, Logistic Regression, Decision Trees, Support Vector Machines (SVM), Neural Networks.",
          "Evaluation Metrics: Accuracy, Precision, Recall, F1-Score, Mean Squared Error (MSE).",
          "Use Cases:",
          " Spam Detection: Classify emails as spam or not spam using labeled email datasets.",
          " Medical Diagnosis: Predict diseases based on patient records and labeled medical data.",
          " House Price Prediction: Predict house prices using features like location, size, and number of bedrooms.",
          "Challenges:",
          " Requires high-quality labeled data, which can be expensive and time-consuming to collect.",
          " Prone to overfitting if the model is too complex.",
        ]}
        images={[OIPImage, OIP1Image, OIP2Image, linImage]} // Unique images
      />
      <Section
        id="unsupervised"
        title="Unsupervised Learning: Discovering Hidden Patterns"
        content="Unsupervised learning is a type of machine learning where the model is trained on unlabeled data. The goal is to find inherent structures or patterns in the data. It is commonly used for clustering, dimensionality reduction, and anomaly detection."
        image={unsuppImage} // Unique image
        isImageLeft={false}
        bulletPoints={[
          "Definition: Training a model on unlabeled data to discover patterns.",
          "Algorithms: K-Means Clustering, Hierarchical Clustering, Principal Component Analysis (PCA), t-SNE.",
          "Evaluation Metrics: Silhouette Score, Inertia, Reconstruction Error.",
          "Use Cases:",
          " Customer Segmentation: Group customers based on purchasing behavior using unlabeled transaction data.",
          " Image Compression: Reduce the size of images while preserving their structure using pixel data.",
          " Market Basket Analysis: Identify associations between products purchased together.",
          "Challenges:",
          " Harder to evaluate due to the lack of labeled data.",
          " Results may be subjective and harder to interpret.",
        ]}
        images={[unsupImage, OIP3Image, cluImage ]} // Unique images
      />
      <Section
        id="comparison"
        title="Supervised vs. Unsupervised Learning: A Comparative Analysis"
        content="The table below provides a detailed comparison of supervised and unsupervised learning, highlighting their key differences, use cases, and challenges."
        image={OIP5Image} // Unique image
        isImageLeft={true}
        table={[
          {
            aspect: "Data",
            supervised: "Labeled data (input-output pairs).",
            unsupervised: "Unlabeled data.",
          },
          {
            aspect: "Goal",
            supervised: "Predict outcomes based on labeled data.",
            unsupervised: "Discover hidden patterns or structures in data.",
          },
          {
            aspect: "Algorithms",
            supervised: "Linear Regression, Logistic Regression, Decision Trees, SVM, Neural Networks.",
            unsupervised: "K-Means Clustering, Hierarchical Clustering, PCA, t-SNE.",
          },
          {
            aspect: "Evaluation",
            supervised: "Accuracy, Precision, Recall, F1-Score, MSE.",
            unsupervised: "Silhouette Score, Inertia, Reconstruction Error.",
          },
          {
            aspect: "Use Cases",
            supervised: "Spam detection, medical diagnosis, house price prediction.",
            unsupervised: "Customer segmentation, image compression, market basket analysis.",
          },
          {
            aspect: "Challenges",
            supervised: "Requires labeled data, prone to overfitting.",
            unsupervised: "Harder to evaluate, results may be subjective.",
          },
        ]}
      />
      <Section
        id="applications"
        title="Real-World Applications"
        content="Supervised and unsupervised learning are widely used in various industries to solve real-world problems. Below are some examples of their applications."
        image={OIP6Image} // Unique image
        isImageLeft={false}
        bulletPoints={[
          "Supervised Learning Applications:",
          " Spam Detection: Classify emails as spam or not spam using labeled email datasets.",
          " Medical Diagnosis: Predict diseases based on patient records and labeled medical data.",
          " House Price Prediction: Predict house prices using features like location, size, and number of bedrooms.",
          "Unsupervised Learning Applications:",
          " Customer Segmentation: Group customers based on purchasing behavior using unlabeled transaction data.",
          " Image Compression: Reduce the size of images while preserving their structure using pixel data.",
          " Market Basket Analysis: Identify associations between products purchased together.",
        ]}
        images={[OIP7Image, OIP8Image, regressionImage]} // Unique images
      />
      <Section
        id="challenges"
        title="Challenges and Limitations"
        content="Both supervised and unsupervised learning face unique challenges and limitations. Understanding these challenges is crucial for selecting the right approach for a given problem."
        image={downloadImage} // Unique image
        isImageLeft={true}
        bulletPoints={[
          "Supervised Learning Challenges:",
          " Requires labeled data, which can be expensive and time-consuming to collect.",
          " Prone to overfitting if the model is too complex.",
          " Limited to problems where labeled data is available.",
          "Unsupervised Learning Challenges:",
          " Harder to evaluate due to the lack of labeled data.",
          " Results may be subjective and harder to interpret.",
          " Requires domain expertise to interpret the discovered patterns.",
        ]}
        images={[download1Image, dcImage]} // Unique images
      />
      <Section
        id="conclusion"
        title="Conclusion"
        content="Supervised and unsupervised learning are two fundamental approaches in machine learning, each with its own strengths and limitations. The choice between them depends on the problem, data availability, and desired outcomes."
        image={suppImage} // Unique image
        isImageLeft={false}
        bulletPoints={[
          "Supervised Learning: Best for prediction tasks when labeled data is available.",
          "Unsupervised Learning: Best for discovering hidden patterns when labeled data is unavailable.",
          "Key Takeaways:",
          " Supervised learning is ideal for prediction tasks.",
          " Unsupervised learning is ideal for exploratory data analysis.",
          " The choice depends on the problem, data availability, and desired outcomes.",
        ]}
        images={[ kmeanImage,suImage,OIP4Image ]} // Unique images
      />
      <ThankYouMessage /> {/* Thank You Message Section */}
      <QuestionSection /> {/* Question Section */}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;