import React from "react";

import { Episode } from "../models/Episode";


const EpisodesContext = React.createContext([] as Episode[]);

export default EpisodesContext;