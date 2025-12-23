import { Link } from 'react-router-dom';
import { Person } from '../types/Person';

interface PersonLinkProps {
  name: string;
  people: Person[];
}

const PersonLink: React.FC<PersonLinkProps> = ({ name, people }) => {
  const foundPerson = people.find(p => p.name === name);

  if (!foundPerson) {
    return <span>{name}</span>;
  }

  return (
    <Link
      to={`/people/${foundPerson.slug}`}
      className={foundPerson.sex === 'f' ? 'has-text-danger' : ''}
    >
      {name}
    </Link>
  );
};

export default PersonLink;
