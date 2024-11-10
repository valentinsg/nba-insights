import type React from "react";

export type Team = {
  name: string;
  slug: string;
  division: string;
  conference: string;
  image: ImageMetadata;
  logo: ImageMetadata;
  courtImage: string;
  city: string;
  owner: string;
  titles: number;
  playoffAppearances: number;
  colors: string[];
  stadiumCapacity: number;
  retiredNumbers: number[];
};