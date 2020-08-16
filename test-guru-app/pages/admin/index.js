import BasePage from '../../components/layouts/admin/BasePage';
import Header from '../../components/layouts/admin/Header';
import PageWrapper from '../../components/layouts/admin/PageWrapper';
import SideBar from '../../components/layouts/admin/SideBar';

export default function Home() {
  return (
    <BasePage>
      <Header />
      <SideBar />
      <PageWrapper>
        Admin

      </PageWrapper>
    </BasePage>
  )
}
