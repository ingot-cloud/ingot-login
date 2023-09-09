import Http from "@/net";
import type { R } from "@/models";

/**
 * 预授权
 */
export function PreAuthorizeAPI(): Promise<R<string>> {
  return Http.get<string>("/oauth2/test", null, {
    permit: true,
  });
}
