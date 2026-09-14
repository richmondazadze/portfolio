/** Static ambient light keeps the visual depth without continuous blur repaints. */
export default function AmbientOrbs() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse at 85% 35%, rgba(187,226,245,.09), transparent 55%), radial-gradient(ellipse at 5% 75%, rgba(183,198,194,.08), transparent 50%)' }} />;
}
