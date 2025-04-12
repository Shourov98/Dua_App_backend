To display the API endpoints on new lines in your `README.md`, you can simply list them using Markdown syntax. Here’s how you can modify the `README.md` file to include the API endpoints clearly:

```markdown
# Dua App Backend

Welcome to the Dua App Backend! This is a Node.js backend application designed to serve the Dua App.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Clone the Repository](#clone-the-repository)
- [Install Dependencies](#install-dependencies)
- [Setup Environment Variables](#setup-environment-variables)
- [Run the Application](#run-the-application)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Clone the Repository

To get started, clone the repository using the following command:

```bash
git clone https://github.com/Shourov98/Dua_App_backend.git
cd Dua_App_backend
```

## Install Dependencies

Once you have cloned the repository, install the required dependencies by running:

```bash
npm install
```

## Setup Environment Variables

Create a `.env` file in the root directory of the project. You can use the following template:

```plaintext
PORT=3050
```

Make sure to save the file after editing.

## Run the Application

To start the Node.js application, run the following command:

```bash
node src/server.js
```

Your application should now be running on [http://localhost:3050](http://localhost:3050).

## API Endpoints

Here are the available API endpoints:

- **Get all duas**: [http://localhost:3050/api/duas](http://localhost:3050/api/duas)
- **Get all categories**: [http://localhost:3050/api/categories](http://localhost:3050/api/categories)
- **Get all subcategories**: [http://localhost:3050/api/subcategories](http://localhost:3050/api/subcategories)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

### Changes Made
- Added a new section titled **API Endpoints**.
- Listed each API endpoint on a new line using bullet points for clarity.

This format makes it easy for users to see the available API endpoints and access them directly.
