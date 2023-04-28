import React from "react";
import { Episode } from "../types/domainTypes";

const EpisodesContext = React.createContext([] as Episode[]);

export default EpisodesContext;