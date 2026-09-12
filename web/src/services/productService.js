const { ProductServiceClient } = require('../grpc/product_grpc_web_pb');
const {
  CreateProductRequest,
  DeleteProductRequest,
  GetProductRequest,
  ListProductsRequest,
  UpdateProductRequest,
} = require('../grpc/product_pb');

function defaultGrpcWebUrl() {
  const protocol = window.location.protocol === 'https:' ? 'https:' : 'http:';
  return `${protocol}//${window.location.hostname}:8080`;
}

const client = new ProductServiceClient(defaultGrpcWebUrl(), null, null);

function unary(method, request) {
  return new Promise((resolve, reject) => {
    method.call(client, request, {}, (error, response) => {
      if (error) {
        reject(error);
        return;
      }
      resolve(response);
    });
  });
}

function fromProto(product) {
  return {
    id: product.getId(),
    nombre: product.getNombre(),
    descripcion: product.getDescripcion(),
    precio: product.getPrecio(),
  };
}

export async function listProducts(limit = 100, offset = 0) {
  const request = new ListProductsRequest();
  request.setLimit(limit);
  request.setOffset(offset);
  const response = await unary(client.listProducts, request);
  return {
    products: response.getProductsList().map(fromProto),
    total: response.getTotal(),
  };
}

export async function getProduct(id) {
  const request = new GetProductRequest();
  request.setId(id);
  const response = await unary(client.getProduct, request);
  return fromProto(response.getProduct());
}

export async function createProduct(data) {
  const request = new CreateProductRequest();
  request.setNombre(data.nombre);
  request.setDescripcion(data.descripcion);
  request.setPrecio(data.precio);
  const response = await unary(client.createProduct, request);
  return fromProto(response.getProduct());
}

export async function updateProduct(id, data) {
  const request = new UpdateProductRequest();
  request.setId(id);
  request.setNombre(data.nombre);
  request.setDescripcion(data.descripcion);
  request.setPrecio(data.precio);
  const response = await unary(client.updateProduct, request);
  return fromProto(response.getProduct());
}

export async function deleteProduct(id) {
  const request = new DeleteProductRequest();
  request.setId(id);
  const response = await unary(client.deleteProduct, request);
  return { success: response.getSuccess(), deletedId: response.getDeletedId() };
}

export function grpcWebEndpoint() {
  return defaultGrpcWebUrl();
}
