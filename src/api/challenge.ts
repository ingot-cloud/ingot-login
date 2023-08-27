import Http from "@/net";
import type { R } from "@/models";

/**
 * 列表
 */
export function TestAPI(): Promise<R<string>> {
  return Http.get<string>("/oauth2/test", null, {
    permit: true,
  });
}
