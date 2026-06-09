import { gunzipSync } from "node:zlib";
import prisma from "@/lib/prisma";

const FUNCTION_NAME = "getReplayChunks";

export interface ReplayChunk {
  sessionId: string;
  visitId: string;
  events: any[];
  chunkIndex: number;
  eventCount: number;
  startedAt: Date;
  endedAt: Date;
}

export async function getReplayChunks(
  websiteId: string,
  visitId: string,
): Promise<ReplayChunk[]> {
  return relationalQuery(websiteId, visitId);
}

async function relationalQuery(
  websiteId: string,
  visitId: string,
): Promise<ReplayChunk[]> {
  const { rawQuery } = prisma;

  const chunks: {
    sessionId: string;
    visitId: string;
    events: Buffer;
    chunkIndex: number;
    eventCount: number;
    startedAt: Date;
    endedAt: Date;
  }[] = await rawQuery(
    `
    select
      session_id as "sessionId",
      visit_id as "visitId",
      events,
      chunk_index as "chunkIndex",
      event_count as "eventCount",
      started_at as "startedAt",
      ended_at as "endedAt"
    from session_replay
    where website_id = {{websiteId::uuid}}
      and visit_id = {{visitId::uuid}}
    order by chunk_index asc
    `,
    { websiteId, visitId },
    FUNCTION_NAME,
  );

  return chunks.map((chunk) => ({
    ...chunk,
    events: JSON.parse(gunzipSync(Buffer.from(chunk.events)).toString("utf-8")),
  }));
}
