import prisma from "@/lib/prisma";
import type { QueryFilters } from "@/lib/types";

const FUNCTION_NAME = "getWebsiteEventStats";

export interface WebsiteEventStatsData {
  events: number;
  visitors: number;
  visits: number;
  uniqueEvents: number;
}

export async function getWebsiteEventStats(
  ...args: [websiteId: string, filters: QueryFilters]
): Promise<WebsiteEventStatsData[]> {
  return relationalQuery(...args);
}

async function relationalQuery(
  websiteId: string,
  filters: QueryFilters,
): Promise<WebsiteEventStatsData[]> {
  const { parseFilters, rawQuery } = prisma;
  const { filterQuery, joinSessionQuery, cohortQuery, queryParams } =
    parseFilters({
      ...filters,
      websiteId,
    });

  return rawQuery(
    `
    select
      cast(coalesce(sum(t.c), 0) as bigint) as "events",
      count(distinct t.session_id) as "visitors",
      count(distinct t.visit_id) as "visits",
      count(distinct t.event_name) as "uniqueEvents"
    from (
      select
        website_event.session_id,
        website_event.visit_id,
        website_event.event_name,
        count(*) as "c"
      from website_event
      ${cohortQuery}
      ${joinSessionQuery}  
      where website_event.website_id = {{websiteId::uuid}}
        and website_event.created_at between {{startDate}} and {{endDate}}
        and website_event.event_type = 2
        ${filterQuery}
      group by 1, 2, 3
    ) as t
    `,
    queryParams,
    FUNCTION_NAME,
  ).then((result) => result?.[0]);
}
