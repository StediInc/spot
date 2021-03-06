import {
  api,
  body,
  endpoint,
  request,
  response,
  String
} from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "GET",
  path: "/users"
})
class GetEndpoint {
  @request
  request() {}

  @response({ status: 200 })
  successResponse(@body body: Body) {}
}

interface Body {
  body: String;
}
