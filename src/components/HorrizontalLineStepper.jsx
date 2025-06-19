import {
  Box,
  Button,
  Container,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";
import React, { use, useState } from "react";

const steps = ["Personal Details", "Accademic Details", "Bank Details"];
const HorrizontalLineStepper = () => {
  //create a state which show currunt step
  const [activeStep, setActiveStep] = useState(0);
  //to memorize which state has been skipped
  const [skipped, setSkipped] = useState(new Set());

  //make step 1 is optional
  const isStepOptional = (step) => step === 1;

  // is any step is skipped->check set skipped
  const isSkipped = (step) => skipped.has(step);

  //create next functioanlity
  const handleNext = () => {
    let newSkipped = skipped;

    // if curr step skip hue ho phile and ab hum phir usi pr visit kre to
    if (isSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      //now remove the present step from skipped
      newSkipped.delete(activeStep);
    }
    setActiveStep((prev) => prev + 1); //Ab next step dikhao
    setSkipped(newSkipped);
  };

  //back button login
  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  //skip button logic
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      //no active step is not optional
      throw new Error("You can't skip a step that isn't optional.");
    }
    // if active Step is optional
    setActiveStep((prev) => prev + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  //reset logic
  const handleReset = () => {
    setActiveStep(0);
  };
  // 🔥 STEP BASED FORM CONTENT
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField label="Username" type="text" />
            <TextField label="Email" type="email" />
            <TextField label="Password" type="password" />
          </form>
        );
      case 1:
        return (
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField label="University Name" type="text" />
            <TextField label="Degree" type="text" />
            <TextField label="Passing Year" type="number" />
          </form>
        );
      case 2:
        return (
          <form
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <TextField label="Bank Name" type="text" />
            <TextField label="Account Number" type="text" />
            <TextField label="IFSC Code" type="text" />
          </form>
        );
      default:
        return "Unknown step";
    }
  };
  return (
    <Container maxWidth="md">
      <Box sx={{}}>
        {/* alternativeLabel iske lgne se label neeche show honge otherwise side me */}
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Optional</Typography>
              );
            }

            if (isSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep == steps.length ? (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </>
        ) : (
          <>
            <Typography sx={{ mt: 2, mb: 1 }}>
              {renderStepContent(activeStep)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Container>
  );
};

export default HorrizontalLineStepper;
