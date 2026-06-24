// Shared types for suburb data. Imported by SuburbHero and any future
// components that consume data/suburbs.json.
import suburbs from "@/data/suburbs.json";

export type Suburb = (typeof suburbs)[number];
