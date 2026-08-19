exports.handler = async (event) => {
  const { v4: uuidv4 } = await import('uuid');

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({ id: uuidv4()+" test of control" }),
  };
};