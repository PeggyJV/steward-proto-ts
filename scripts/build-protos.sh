#!/usr/bin/env bash

set -e

REPO_ROOT=$(git rev-parse --show-toplevel)
SCRIPT_DIR=$REPO_ROOT/scripts
PROTO_PATH=$REPO_ROOT/proto/steward/v4

echo "Generating TypeScript code from proto files..."

protoc --plugin=protoc-gen-ts_proto=$REPO_ROOT/node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_opt=outputClientImpl=true \
    --proto_path=$PROTO_PATH \
    --ts_proto_out=$REPO_ROOT/src/ \
    $PROTO_PATH/*.proto
