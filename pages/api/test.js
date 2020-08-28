export default (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(
    JSON.stringify({
      firstKey: process.env.FIRST_KEY,
      secondKey: process.env.SECOND_KEY,
      thirdKey: process.env.THIRD_KEY,
    })
  );
};
