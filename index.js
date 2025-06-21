const express = require('express');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello from server")
})
app.use('/', schoolRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
