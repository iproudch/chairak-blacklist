import Header from "../components/Header";
import { AllBlacklistOverviews } from "../components/list/AllBlacklistOverviews";

export default function AllBlacklistPage() {
  return (
    <>
      <Header label="List" />
      <AllBlacklistOverviews />;
    </>
  );
}
