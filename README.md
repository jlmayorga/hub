# Getting Started

This is a site designed to collect and consolidate useful information about using Red Hat technologies.

## Local development

The project includes a devcontainer that provides everything needed to build and preview the site without installing any tooling locally.

**Requirements:** VS Code with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers), or any devcontainer-compatible editor.

1. Open the repository in VS Code
2. When prompted, click **Reopen in Container** (or run `Dev Containers: Reopen in Container` from the command palette)
3. Once the container is ready, start the development server:
   - Open the command palette (`Ctrl+Shift+P`) → `Tasks: Run Task` → `Jekyll: Serve`
   - Or run manually in the terminal: `cd docs && bundle exec jekyll serve --host 0.0.0.0 --livereload`
4. The site will be available at `http://localhost:4000` and will reload automatically when files change

## How to contribute

The content for the pages is configurable in the docs/_data folder, with a source for each category

To add a resource, simply add a new yaml block:

Example:
```
- title: "Red Hat Web Console (Cockpit)" # Title of the page
  difficulty: "Intermediate" # How advanced is the content 
  topic: "RHEL"  # What is the core topic
  type: "Tool" # What type of content is this
  desc: "A web-based graphical interface for servers. Manage storage, networks, and containers directly from your browser." # Description of what this resource is
  link: "#" # A link to the resource
  link_text: "Launch Guide" # Link name
```
