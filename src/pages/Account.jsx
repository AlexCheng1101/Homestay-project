import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";
function Account() {
  return (
    <>
      <Heading as="h1">更新帳戶</Heading>

      <Row>
        <Heading as="h3">更新帳號</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">更新密碼</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
