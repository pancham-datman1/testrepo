exports.handler = async (event) => {
  const mySecret = process.env.MY_SECRET;
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ message: "NOOOO!", secret: mySecret }),
  };
};
