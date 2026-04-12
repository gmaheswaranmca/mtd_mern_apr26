# Create Server App (Node Typescript Express - ES6)
```bash
cd server/
npm init 
npm install express mongoose cors dotenv
npm install -D ts-node-dev typescript
npm install -D @types/cors
npm install -D @types/express @types/node 
```
# server/.gitignore
```gitignore
node_modules/
.env

```

# server/tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "esModuleInterop": true,
    "strict": true
  }
}
```
### 📄 `server/package.json` [Update]

```json
{
  ...
  "main": "index.js",
  "scripts": {
    ...
    "dev": "ts-node-dev --respawn --transpile-only index.ts"
  },
  ...
}
```

# server/.env
```env
TRAINER_APP_PORT=5000
TRAINER_MONGO_URI=mongodb://mongo:27017/trainerdb
``` 

# server/index.ts
```ts
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.TRAINER_APP_PORT || 5000;
const MONGO_URI = process.env.TRAINER_MONGO_URI || "";

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Mongo connected");
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
```

# Run and Test API End Points
## Run 
```
cd server

npm run dev
```

## API End Points Test
1. GET http://localhost:5000/