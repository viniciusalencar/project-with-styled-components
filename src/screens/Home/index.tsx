import { 
  Container,
  List,
} from './styles';

import { Doctor } from '../../components/Doctor';

const DATA = [
  { id: '1', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '2', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '3', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '4', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '5', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '6', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '7', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '8', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '9', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
  { id: '10', avatar: 'https://github.com/viniciusalencar.png', name: 'Vinicius', specialist: 'Pediatra' },
]

export const Home = () => {
  return (
    <Container>
      <List 
        data={['1', '2', '3', '4']}
        keyExtractor={item => item.id}
        renderItem={(item) => <Doctor type="secondary" data={item} />}
        numColumns={2}
      />
    </Container>
  )
};