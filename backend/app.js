const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    // 89c4cd71-4305-4d4d-92ee-745440c8f5b6

    try {
        const request = await axios.put(
            "https://api.chatengine.io/users/", 
            {
                username: username,
                secret: username,
                first_name: username
            }, 
            {
                headers: {
                    "private-key": "89c4cd71-4305-4d4d-92ee-745440c8f5b6"
                }
            }
        );

        return res.status(request.status).json(request.data);
    }
    catch (err) {
        return res.status(err.response.status).json(err.response.data);
    }
});

app.listen(3001);