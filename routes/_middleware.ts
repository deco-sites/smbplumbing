import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 519,
  site: "smbplumbing",
  domains: ["smbplumbing.deco.site"],
});