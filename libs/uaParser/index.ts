import uaParser from "ua-parser-js";
import {IncomingMessage} from "http";

export const isMobile = (req?: IncomingMessage) => {
  if (! req) {
    return false;
  }

  const ua = uaParser(req.headers['user-agent'])

  return ua.device.type === 'mobile'
}
