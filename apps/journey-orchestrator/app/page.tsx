import { Header, Card, Button, Container, MissionsTable, Stack } from '@journey-orchestrator/components';
import Link from 'next/link';

export default function Index() {
  return (
    <main>
      <Container>
        <Stack align={'stretch'} gap={'2rem'}>
          <Header title="Missions">
            <Link href={'/expedition'}>
              <Button>New Mission</Button>
            </Link>
          </Header>

          <Card>
            <MissionsTable />
          </Card>
        </Stack>
      </Container>
    </main>
  );
}
