import getCurrentUser from "./actions/getCurrentUser";
import getListings, { type IListingsParams } from "./actions/getListings";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import type { SafeListing } from "./types";

export const dynamic = "force-dynamic";
interface HomeProps {
  searchParams: IListingsParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="grid grid-cols-1 gap-8 pt-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing: SafeListing) => {
          return <ListingCard currentUser={currentUser} key={listing.id} data={listing} />;
        })}
      </div>
    </Container>
  );
};

export default Home;
