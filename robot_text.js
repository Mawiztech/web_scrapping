const axio = require("axios")

const url = "https://dclm.org/sermons"


axio.get(url)
.then(response => {
    console.log("sermons contents:");
    console.log(response.data);
})

.catch(error =>{ 
    console.log("Error fetching file:",error)
})