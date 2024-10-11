import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
// import './land.css';

const LandingPage: React.FC = () => {
  const [visibleWords, setVisibleWords] = useState<boolean[]>([false, false, false]);
  const words = ['Fresh', 'Fast', 'on AguuraMuhinzi'];

  useEffect(() => {
    const delay = 1000; // Delay between words in milliseconds
    const timeoutIds: NodeJS.Timeout[] = [];

    words.forEach((_, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleWords((prev) => {
          const newVisible = [...prev];
          newVisible[index] = true; // Set the corresponding word to visible
          return newVisible;
        });
      }, index * delay);
      timeoutIds.push(timeoutId);
    });

    return () => {
      timeoutIds.forEach(clearTimeout); // Clear timeouts on unmount
    };
  }, [words]);

  return (
    <div className="container-fluid hero-frame d-flex align-items-center justify-content-center">
      <div className="row justify-content-center elements">
        <div className="col- first-card">
          <Card sx={{ backgroundColor: 'transparent', color: 'white' }}>
            <CardContent>
              <div className="aguura-muhinzi-container d-flex justify-content-center align-items-center">
                <span className="aguura-muhinzi-container1">
                  <Typography variant="h4" component="div" className="aguura">
                    AGUURA & Muhinzi
                  </Typography>
                </span>
              </div>

              {/* Headline and text */}
              <div className="text-holder-frame mt-3 p-4">
                <Typography variant="h6" className="get-all-farm">
                  Get All Farm Produce
                </Typography>

                <div className="fresh-fast-on-agromarket-wrapper">
                  <b className="fresh-fast-on-container">
                    {words.map((word, index) => (
                      <Typography key={index} className={`aguura word ${visibleWords[index] ? 'show' : ''}`}>
                        {word}
                      </Typography>
                    ))}
                  </b>
                </div>

                <Typography variant="body1" className="connecting-farmers-cooperativ mt-2">
                  Connecting Farmers, Cooperatives, and Buyers for a Thriving Marketplace
                </Typography>

                {/* Learn More button */}
                <div className="mt-3">
                  <Button variant="outlined" color="inherit" className="state-layer">
                    Learn More
                  </Button>
                </div>
              </div> {/* text-holder-frame */}
            </CardContent>
          </Card> {/* card */}
        </div> {/* first-card */}
      </div> {/* row */}
    </div> /* hero-frame */
  );
};

export default LandingPage;
