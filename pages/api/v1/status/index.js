import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const dbVersionResult = await database.query("SHOW server_version;");

  const pgVersion = dbVersionResult.rows[0].server_version;

  const dbMaxConnectionsResult = await database.query("SHOW max_connections;");

  const maxConnections = dbMaxConnectionsResult.rows[0].max_connections;

  const activeConnectionsRes = await database.query(
    "SELECT count(*)::int FROM pg_stat_activity WHERE datname = current_database();",
  );

  const activeConnections = activeConnectionsRes.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        version: pgVersion,
        max_connections: maxConnections,
        active_connections: activeConnections,
      },
    },
  });
}
export default status;
