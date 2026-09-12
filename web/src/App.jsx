import { useCallback, useEffect, useState } from 'react';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import {
  createProduct,
  deleteProduct,
  grpcWebEndpoint,
  listProducts,
  updateProduct,
} from './services/productService';

export default function App() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [selected, setSelected] = useState(null);
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const response = await listProducts(100, 0);
      setProducts(response.products);
      setTotal(response.total);
      setMessage(null);
    } catch (error) {
      setMessage({ type: 'error', text: `No fue posible consultar gRPC-Web: ${error.message || error}` });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function save(form) {
    setBusy(true);
    try {
      if (selected) {
        await updateProduct(selected.id, form);
        setMessage({ type: 'success', text: `Producto #${selected.id} actualizado.` });
      } else {
        const created = await createProduct(form);
        setMessage({ type: 'success', text: `Producto #${created.id} creado.` });
      }
      setSelected(null);
      await load();
    } catch (error) {
      setMessage({ type: 'error', text: error.message || String(error) });
    } finally {
      setBusy(false);
    }
  }

  async function remove(product) {
    if (!window.confirm(`¿Eliminar ${product.nombre}?`)) return;
    setBusy(true);
    try {
      await deleteProduct(product.id);
      setMessage({ type: 'success', text: `Producto #${product.id} eliminado.` });
      if (selected?.id === product.id) setSelected(null);
      await load();
    } catch (error) {
      setMessage({ type: 'error', text: error.message || String(error) });
    } finally {
      setBusy(false);
    }
  }

  return (
    <main>
      <header className="hero">
        <div>
          <div className="brand">ARQUITECTURAS WEB · gRPC-WEB</div>
          <h1>Gestión de productos</h1>
          <p>React consume un contrato Protobuf mediante gRPC-Web; Envoy adapta la llamada a gRPC nativo y el backend persiste en PostgreSQL.</p>
        </div>
        <div className="status-card">
          <span className="status-dot" />
          <div>
            <small>Endpoint gRPC-Web</small>
            <strong>{grpcWebEndpoint()}</strong>
          </div>
        </div>
      </header>

      {message && <div className={`alert ${message.type}`}>{message.text}</div>}

      <section className="layout">
        <ProductForm selected={selected} onSave={save} onCancel={() => setSelected(null)} busy={busy} />

        <section className="card catalog">
          <div className="section-title">
            <div>
              <span className="eyebrow">ProductService.ListProducts</span>
              <h2>Catálogo</h2>
            </div>
            <div className="catalog-meta">
              <strong>{total}</strong><span>productos</span>
              <button className="secondary" onClick={load} disabled={loading || busy}>Actualizar</button>
            </div>
          </div>
          {loading ? <div className="empty">Consultando servicio gRPC…</div> : (
            <ProductTable products={products} onEdit={setSelected} onDelete={remove} busy={busy} />
          )}
        </section>
      </section>
    </main>
  );
}
