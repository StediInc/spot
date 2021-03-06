import {
  api,
  body,
  endpoint,
  headers,
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
class EndpointWithRequestHeaders {
  @request
  request(
    @headers
    headers: {
      "Accept-Encoding"?: String;
      "Accept-Language": String;
    }
  ) {}

  @response({ status: 200 })
  successResponse(@body body: { id: String; name: String }[]) {}
}
