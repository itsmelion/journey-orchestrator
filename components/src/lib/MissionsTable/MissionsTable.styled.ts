import styled from '@emotion/styled';

export const TableStyles = styled.div({
  'position': 'relative',
  'maxHeight': '70vh',
  'overflowY': 'auto',

  'table': {
    width: '100%',
    tableLayout: 'fixed',
  },
  'thead': {
    position: 'sticky',
    backgroundColor: '#11151E',
    top: 0,
  },

  'thead, tbody': {
    width: '100%',
  },

  'td, th': {
    textAlign: 'left',
    padding: '1rem',
    borderBottom: '1pt solid rgba(0,0,0,0.5)',
  },

  'tbody': {
  },
});
