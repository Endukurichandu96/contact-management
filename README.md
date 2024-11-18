# contact-management
Documentation: Database Choice
Database Used: PostgreSQL
1. Reason for Choosing PostgreSQL:

Relational Data Structure: PostgreSQL is a relational database, which is a great fit for this project because it involves a clear and structured schema for contact management. Each contact has specific attributes like firstName, lastName, email, etc., making it ideal for a tabular, relational model.

ACID Compliance: PostgreSQL is known for its strong adherence to ACID (Atomicity, Consistency, Isolation, Durability) principles. This is essential for maintaining data integrity, especially when dealing with operations like updating or deleting contact details.

Scalability: PostgreSQL handles large volumes of data well and offers various features for scaling vertically and horizontally. This is useful if the application grows and the number of contacts or users increases.

Support for Complex Queries: PostgreSQL's rich querying capabilities, including support for complex joins, indexing, and full-text search, make it suitable for efficient querying and retrieval of contact details.

Compatibility with Prisma: PostgreSQL integrates seamlessly with Prisma ORM, allowing for easy schema management, migrations, and query handling. Prisma provides type-safe database access, reducing runtime errors and enhancing development productivity.

2. How PostgreSQL Fits the Project:

This project is a simple Contact Management API, where CRUD (Create, Read, Update, Delete) operations are essential. PostgreSQL provides the reliability, speed, and flexibility needed for these types of operations. The Prisma ORM acts as a bridge, allowing us to write database queries in TypeScript, which fits well with the existing Express.js API architecture.

By using PostgreSQL, we also ensure that the application can easily scale to support more complex features like search and filtering, and can be extended to include additional tables and relationships in the future (e.g., associating contacts with projects or tasks).

Summary: PostgreSQL's strong relational capabilities, combined with Prisma's type-safe ORM features, make it an excellent choice for this contact management project, ensuring reliable data handling and smooth integration with the Node.js and TypeScript stack.

#Steps to run Application
 - Create a .env file in the root directory with the following parameter:
DATABASE_URL="postgresql://root:root@localhost:5432/contacts?schema=contact-mgmt-db"
 - Run "npm run dev" to start the application in development environment.
 - Run "npm run build" to compile the TypeScript code for production.
 - Run "npm run start" to start the application in production environment.