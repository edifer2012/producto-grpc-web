#!/usr/bin/env sh
set -eu

ROOT="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
OUT="$ROOT/web/src/grpc"

# Si protoc-gen-js fue instalado con npm dentro de web/, se agrega al PATH.
if [ -d "$ROOT/web/node_modules/.bin" ]; then
  PATH="$ROOT/web/node_modules/.bin:$PATH"
  export PATH
fi

mkdir -p "$OUT"

for tool in protoc protoc-gen-js protoc-gen-grpc-web; do
  if ! command -v "$tool" >/dev/null 2>&1; then
    echo "ERROR: $tool no está disponible en PATH" >&2
    exit 1
  fi
done

protoc -I="$ROOT/proto" "$ROOT/proto/product.proto" \
  --js_out=import_style=commonjs:"$OUT" \
  --grpc-web_out=import_style=commonjs,mode=grpcwebtext:"$OUT"

echo "Stubs gRPC-Web regenerados en $OUT"
