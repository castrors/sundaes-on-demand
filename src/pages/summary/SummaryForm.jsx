import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SummaryForm() {
  const [termsConditionsChecked, setTermsConditionsChecked] = useState(false);
  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}>Terms and conditions</span>
    </span>
  );

  return (
    <Form>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          checked={termsConditionsChecked}
          onChange={(e) => setTermsConditionsChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        disabled={!termsConditionsChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
}
