import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const popover = (
    <Popover id='popover-basic'>
      <Popover.Body>실제로 아이스크림이 배달되지는 않아요ㅠㅠ</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      본{' '}
      <OverlayTrigger placement='right' overlay={popover}>
        <span style={{ color: 'blue' }}>이용약관</span>
      </OverlayTrigger>
      에 동의합니다.
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
