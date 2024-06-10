import { DataSource, DataSourceOptions } from 'typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const dataSourceOptions: DataSourceOptions =
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('../../config/config.json')[process.env.NODE_ENV || 'development'];

// this file is only for cli migration utils
export default new DataSource(dataSourceOptions);
