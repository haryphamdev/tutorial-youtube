let handleWebHelloWorld = (req, res) => {
    return res.render("main/homepage.ejs");
};

let handleWebTestApi = (req, res) =>{
    return res.json({
        message: "success",
        data: "hello world"
    })
};

module.exports = {
    handleWebHelloWorld: handleWebHelloWorld,
    handleWebTestApi: handleWebTestApi
};

