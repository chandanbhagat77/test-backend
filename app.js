const express= require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb+srv://prasadparik:I7ikJPIAI1UKf2TI@cluster0.znws3vg.mongodb.net/CRM_DB', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Could not connect to MongoDB', err);
});
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
}
);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);