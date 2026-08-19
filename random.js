exports.handler = async (event) => {
  const { v4: uuidv4 } = await import('uuid'); // ✅ Works!

  return {
    statusCode: 200,
    body: JSON.stringify({ id: uuidv4() }),
  };
};