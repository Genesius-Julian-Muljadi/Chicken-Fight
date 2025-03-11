import { AccessTokenUser } from "@/interfaces/accesstokens";
import Header from "./Header";
import VerifyTokenServer from "@/verifytoken/verifytokenserver";

export default async function HeaderServer() {
  const token: AccessTokenUser | null = await VerifyTokenServer();

  return <Header token={token} />;
}
