const axios = require('axios').default;


it('must list items', async () => {
  // Arrange

  const url = 'http://localhost:3000/api/items';

  const headers = {
    'Content-Type': 'application/json'
  };

  // Act

  const good = await axios.post(url, { description: 'new item' }, { headers });
  expect(good.status).toBe(201);

  try {
    await axios.post(url, undefined, { headers });
    throw new Error('should not reach here');
  } catch (error) {
    expect(error.response.status).toBe(400);
  }

  try {
    await axios.post(url, {}, { headers });
    throw new Error('should not reach here');
  } catch (error) {
    expect(error.response.status).toBe(400);
  }

  try {
    await axios.post(url, { description: '' }, { headers });
    throw new Error('should not reach here');
  } catch (error) {
    expect(error.response.status).toBe(400);
  }

});
