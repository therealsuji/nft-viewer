import { Button, Input, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export const SearchContainer = () => {
  const router = useRouter();
  const searchPublicKey = router.query.id as string;

  const [searchValue, setSearchValue] = useState<string>("");
  useEffect(() => {
    if (searchPublicKey) {
      setSearchValue(searchPublicKey);
    }
  }, [searchPublicKey]);

  return (
    <>
      <Text>View an address</Text>
      <div className="flex items-center gap-2">
        <Input
          width="100%"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Type here 👀"
        />
        <Button
          color="primary"
          onClick={() => router.push(`/search/${searchValue}`)}
        >
          Search
        </Button>
      </div>
    </>
  );
};
