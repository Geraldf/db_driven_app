interface ErrorMessages {
  [code: string]: string
}

const errorText: ErrorMessages = {
  P1000:
    "Authentication failed against database server at {database_host}, the provided database credentials for {database_user} are not valid. Please make sure to provide valid database credentials for the database server at {database_host}.",
  P1001:
    "Can't reach database server at {database_host}:{database_port} Please make sure your database server is running at {database_host}:{database_port}.",
  P1002:
    "The database server at {database_host}:{database_port} was reached but timed out. Please try again. Please make sure your database server is running at {database_host}:{database_port}.",
  P1003:
    "Database {database_file_name} does not exist at {database_file_path} Database {database_name}.{database_schema_name} does not exist on the database server at {database_host}:{database_port}. Database {database_name} does not exist on the database server at {database_host}:{database_port}.",
  P1008: "Operations timed out after {time}",
  P1009:
    "Database {database_name} already exists on the database server at {database_host}:{database_port}",
  P1010:
    "User {database_user} was denied access on the database {database_name}",
  P1011: "Error opening a TLS connection: {message}",
  P1012:
    "Note: If you get error 1012 after you upgrade Prisma ORM to version 4.0.0 or later, see the version 4.0.0 upgrade guide. A schema that was valid before version 4.0.0 might be invalid in version 4.0.0 and later. The upgrade guide explains how to update your schema to make it valid. {full_error} Possible P1012 error messages: Argument {} is missing. Function {} takes {} arguments, but received {}. Argument {} is missing in attribute @{}. Argument {} is missing in data source block {}. Argument {} is missing in generator block {}. Error parsing attribute @{}: {} Attribute @{} is defined twice. The model with database name {} could not be defined because another model with this name exists: {} {} is a reserved scalar type name and can not be used. The {} {} cannot be defined because a {} with that name already exists. Key {} is already defined in {}. Argument {} is already specified as unnamed argument. Argument {} is already specified. No such argument. Field {} is already defined on model {}. Field {} in model {} can't be a list. The current connector does not support lists of primitive types. The index name {} is declared multiple times. With the current connector index names have to be globally unique. Value {} is already defined on enum {}. Attribute not known: @{}. Function not known: {}. Datasource provider not known: {}. shadowDatabaseUrl is the same as url for datasource {}. Please specify a different database as shadow database. The preview feature {} is not known. Expected one of: {} {} is not a valid value for {}. Type {} is neither a built-in type, nor refers to another model, custom type, or enum. Type {} is not a built-in type. Unexpected token. Expected one of: {} Environment variable not found: {}. Expected a {} value, but received {} value {}. Expected a {} value, but failed while parsing {}: {}. Error validating model {}: {} Error validating field {} in model {}: {} Error validating datasource {datasource}: {message} Error validating enum {}: {} Error validating: {}",
  P1013: "The provided database string is invalid. {details}",
  P1014: "The underlying {kind} for model {model} does not exist.",
  P1015:
    "Your Prisma schema is using features that are not supported for the version of the database. Database version: {database_version} Errors: {errors}",
  P1016:
    "Your raw query had an incorrect number of parameters. Expected: {expected}, actual: {actual}.",
  P1017: "Server has closed the connection.",
  P2000:
    "The provided value for the column is too long for the column's type. Column: {column_name}",
  P2001:
    "The record searched for in the where condition ({model_name}.{argument_name} = {argument_value}) does not exist",
  P2002: "Unique constraint failed on the {constraint}",
  P2003: "Foreign key constraint failed on the field: {field_name}",
  P2004: "A constraint failed on the database: {database_error}",
  P2005:
    "The value {field_value} stored in the database for the field {field_name} is invalid for the field's type",
  P2006:
    "The provided value {field_value} for {model_name} field {field_name} is not valid",
  P2007: "Data validation error {database_error}",
  P2008: "Failed to parse the query {query_parsing_error} at {query_position}",
  P2009:
    "Failed to validate the query: {query_validation_error} at {query_position}",
  P2010: "Raw query failed. Code: { Message: {message}",
  P2011: "Null constraint violation on the {constraint}",
  P2012: "Missing a required value at {path}",
  P2013:
    "Missing the required argument {argument_name} for field {field_name} on {object_name}.",
  P2014:
    "The change you are trying to make would violate the required relation '{relation_name}' between the {model_a_name} and {model_b_name} models.",
  P2015: "A related record could not be found. {details}",
  P2016: "Query interpretation error. {details}",
  P2017:
    "The records for relation {relation_name} between the {parent_name} and {child_name} models are not connected.",
  P2018: "The required connected records were not found. {details}",
  P2019: "Input error. {details}",
  P2020: "Value out of range for the type. {details}",
  P2021: "The table {table} does not exist in the current database.",
  P2022: "The column {column} does not exist in the current database.",
  P2023: "Inconsistent column data: {message}",
  P2024:
    "Timed out fetching a new connection from the connection pool. (More info: http://pris.ly/d/connection-pool (Current connection pool timeout: {timeout}, connection limit: {connection_limit})",
  P2025:
    "An operation failed because it depends on one or more records that were required but not found. {cause}",
  P2026:
    "The current database provider doesn't support a feature that the query used: {feature}",
  P2027:
    "Multiple errors occurred on the database during query execution: {errors}",
  P2028: "Transaction API error: {error}",
  P2029: "Query parameter limit exceeded error: {message}",
  P2030:
    "Cannot find a fulltext index to use for the search, try adding a @@fulltext",
}

export function getErrorMessageByCode(code: string) {
  return errorText[code] || "Error code not found"
}
