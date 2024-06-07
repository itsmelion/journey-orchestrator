import { Header, Button, Container, Stack } from '@journey-orchestrator/components';
import Link from 'next/link';
import { ExpeditionForm } from './expedition-form';

export default function ExpeditionEditor() {
  return (
    <main>
      <Container>
        <Stack align={'stretch'} gap={'2rem'}>
          <Header title="Configure a new mission">
            <Link href={'/'}>
              <Button>Cancel</Button>
            </Link>
          </Header>

          <ExpeditionForm />
        </Stack>
      </Container>
    </main>
  );
}
