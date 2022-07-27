import { PORT } from "./config.js";
import app from "./app.js";
import './telegram.js'

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});