import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      본 <span style={{ color: 'blue' }}>이용약관</span>에 동의합니다.
    </span>
  );

  return (
    <Form>
      <Form.Group controlId='이용약관'>
        <Form.Check
          type='checkbox'
          checked={tcChecked}
          onChange={(e) => setTcChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!tcChecked}>
        주문 확인
      </Button>
    </Form>
  );
}
