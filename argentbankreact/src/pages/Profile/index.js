import { useSelector } from "react-redux";
import Account from "../../components/Account";
import ProfileHeader from "../../components/ProfileHeader";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import { userAccounts } from "../../services/datas/userAccounts";
import "./style.scss";

const Profile = () => {
  const token = useSelector((state) => state.user.value.token);
  return (
    <>
      <Header />
      <main className="bg-dark userContainer">
        {token && (
          <>
            <ProfileHeader />
            <h2 className="sr-only">Accounts</h2>
            <Account accounts={userAccounts} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Profile;
