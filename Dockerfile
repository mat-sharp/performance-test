FROM loadimpact/k6:latest
ENTRYPOINT ["sh", "./performance/test.js"]