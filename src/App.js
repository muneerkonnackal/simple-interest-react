import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./App.css";
import { useState } from "react";

function App() {
  //js code
  const [principle, setPrinciple] = useState(0); //principal amount
  const [rate, setRate] = useState(0); //rate
  const [year, setYear] = useState(0); //year
  const [interest, setInterest] = useState(0); //simple interest

  const [isPrinciple, setIsPrinciple] = useState(true);
  const [isRate, setIsRate] = useState(true);
  const [isyear, isSetYear] = useState(true);

  const validiteData = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);
    // console.log(typeof(value));
    // console.log(!!value.match(/^[0-9]+$/)); // (!!)-to convert into boolean
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(true);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(true);
      } else if (name === "year") {
        setYear(value);
        isSetYear(true);
      }
    } else {
      if (name === "principle") {
        setPrinciple(value);
        setIsPrinciple(false);
      } else if (name === "rate") {
        setRate(value);
        setIsRate(false);
      } else if (name === "year") {
        setYear(value);
        isSetYear(false);
      }
    }
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!principle || !rate || !year) {
      alert("Please fill the form completely");
    }
     else {
      setInterest((principle * rate * year) / 100);
    }
  };
  const handleReset = (e) => {
    setPrinciple(0);
    setRate(0);
    setYear(0);
    setInterest(0);
    setIsPrinciple(true)
    setIsRate(true);
    isSetYear(true);
  };

  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex justify-content-center align-items-center w-100 bg-dark"
    >
      <div className="bg-light p-5 rounded " style={{ width: "500px" }}>
        <h1>Simple Interest App</h1>
        <p>Calculate your simple interest Easily</p>
        <div
          style={{ height: "150px" }}
          className="bg-warning mt-5 d-flex justify-content-center align-items-center w-100 rounded flex-column shadow"
        >
          <h1>₹ {interest}</h1>
          <p>Total simple interest</p>
        </div>
        <form className="mt-5 " onSubmit={handleCalculate}>
          <div className="mb-3"></div>

          <div className="mb-3">
            <TextField
              name="principle"
              value={principle || ""}
              onChange={(e) => validiteData(e)}
              className="w-100"
              id="outlined-basic"
              label="Principal Amount"
              variant="outlined"
            />
          </div>

          {!isPrinciple && (
            <div>
              <p className="text-danger fw-bolder">*Invalid Input</p>
            </div>
          )}

          <div className="mb-3">
            <TextField
              name="rate"
              value={rate || ""}
              onChange={(e) => validiteData(e)}
              className="w-100"
              id="outlined-basic"
              label="Rate of interest (p.a) %"
              variant="outlined"
            />
          </div>

          {!isRate && (
            <div>
              <p className="text-danger fw-bolder">*Invalid Input</p>
            </div>
          )}

          <div className="mb-3">
            <TextField
              name="year"
              value={year || ""}
              onChange={(e) => validiteData(e)}
              className="w-100"
              id="outlined-basic"
              label="Year (yr)"
              variant="outlined"
            />
          </div>

          {!isyear && (
            <div>
              <p className="text-danger fw-bolder">*Invalid Input</p>
            </div>
          )}

          <div className="mt-4">
            <Stack direction="row" spacing={2}>
              <Button
                disabled={isPrinciple && isRate && isyear ? false : true}
                variant="contained"
                className="bg-success"
                type="submit"
                style={{ height: "60px", width: "200px" }}
              >
                Calculate
              </Button>
              <Button
                onClick={handleReset}
                variant="outlined"
                style={{ height: "60px", width: "200px" }}
              >
                Reset
              </Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
