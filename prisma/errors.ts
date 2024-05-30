export const errorText = {
  errors: [
    {
      code: "P1000",
      message:
        "Authentication failed against database server at {database_host}, the provided database credentials for {database_user} are not valid. Please make sure to provide valid database credentials for the database server at {database_host}.",
    },
    {
      code: "P1001",
      message:
        "Can't reach database server at {database_host}:{database_port} Please make sure your database server is running at {database_host}:{database_port}.",
    },
    {
      code: "P1002",
      message:
        "The database server at {database_host}:{database_port} was reached but timed out. Please try again. Please make sure your database server is running at {database_host}:{database_port}.",
    },
    {
      code: "P1003",
      message:
        "Database {database_file_name} does not exist at {database_file_path} Database {database_name}.{database_schema_name} does not exist on the database server at {database_host}:{database_port}. Database {database_name} does not exist on the database server at {database_host}:{database_port}.",
    },
    {
      code: "P1008",
      message: "Operations timed out after {time}",
    },
    {
      code: "P1009",
      message:
        "Database {database_name} already exists on the database server at {database_host}:{database_port}",
    },
    {
      code: "P1010",
      message:
        "User {database_user} was denied access on the database {database_name}",
    },
    {
      code: "P1011",
      message: "Error opening a TLS connection: {message}",
    },
    {
      code: "P1012",
      message:
        "Note: If you get error code P1012 after you upgrade Prisma ORM to version 4.0.0 or later, see the version 4.0.0 upgrade guide. A schema that was valid before version 4.0.0 might be invalid in version 4.0.0 and later. The upgrade guide explains how to update your schema to make it valid. {full_error} Possible P1012 error messages: Argument {} is missing. Function {} takes {} arguments, but received {}. Argument {} is missing in attribute @{}. Argument {} is missing in data source block {}. Argument {} is missing in generator block {}. Error parsing attribute @{}: {} Attribute @{} is defined twice. The model with database name {} could not be defined because another model with this name exists: {} {} is a reserved scalar type name and can not be used. The {} {} cannot be defined because a {} with that name already exists. Key {} is already defined in {}. Argument {} is already specified as unnamed argument. Argument {} is already specified. No such argument. Field {} is already defined on model {}. Field {} in model {} can't be a list. The current connector does not support lists of primitive types. The index name {} is declared multiple times. With the current connector index names have to be globally unique. Value {} is already defined on enum {}. Attribute not known: @{}. Function not known: {}. Datasource provider not known: {}. shadowDatabaseUrl is the same as url for datasource {}. Please specify a different database as shadow database. The preview feature {} is not known. Expected one of: {} {} is not a valid value for {}. Type {} is neither a built-in type, nor refers to another model, custom type, or enum. Type {} is not a built-in type. Unexpected token. Expected one of: {} Environment variable not found: {}. Expected a {} value, but received {} value {}. Expected a {} value, but failed while parsing {}: {}. Error validating model {}: {} Error validating field {} in model {}: {} Error validating datasource {datasource}: {message} Error validating enum {}: {} Error validating: {}",
    },
    {
      code: "P1013",
      message: "The provided database string is invalid. {details}",
    },
    {
      code: "P1014",
      message: "The underlying {kind} for model {model} does not exist.",
    },
    {
      code: "P1015",
      message:
        "Your Prisma schema is using features that are not supported for the version of the database. Database version: {database_version} Errors: {errors}",
    },
    {
      code: "P1016",
      message:
        "Your raw query had an incorrect number of parameters. Expected: {expected}, actual: {actual}.",
    },
    {
      code: "P1017",
      message: "Server has closed the connection.",
    },
    {
      code: "P2000",
      message:
        "The provided value for the column is too long for the column's type. Column: {column_name}",
    },
    {
      code: "P2001",
      message:
        "The record searched for in the where condition ({model_name}.{argument_name} = {argument_value}) does not exist",
    },
    {
      code: "P2002",
      message: "Unique constraint failed on the {constraint}",
    },
    {
      code: "P2003",
      message: "Foreign key constraint failed on the field: {field_name}",
    },
    {
      code: "P2004",
      message: "A constraint failed on the database: {database_error}",
    },
    {
      code: "P2005",
      message:
        "The value {field_value} stored in the database for the field {field_name} is invalid for the field's type",
    },
    {
      code: "P2006",
      message:
        "The provided value {field_value} for {model_name} field {field_name} is not valid",
    },
    {
      code: "P2007",
      message: "Data validation error {database_error}",
    },
    {
      code: "P2008",
      message:
        "Failed to parse the query {query_parsing_error} at {query_position}",
    },
    {
      code: "P2009",
      message:
        "Failed to validate the query: {query_validation_error} at {query_position}",
    },
    {
      code: "P2010",
      message: "Raw query failed. Code: {code}. Message: {message}",
    },
    {
      code: "P2011",
      message: "Null constraint violation on the {constraint}",
    },
    {
      code: "P2012",
      message: "Missing a required value at {path}",
    },
    {
      code: "P2013",
      message:
        "Missing the required argument {argument_name} for field {field_name} on {object_name}.",
    },
    {
      code: "P2014",
      message:
        "The change you are trying to make would violate the required relation '{relation_name}' between the {model_a_name} and {model_b_name} models.",
    },
    {
      code: "P2015",
      message: "A related record could not be found. {details}",
    },
    {
      code: "P2016",
      message: "Query interpretation error. {details}",
    },
    {
      code: "P2017",
      message:
        "The records for relation {relation_name} between the {parent_name} and {child_name} models are not connected.",
    },
    {
      code: "P2018",
      message: "The required connected records were not found. {details}",
    },
    {
      code: "P2019",
      message: "Input error. {details}",
    },
    {
      code: "P2020",
      message: "Value out of range for the type. {details}",
    },
    {
      code: "P2021",
      message: "The table {table} does not exist in the current database.",
    },
    {
      code: "P2022",
      message: "The column {column} does not exist in the current database.",
    },
    {
      code: "P2023",
      message: "Inconsistent column data: {message}",
    },
    {
      code: "P2024",
      message:
        "Timed out fetching a new connection from the connection pool. (More info: http://pris.ly/d/connection-pool (Current connection pool timeout: {timeout}, connection limit: {connection_limit})",
    },
    {
      code: "P2025",
      message:
        "An operation failed because it depends on one or more records that were required but not found. {cause}",
    },
    {
      code: "P2026",
      message:
        "The current database provider doesn't support a feature that the query used: {feature}",
    },
    {
      code: "P2027",
      message:
        "Multiple errors occurred on the database during query execution: {errors}",
    },
    {
      code: "P2028",
      message: "Transaction API error: {error}",
    },
    {
      code: "P2029",
      message: "Query parameter limit exceeded error: {message}",
    },
    {
      code: "P2030",
      message:
        "Cannot find a fulltext index to use for the search, try adding a @@fulltext",
    },
  ],
}

export function getErrorMessageByCode(code: string) {
  const error = errorText.errors.find((error) => error.code === code)
  return error ? error.message : "Error code not found"
}
