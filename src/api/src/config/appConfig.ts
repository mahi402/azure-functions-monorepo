export interface ObservabilityConfig {
    connectionString: string
    roleName: string
}

export interface IConfig {
    get<T>(key: string): T; 
  }
export interface DatabaseConfig {
    connectionString: string
    databaseName: string
}

export interface AppConfig {
    observability: ObservabilityConfig
    database: DatabaseConfig
}
