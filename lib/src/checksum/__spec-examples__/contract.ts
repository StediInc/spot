import { api, body, endpoint, response, String } from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "GET",
  path: "/users"
})
class Endpoint {
  @response({ status: 200 })
  successResponse(@body body: Body) {}
}

interface Body {
  union: String | null;
}
