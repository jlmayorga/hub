# Getting Started

This is a site designed to collect and consolidate useful information about using Red Hat technologies.

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
