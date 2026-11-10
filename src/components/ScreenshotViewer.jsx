import { useEffect, useRef } from 'react';

export default function ScreenshotViewer({ screenshot, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (screenshot && !dialog.open) dialog.showModal();
    else if (!screenshot && dialog.open) dialog.close();
  }, [screenshot]);

  return (
    <dialog
      ref={dialogRef}
      className="screenshot-viewer"
      aria-label={screenshot ? `${screenshot.title} screenshot` : 'Screenshot preview'}
      onCancel={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }}
      onClose={(event) => event.stopPropagation()}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {screenshot && (
        <div className="screenshot-viewer-content">
          <div className="screenshot-viewer-bar">
            <p>{screenshot.title}</p>
            <button className="button project-close" type="button" onClick={onClose} autoFocus><span aria-hidden="true">×</span> Close preview</button>
          </div>
          <img src={screenshot.src} alt={screenshot.alt} />
        </div>
      )}
    </dialog>
  );
}
