#/bin/sh
tsc && gulp && rm -rf types/*.d.ts && mv dist/*.d.ts types && rm -rf dist