import { useEffect, useRef, useState } from 'react';
import { Expand, X, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';

export default function ProjectImage({ project }) {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current.showModal();
    return () => { document.body.style.overflow = previous; };
  }, [open]);
  const close = () => { dialog.current?.close(); setOpen(false); setZoom(false); trigger.current?.focus(); };
  return (
    <>
      <figure className="project-cover">
        <div className="preview-toolbar text-navy"><span className="preview-dots" aria-hidden="true"><i /><i /><i /></span><span>{project.title}</span><span>Project preview</span></div>
        <button ref={trigger} onClick={() => setOpen(true)} aria-label={`Expand ${project.title} screenshot`}><img src={project.image} alt={`${project.title} application screenshot`} /><span className="absolute bottom-3 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white"><Expand size={18} /></span></button>
        <figcaption className="cover-caption"><span>Select the image for a closer look</span><a href={project.link} target="_blank" rel="noopener noreferrer" className="text-link">Visit live site <ExternalLink size={15} /></a></figcaption>
      </figure>
      <dialog ref={dialog} className="image-dialog" aria-labelledby="preview-title" onCancel={e => { e.preventDefault(); close(); }} onClose={() => { setOpen(false); }} onClick={e => { if (e.target === dialog.current) close(); }}>
        <div className="sticky top-0 z-10 mb-5 flex items-center justify-between gap-4 rounded bg-navy p-2"><h2 id="preview-title" className="text-base font-semibold">{project.title} — preview</h2><button onClick={() => setZoom(value => !value)} aria-label={zoom ? "Fit image to screen" : "Zoom image to original size"} aria-pressed={zoom} className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/25">{zoom ? <ZoomOut size={20} /> : <ZoomIn size={20} />}</button><button autoFocus onClick={close} aria-label="Close image preview" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/25"><X size={22} /></button></div>
        {open && <div className="overflow-auto"><img src={project.image} alt={`${project.title} full screenshot`} style={zoom ? { width: "auto", maxWidth: "none" } : undefined} /></div>}
      </dialog>
    </>
  );
}
