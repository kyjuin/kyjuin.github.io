import { useEffect, useRef } from 'react';

export default function ProjectDialog({ id, titleId, active, onRequestClose, onClosed, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!active && dialog.open) {
      dialog.close();
    }
  }, [active]);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className="project-dialog"
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onRequestClose();
      }}
      onClose={onClosed}
    >
      {children}
    </dialog>
  );
}
