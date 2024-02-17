"use client";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import * as React from "react";
import { IoIosChatboxes } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { MdInsights } from "react-icons/md";
import { useRouter } from "next/navigation";
import SearchBar from "./recruiter_search";

export interface RecruiterDashboardProps {}

function RecruiterDashboard(props: RecruiterDashboardProps) {
  const router = useRouter();
  const [searchBarKey, setSearchBarKey] = React.useState(0);
  const [showSearchBar, setShowSearchBar] = React.useState(false);

  const handleMessagesClick = () => {
    router.push("/messages");
  };

  const handleSearchCandidatesClick = () => {
    setShowSearchBar(true);
    setSearchBarKey(searchBarKey + 1);
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
    {showSearchBar && <SearchBar key={searchBarKey} clicked={true}/>}
      <div className="flex flex-col">
        <div className="flex gap-5 pb-5">
          <button onClick={handleMessagesClick}>
            <Card className="items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10">
              <CardContent>
                <IoIosChatboxes size={48} />
              </CardContent>
              <CardTitle>Messages</CardTitle>
            </Card>
          </button>
          <button>
            <Card className="items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10">
              <CardContent>
                <SiGooglemeet size={48} />
              </CardContent>
              <CardTitle className="">Interviews</CardTitle>
            </Card>
          </button>
        </div>
        <div className="flex gap-5">
          <button onClick={handleSearchCandidatesClick}>
            <Card className="items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10">
              <CardContent>
                <IoIosSearch size={48} />
              </CardContent>
              <CardTitle>
                Search <br></br> Candidates
              </CardTitle>
            </Card>
          </button>
          <button>
            <Card className="items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10">
              <CardContent>
                <MdInsights size={48} />
              </CardContent>
              <CardTitle>Insights</CardTitle>
            </Card>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecruiterDashboard;
