import React from "react";
import { Episode } from "../interfaces/interfaces";

const EpisodesContext = React.createContext([] as Episode[]);

export default EpisodesContext;