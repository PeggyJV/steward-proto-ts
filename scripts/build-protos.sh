#!/usr/bin/env bash

set -e

REPO_ROOT=$(git rev-parse --show-toplevel)
SCRIPT_DIR=$REPO_ROOT/scripts
PROTO_PATH=$REPO_ROOT/proto/steward/v4

echo "Generating TypeScript code from proto files..."

protoc \
    --plugin=protoc-gen-ts=$REPO_ROOT/node_modules/.bin/protoc-gen-ts \
    --ts_opt=esModuleInterop=true \
    --proto_path=$PROTO_PATH \
    --ts_out=$REPO_ROOT/src/ \
    $PROTO_PATH/*.proto

echo "Done!"
