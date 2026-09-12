export default function ProductTable({ products, onEdit, onDelete, busy }) {
  if (!products.length) {
    return <div className="empty">No hay productos registrados.</div>;
  }

  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Producto</th>
            <th>Descripción</th>
            <th className="number">Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><span className="id-badge">#{product.id}</span></td>
              <td><strong>{product.nombre}</strong></td>
              <td className="muted">{product.descripcion || '—'}</td>
              <td className="number">${Number(product.precio).toLocaleString('es-CO', { minimumFractionDigits: 2 })}</td>
              <td>
                <div className="actions">
                  <button className="secondary" disabled={busy} onClick={() => onEdit(product)}>Editar</button>
                  <button className="danger" disabled={busy} onClick={() => onDelete(product)}>Eliminar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
