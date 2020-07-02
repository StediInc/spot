import { api, endpoint, response } from "@stediinc/spot";

@api({ name: "contract" })
class Contract {}

@endpoint({
  method: "GET",
  path: "/users"
})
class Endpoint {
  @response({ status: 200 })
  successResponse() {}
}
