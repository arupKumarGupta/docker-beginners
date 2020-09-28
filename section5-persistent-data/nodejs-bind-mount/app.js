import express from 'express';
import cors from 'cors';
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  return res.json({"success": true})
})
app.get('/healthCheck', (req, res) => {
  return res.json({health: "ok"})
});
app.get('/new', (req, res)=> res.json({newEp:'still working'}))

app.listen(PORT, (err)=> {
  if(err) {
    console.error(`Error occured: {err}`);
  } else {
    console.log(`Listening on port ${PORT}`);
  }
})

