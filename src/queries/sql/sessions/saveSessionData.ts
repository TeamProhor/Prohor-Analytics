import { DATA_TYPE } from '@/lib/constants';
import { uuid } from '@/lib/crypto';
import { flattenJSON, getStringValue } from '@/lib/data';
import prisma from '@/lib/prisma';
import type { DynamicData } from '@/lib/types';

export interface SaveSessionDataArgs {
  websiteId: string;
  sessionId: string;
  sessionData: DynamicData;
  distinctId?: string;
  createdAt?: Date;
}

export async function saveSessionData(data: SaveSessionDataArgs) {
  return relationalQuery(data);
}

export async function relationalQuery({
  websiteId,
  sessionId,
  sessionData,
  distinctId,
  createdAt,
}: SaveSessionDataArgs) {
  const { client } = prisma;

  const jsonKeys = flattenJSON(sessionData);

  const flattenedData = jsonKeys.map(a => ({
    id: uuid(),
    websiteId,
    sessionId,
    dataKey: a.key,
    stringValue: getStringValue(a.value, a.dataType),
    numberValue: a.dataType === DATA_TYPE.number ? a.value : null,
    dateValue: a.dataType === DATA_TYPE.date ? new Date(a.value) : null,
    dataType: a.dataType,
    distinctId,
    createdAt,
  }));

  for (const data of flattenedData) {
    const { sessionId, dataKey, ...props } = data;

    // Try to update existing record using compound where clause
    // This is safer than using id from a previous query due to race conditions
    const updateResult = await client.sessionData.updateMany({
      where: {
        sessionId,
        dataKey,
      },
      data: {
        ...props,
      },
    });

    // If no record was updated, create a new one
    if (updateResult.count === 0) {
      await client.sessionData.create({
        data,
      });
    }
  }
}
