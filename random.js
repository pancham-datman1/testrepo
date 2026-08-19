const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "Hello",
            uuid: uuidv4()
        })
    };
};