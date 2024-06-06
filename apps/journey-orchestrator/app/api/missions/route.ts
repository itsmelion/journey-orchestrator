import { expeditionMock } from '@journey-orchestrator/services';

export async function GET(request: Request) {
  return Response.json(expeditionMock);
}
