/*
 * Compatibilidad gRPC-Web para proto/product.proto.
 * Este archivo implementa las clases de mensajes requeridas por grpc-web usando
 * google-protobuf. Puede regenerarse con protoc + protoc-gen-js cuando el contrato cambie.
 */
const jspb = require('google-protobuf');

class Product {
  constructor() { this.id = 0; this.nombre = ''; this.descripcion = ''; this.precio = ''; }
  getId() { return this.id; } setId(v) { this.id = Number(v); return this; }
  getNombre() { return this.nombre; } setNombre(v) { this.nombre = String(v); return this; }
  getDescripcion() { return this.descripcion; } setDescripcion(v) { this.descripcion = String(v); return this; }
  getPrecio() { return this.precio; } setPrecio(v) { this.precio = String(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); Product.serializeBinaryToWriter(this, w); return w.getResultBuffer(); }
  static serializeBinaryToWriter(m, w) {
    if (m.id !== 0) w.writeInt64(1, m.id);
    if (m.nombre) w.writeString(2, m.nombre);
    if (m.descripcion) w.writeString(3, m.descripcion);
    if (m.precio) w.writeString(4, m.precio);
  }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); return Product.deserializeBinaryFromReader(new Product(), r); }
  static deserializeBinaryFromReader(m, r) {
    while (r.nextField()) {
      if (r.isEndGroup()) break;
      switch (r.getFieldNumber()) {
        case 1: m.setId(r.readInt64()); break;
        case 2: m.setNombre(r.readString()); break;
        case 3: m.setDescripcion(r.readString()); break;
        case 4: m.setPrecio(r.readString()); break;
        default: r.skipField();
      }
    }
    return m;
  }
}

class CreateProductRequest {
  constructor() { this.nombre = ''; this.descripcion = ''; this.precio = ''; }
  getNombre() { return this.nombre; } setNombre(v) { this.nombre = String(v); return this; }
  getDescripcion() { return this.descripcion; } setDescripcion(v) { this.descripcion = String(v); return this; }
  getPrecio() { return this.precio; } setPrecio(v) { this.precio = String(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); CreateProductRequest.serializeBinaryToWriter(this, w); return w.getResultBuffer(); }
  static serializeBinaryToWriter(m, w) {
    if (m.nombre) w.writeString(1, m.nombre);
    if (m.descripcion) w.writeString(2, m.descripcion);
    if (m.precio) w.writeString(3, m.precio);
  }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); return CreateProductRequest.deserializeBinaryFromReader(new CreateProductRequest(), r); }
  static deserializeBinaryFromReader(m, r) {
    while (r.nextField()) {
      if (r.isEndGroup()) break;
      switch (r.getFieldNumber()) {
        case 1: m.setNombre(r.readString()); break;
        case 2: m.setDescripcion(r.readString()); break;
        case 3: m.setPrecio(r.readString()); break;
        default: r.skipField();
      }
    }
    return m;
  }
}

class GetProductRequest {
  constructor() { this.id = 0; }
  getId() { return this.id; } setId(v) { this.id = Number(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); if (this.id !== 0) w.writeInt64(1, this.id); return w.getResultBuffer(); }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); const m = new GetProductRequest(); while (r.nextField()) { if (r.getFieldNumber() === 1) m.setId(r.readInt64()); else r.skipField(); } return m; }
}

class ListProductsRequest {
  constructor() { this.limit = 0; this.offset = 0; }
  getLimit() { return this.limit; } setLimit(v) { this.limit = Number(v); return this; }
  getOffset() { return this.offset; } setOffset(v) { this.offset = Number(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); if (this.limit !== 0) w.writeInt32(1, this.limit); if (this.offset !== 0) w.writeInt32(2, this.offset); return w.getResultBuffer(); }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); const m = new ListProductsRequest(); while (r.nextField()) { switch (r.getFieldNumber()) { case 1: m.setLimit(r.readInt32()); break; case 2: m.setOffset(r.readInt32()); break; default: r.skipField(); } } return m; }
}

class UpdateProductRequest {
  constructor() { this.id = 0; this.nombre = ''; this.descripcion = ''; this.precio = ''; }
  getId() { return this.id; } setId(v) { this.id = Number(v); return this; }
  getNombre() { return this.nombre; } setNombre(v) { this.nombre = String(v); return this; }
  getDescripcion() { return this.descripcion; } setDescripcion(v) { this.descripcion = String(v); return this; }
  getPrecio() { return this.precio; } setPrecio(v) { this.precio = String(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); UpdateProductRequest.serializeBinaryToWriter(this, w); return w.getResultBuffer(); }
  static serializeBinaryToWriter(m, w) {
    if (m.id !== 0) w.writeInt64(1, m.id);
    if (m.nombre) w.writeString(2, m.nombre);
    if (m.descripcion) w.writeString(3, m.descripcion);
    if (m.precio) w.writeString(4, m.precio);
  }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); const m = new UpdateProductRequest(); while (r.nextField()) { switch (r.getFieldNumber()) { case 1: m.setId(r.readInt64()); break; case 2: m.setNombre(r.readString()); break; case 3: m.setDescripcion(r.readString()); break; case 4: m.setPrecio(r.readString()); break; default: r.skipField(); } } return m; }
}

class DeleteProductRequest {
  constructor() { this.id = 0; }
  getId() { return this.id; } setId(v) { this.id = Number(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); if (this.id !== 0) w.writeInt64(1, this.id); return w.getResultBuffer(); }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); const m = new DeleteProductRequest(); while (r.nextField()) { if (r.getFieldNumber() === 1) m.setId(r.readInt64()); else r.skipField(); } return m; }
}

class ProductResponse {
  constructor() { this.product = undefined; }
  getProduct() { return this.product; } setProduct(v) { this.product = v; return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); if (this.product) w.writeMessage(1, this.product, Product.serializeBinaryToWriter); return w.getResultBuffer(); }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); const m = new ProductResponse(); while (r.nextField()) { if (r.getFieldNumber() === 1) { const p = new Product(); r.readMessage(p, Product.deserializeBinaryFromReader); m.setProduct(p); } else r.skipField(); } return m; }
}

class ListProductsResponse {
  constructor() { this.products = []; this.total = 0; }
  getProductsList() { return this.products; } setProductsList(v) { this.products = v || []; return this; } addProducts(v) { this.products.push(v); return v; }
  getTotal() { return this.total; } setTotal(v) { this.total = Number(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); if (this.products.length) w.writeRepeatedMessage(1, this.products, Product.serializeBinaryToWriter); if (this.total !== 0) w.writeInt64(2, this.total); return w.getResultBuffer(); }
  static deserializeBinary(bytes) {
    const r = new jspb.BinaryReader(bytes); const m = new ListProductsResponse();
    while (r.nextField()) {
      switch (r.getFieldNumber()) {
        case 1: { const p = new Product(); r.readMessage(p, Product.deserializeBinaryFromReader); m.addProducts(p); break; }
        case 2: m.setTotal(r.readInt64()); break;
        default: r.skipField();
      }
    }
    return m;
  }
}

class DeleteProductResponse {
  constructor() { this.success = false; this.deletedId = 0; }
  getSuccess() { return this.success; } setSuccess(v) { this.success = Boolean(v); return this; }
  getDeletedId() { return this.deletedId; } setDeletedId(v) { this.deletedId = Number(v); return this; }
  serializeBinary() { const w = new jspb.BinaryWriter(); if (this.success) w.writeBool(1, this.success); if (this.deletedId !== 0) w.writeInt64(2, this.deletedId); return w.getResultBuffer(); }
  static deserializeBinary(bytes) { const r = new jspb.BinaryReader(bytes); const m = new DeleteProductResponse(); while (r.nextField()) { switch (r.getFieldNumber()) { case 1: m.setSuccess(r.readBool()); break; case 2: m.setDeletedId(r.readInt64()); break; default: r.skipField(); } } return m; }
}

module.exports = {
  Product,
  CreateProductRequest,
  GetProductRequest,
  ListProductsRequest,
  UpdateProductRequest,
  DeleteProductRequest,
  ProductResponse,
  ListProductsResponse,
  DeleteProductResponse,
};
