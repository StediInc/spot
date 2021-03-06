import {
  api,
  body,
  defaultResponse,
  endpoint,
  request,
  response,
  String
} from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "POST",
  path: "/users"
})
class Endpoint {
  @request
  request(
    @body
    body: Body | null
  ) {}

  @response({ status: 200 })
  successResponse(@body body: Body) {}

  @defaultResponse
  defaultResponse(@body body: Body) {}
}

interface Body {
  body: String | null;
}
