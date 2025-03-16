export default function useStatusMessage() {
  const get = (statusCode) => {
    let statusMessage = {
      100: "Continue: Request received, please continue.",
      101: "Switching Protocols: Switching to a different protocol as requested by the client.",
      102: "Processing: Request is being processed but no response is available yet.",
      200: "OK: The request was successful.",
      201: "Created: The resource has been created successfully.",
      202: "Accepted: The request has been accepted for processing, but not completed.",
      203: "Non-Authoritative Information: The request was successful but modified by a proxy.",
      204: "No Content: The request was successful but there is no content to return.",
      205: "Reset Content: The request was successful, please reset the view.",
      206: "Partial Content: Partial data is returned due to range request.",
      300: "Multiple Choices: There are multiple options to choose from.",
      301: "Moved Permanently: The resource has been moved to a new URL permanently.",
      302: "Found: The resource is temporarily located at a different URL.",
      303: "See Other: The response can be found at another URI using a GET method.",
      304: "Not Modified: The resource has not been modified since the last request.",
      307: "Temporary Redirect: The resource is temporarily moved but should be requested with the same method.",
      308: "Permanent Redirect: The resource is permanently moved and should be accessed with the same method.",
      400: "Bad Request: The server could not understand the request due to invalid syntax.",
      401: "Unauthorized: You must be authenticated to access this resource.",
      402: "Payment Required: Reserved for future use. (e.g., Digital payment systems).",
      403: "Forbidden: You do not have permission to access this resource.",
      404: "Not Found: The requested resource could not be found.",
      405: "Method Not Allowed: The request method is not supported for the requested resource.",
      406: "Not Acceptable: The server cannot produce a response matching the list of acceptable values.",
      407: "Proxy Authentication Required: You must authenticate with a proxy before making the request.",
      408: "Request Timeout: The server timed out waiting for the request.",
      409: "Conflict: The request could not be completed due to a conflict with the current state of the resource.",
      410: "Gone: The resource is no longer available and will not be available again.",
      411: "Length Required: The request did not specify the required length.",
      412: "Precondition Failed: One or more conditions given in the request headers were not met.",
      413: "Payload Too Large: The request is larger than the server is willing or able to process.",
      414: "URI Too Long: The URL provided was too long for the server to process.",
      415: "Unsupported Media Type: The server does not support the requested format.",
      416: "Range Not Satisfiable: The range specified by the request cannot be fulfilled.",
      417: "Expectation Failed: The server cannot meet the requirements of the Expect request-header field.",
      429: "Too Many Requests: You have sent too many requests in a given amount of time.",
      500: "Internal Server Error: The server encountered an unexpected condition.",
      501: "Not Implemented: The server does not support the functionality required to fulfill the request.",
      502: "Bad Gateway: The server received an invalid response from the upstream server.",
      503: "Service Unavailable: The server is currently unable to handle the request.",
      504: "Gateway Timeout: The server did not receive a timely response from the upstream server.",
      505: "HTTP Version Not Supported: The server does not support the HTTP protocol version used in the request.",
    };

    return statusMessage[statusCode];
  };

  return { get };
}