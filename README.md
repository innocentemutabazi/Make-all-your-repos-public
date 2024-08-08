
# Make All GitHub Repositories Public

This Node.js script allows you to quickly make all your private GitHub repositories public in one go. It's a handy tool for developers who want to share their work with the community effortlessly.

## Features

- Makes all private repositories public.
- Skips repositories that are already public.
- Easy setup using environment variables for security.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- A [GitHub Personal Access Token (PAT)](https://github.com/settings/tokens) with `repo` permissions.

## Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/innocentemutabazi/Make-all-your-repos-public.git
   cd Make-all-your-repos-public
   ```

2. **Install dependencies:**

   ```bash
   npm install dotenv
   ```

3. **Create a `.env` file:**

   In the root directory of the project, create a `.env` file and add your GitHub username and PAT:

   ```bash
   GITHUB_USERNAME=your_github_username
   GITHUB_TOKEN=your_personal_access_token
   ```

   Replace `your_github_username` and `your_personal_access_token` with your actual GitHub username and PAT.

4. **Run the script:**

   ```bash
   node make_repos_public.js
   ```

   The script will iterate through all your repositories and make any private ones public.

## Environment Variables

- `GITHUB_USERNAME`: Your GitHub username.
- `GITHUB_TOKEN`: Your GitHub Personal Access Token with `repo` scope.

## Troubleshooting

- **403 Forbidden Error**: If you encounter a `403 Forbidden` error, it might be because the repository is archived. Unarchive the repository and rerun the script.

## Contributing

Feel free to fork this repository and submit a pull request with any improvements or additional features!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
