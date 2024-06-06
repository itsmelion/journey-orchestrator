'use client';
import { Suspense } from 'react';
import { BulletList } from 'react-content-loader';
import { Expedition, useExpeditions } from '@journey-orchestrator/services';
import { FiEdit } from 'react-icons/fi';

import { TableStyles } from './MissionsTable.styled';
import { Input } from '../form/input';
import { useRouter } from 'next/navigation';
import { IconButton } from '../buttons/IconButton/IconButton.styled';

export const MissionsTable = () => {
  const { data } = useExpeditions();

  return (
    <TableStyles>
      <table>
        <thead>
          <tr>
            <th scope="col">
              <Input type="search" placeholder="search mission" />
            </th>

            <th scope="col">
              Members
            </th>

            <th scope="col">
              Destination
            </th>

            <th scope="col">
              Departure
            </th>

            <th />
          </tr>
        </thead>

        <tbody>
          <Suspense fallback={ <BulletList /> }>
            {data.map(item => <Row key={ item.id } expedition={ item } />)}
          </Suspense>
        </tbody>
      </table>
    </TableStyles>
  );
};

const Row = (props: React.PropsWithoutRef<{ expedition: Expedition }>) => {
  const { expedition, ...rest } = props;
  const router = useRouter();
  const goToExpedition = () => router.push(`/expedition/${expedition.id}`);

  return (
    <tr { ...rest }>
      <td>{expedition.name}</td>
      <td>{expedition.members.length}</td>
      <td>{expedition.destination}</td>
      <td>{expedition.departure}</td>
      <td>
        <IconButton onClick={ goToExpedition }>
          <FiEdit />
        </IconButton>
      </td>
    </tr>
  );
};
