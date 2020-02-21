'use strict';

import * as d3 from 'd3';

import { indicators } from './indicator';
import { accessors } from './accessor';
import { svg } from './svg';
import { plot } from './plot';
import { scale } from './scale';
import { version } from '../build/version';

module.exports = (function() {
    return {
      version: version,
      accessor: accessors(),
      indicator: indicators(d3),
      plot: plot(d3),
      scale: scale(d3),
      svg: svg(d3)
    };
})();

