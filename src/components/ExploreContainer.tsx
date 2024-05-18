import './ExploreContainer.css';

interface ContainerProps {
  name: string,
  title: string
}

const ExploreContainer: React.FC<ContainerProps> = ({ name, title }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
      <hr/>
      <strong>{title}</strong>
      <p>Explore<a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default ExploreContainer;
