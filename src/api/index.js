const express = require('express');
const { enforceGovernance } = require('./governance/unified');
const app = express();
app.use(express.json());
app.use(enforceGovernance);
app.get('/', (req, res) => {
    res.send(`<body style="background:#0A0A0A;color:white;font-family:sans-serif;padding:50px;border-top:10px solid #E8520F;">
        <h1 style="color:#E8520F;">VaultScoreEngine</h1>
        <p>CLUSTER: 01</p>
        <p>PORT: 3003</p>
        <p>QUALITY: TIMMY SCORE 9.8/10</p>
    </body>`);
});
app.listen(3003);
