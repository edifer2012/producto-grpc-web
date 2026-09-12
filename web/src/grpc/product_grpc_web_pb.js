/* Servicio gRPC-Web compatible con proto/product.proto. */
const grpcWeb = require('grpc-web');
const productPb = require('./product_pb');

function serializer(ExpectedType) {
  return (arg) => {
    if (!(arg instanceof ExpectedType)) throw new Error(`Expected ${ExpectedType.name}`);
    return arg.serializeBinary();
  };
}

function descriptor(path, RequestType, ResponseType) {
  return {
    path,
    descriptor: new grpcWeb.MethodDescriptor(
    path,
    grpcWeb.MethodType.UNARY,
    RequestType,
    ResponseType,
    serializer(RequestType),
    ResponseType.deserializeBinary,
    ),
  };
}

const methods = {
  createProduct: descriptor('/products.v1.ProductService/CreateProduct', productPb.CreateProductRequest, productPb.ProductResponse),
  getProduct: descriptor('/products.v1.ProductService/GetProduct', productPb.GetProductRequest, productPb.ProductResponse),
  listProducts: descriptor('/products.v1.ProductService/ListProducts', productPb.ListProductsRequest, productPb.ListProductsResponse),
  updateProduct: descriptor('/products.v1.ProductService/UpdateProduct', productPb.UpdateProductRequest, productPb.ProductResponse),
  deleteProduct: descriptor('/products.v1.ProductService/DeleteProduct', productPb.DeleteProductRequest, productPb.DeleteProductResponse),
};

class ProductServiceClient {
  constructor(hostname, credentials, options) {
    if (!options) options = {};
    options.format = 'text';
    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = String(hostname).replace(/\/+$/, '');
  }

  createProduct(request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ + methods.createProduct.path, request, metadata || {}, methods.createProduct.descriptor, callback);
  }
  getProduct(request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ + methods.getProduct.path, request, metadata || {}, methods.getProduct.descriptor, callback);
  }
  listProducts(request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ + methods.listProducts.path, request, metadata || {}, methods.listProducts.descriptor, callback);
  }
  updateProduct(request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ + methods.updateProduct.path, request, metadata || {}, methods.updateProduct.descriptor, callback);
  }
  deleteProduct(request, metadata, callback) {
    return this.client_.rpcCall(this.hostname_ + methods.deleteProduct.path, request, metadata || {}, methods.deleteProduct.descriptor, callback);
  }
}

module.exports = { ProductServiceClient };
