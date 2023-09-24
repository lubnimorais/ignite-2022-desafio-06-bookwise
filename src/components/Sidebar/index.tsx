import { Navigation } from '../Navigation';
import { SidebarContainer } from './styles';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div>
        <img className="logo" src="/images/logo.svg" alt="BookWise Logo" />

        <Navigation />
      </div>
    </SidebarContainer>
  );
};

export { Sidebar };
