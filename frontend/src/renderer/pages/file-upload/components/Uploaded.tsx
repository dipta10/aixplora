import { useState } from 'react';
import { createStyles, Table, ScrollArea, rem } from '@mantine/core';
import { apiCall } from 'renderer/utils/api';

const useStyles = createStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease',

    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      borderBottom: `${rem(1)} solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[3]
          : theme.colors.gray[2]
      }`,
    },
    'th:nth-child(1)': {
      width: '3px',
    },
  },

  tbody: {
    'td:nth-child(1)': {
      button: {
        border: '1px solid',
        background:
          theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
        padding: '5px 10px',
      },
    },
  },

  scrolled: {
    boxShadow: theme.shadows.sm,
  },
}));

interface TableScrollAreaProps {
  data: { id: string; name: string; type: string; size: number }[];
  onClickDeleteRow: (id: string) => any;
}

export default function UploadedTable({
  data,
  onClickDeleteRow,
}: TableScrollAreaProps) {
  const { classes, cx } = useStyles();
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td>
        <button type="button" onClick={() => onClickDeleteRow(row.id)}>
          X
        </button>
      </td>
      <td>{row.name}</td>
      <td>{row.type}</td>
      <td>{Math.floor(row.size / 1000)} kb</td>
    </tr>
  ));

  return (
    <ScrollArea
      h={300}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <thead className={cx(classes.header, { [classes.scrolled]: scrolled })}>
          <tr>
            <th></th>
            <th>name</th>
            <th>type</th>
            <th>size</th>
          </tr>
        </thead>
        <tbody className={classes.tbody}>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
