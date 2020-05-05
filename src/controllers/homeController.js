let handleWebHelloWorld = (req, res) => {
    return res.send ("hello world from controller");
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

