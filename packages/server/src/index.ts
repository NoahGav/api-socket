// Goals
// - Very easy to create typesafe api requests and socket messages.
// - Can export server type to client for type-safety.
// - Automatically validates input schema for requests and messages.
// - Request middleware.

/*
Example:

const controller = Api
  .request(...);

const api = Api
  .merge('controller.', controller)
  .request('login', {...})
  .message('userJoined', {...});

export type ApiServer = typeof api;

// --------------------------------

const client = createClient<ApiServer>(...);
const response = await client.request(...);
const response = await client.send(...);
client.listen(..., () => {...});
*/