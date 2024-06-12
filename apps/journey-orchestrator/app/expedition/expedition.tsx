'use client';
import { Header, Button, Container, Stack } from '@journey-orchestrator/components';
import { useRouter } from 'next/navigation';
import { ExpeditionForm } from './expedition-form/expedition-form';

export default function ExpeditionEditor() {
  const router = useRouter();

  return (
    <main>
      <Container>
        <Stack align={'stretch'} gap={'2rem'}>
          <Header title="Configure a new mission">
            <Button onClick={() => router.back()}>
              Cancel
            </Button>
          </Header>

          <ExpeditionForm />
        </Stack>
      </Container>
    </main>
  );
}
