const app = require('./src/app');

// Initialise database (runs migrations + seed on first start)
require('./src/database');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Zuidplas API actief op http://localhost:${PORT}`);
});
