import fetch from 'isomorphic-unfetch'

export default (options = {}) => async (key) => {
  const { headers, ...otherOptions } = options;

  const res = await fetch(
    `https://api.thecatapi.com/v1/${key}`,
    {
      headers: new Headers({
        'x-api-key': process.env.REACT_APP_API_KEY,
        ...headers,
      }),
      ...otherOptions,
    }
  );

  if (!res.ok) { throw res }
  return await res.json()
}
