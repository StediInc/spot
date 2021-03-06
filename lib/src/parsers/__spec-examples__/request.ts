import {
  body,
  headers,
  pathParams,
  queryParams,
  request
} from "@stediinc/spot";

class RequestClass {
  notRequest() {}

  @request
  parameterlessRequest() {}

  @request
  request(
    @headers
    headers: {
      property: string;
    },
    @pathParams
    pathParams: {
      property: string;
    },
    @queryParams
    queryParams: {
      property: string;
    },
    @body body: string
  ) {}
}
