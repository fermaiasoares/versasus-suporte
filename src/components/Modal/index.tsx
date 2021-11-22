import React, { useEffect, useState } from 'react';

import { Container } from './styles';

type Props = {
  title: string;
  modalShow: boolean;
  modalDismiss(): void;
  children?: React.ReactNode;
}

export function Modal({title, children, modalDismiss, modalShow = false}: Props) {
  const [showModal, setShowModal] = useState(modalShow);

  useEffect(() => {
    setShowModal(modalShow);
  }, [modalShow]);
  
  return (
    <Container isOpen={showModal}>
      <div className="modal-content">
        <button className="close" onClick={modalDismiss}>
          x
        </button>
        <div className="modal-title">
          <h2>{title}</h2>
        </div>
        {children}
      </div>
    </Container>
  );
}