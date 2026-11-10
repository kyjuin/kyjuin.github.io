import { useEffect, useRef, useState } from 'react';
import ScreenshotViewer from './ScreenshotViewer';

export default function ProjectDialog({ id, titleId, active, onRequestClose, onClosed, children }) {
  const dialogRef = useRef(null);
  const [screenshot, setScreenshot] = useState(null);
  const screenshotOpenerRef = useRef(null);

  const closeScreenshot = () => {
    setScreenshot(null);
  };

  useEffect(() => {
    if (!screenshot) screenshotOpenerRef.current?.focus({ preventScroll: true });
  }, [screenshot]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (active && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!active && dialog.open) {
      setScreenshot(null);
      dialog.close();
    }
  }, [active]);

  return (
    <dialog
      ref={dialogRef}
      id={id}
      className="project-dialog"
      aria-labelledby={titleId}
      onClick={(event) => {
        const link = event.target.closest('.project-screenshots a');
        const image = link?.querySelector('img');
        if (!image) return;
        event.preventDefault();
        screenshotOpenerRef.current = link;
        setScreenshot({ src: link.href, alt: image.alt, title: link.closest('figure').querySelector('figcaption')?.textContent || 'Project screen' });
      }}
      onCancel={(event) => {
        event.preventDefault();
        onRequestClose();
      }}
      onClose={onClosed}
    >
      {children}
      <ScreenshotViewer screenshot={screenshot} onClose={closeScreenshot} />
    </dialog>
  );
}
