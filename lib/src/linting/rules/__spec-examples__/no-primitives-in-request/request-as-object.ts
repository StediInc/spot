import { api, body, request, endpoint, String } from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "GET",
  path: "/users"
})
class Endpoint {
  @request
  request(@body body: Body) {}
}

interface Body {
  body: String;
}
