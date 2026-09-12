import { useEffect, useState } from 'react';

const EMPTY = { nombre: '', descripcion: '', precio: '' };

export default function ProductForm({ selected, onSave, onCancel, busy }) {
  const [form, setForm] = useState(EMPTY);

  useEffect(() => {
    setForm(selected ? {
      nombre: selected.nombre,
      descripcion: selected.descripcion,
      precio: selected.precio,
    } : EMPTY);
  }, [selected]);

  function change(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submit(event) {
    event.preventDefault();
    onSave(form);
  }

  return (
    <form className="card form" onSubmit={submit}>
      <div className="section-title">
        <div>
          <span className="eyebrow">RPC unary</span>
          <h2>{selected ? `Editar producto #${selected.id}` : 'Nuevo producto'}</h2>
        </div>
        {selected && <button type="button" className="link" onClick={onCancel}>Cancelar</button>}
      </div>

      <label>
        Nombre
        <input name="nombre" value={form.nombre} onChange={change} maxLength="120" required />
      </label>
      <label>
        Descripción
        <textarea name="descripcion" value={form.descripcion} onChange={change} maxLength="500" rows="3" />
      </label>
      <label>
        Precio
        <input name="precio" value={form.precio} onChange={change} inputMode="decimal" placeholder="1299999.90" required />
      </label>
      <button className="primary" disabled={busy} type="submit">
        {busy ? 'Procesando…' : selected ? 'Actualizar producto' : 'Crear producto'}
      </button>
    </form>
  );
}
