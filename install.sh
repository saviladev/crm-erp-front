#!/bin/bash

# Update and upgrade system packages
echo "Updating and upgrading system packages..."
sudo apt update && sudo apt upgrade -y

# Install required packages
echo "Installing Node.js, npm, and Apache2..."
sudo apt install nodejs npm -y

# Install Angular CLI globally
echo "Installing Angular CLI globally..."
sudo npm install -g @angular/cli

# Check Angular CLI version
echo "Angular CLI version installed:"
ng version

# Clone the Git repository
REPO_URL="https://github.com/saviladev/crm-erp-front"
echo "Cloning repository from $REPO_URL..."
git clone $REPO_URL

# Navigate into the repository directory
cd crm-erp-front || { echo "Failed to enter the directory 'crm-erp-front'"; exit 1; }

# Install npm dependencies
echo "Installing npm dependencies..."
npm i

echo "Setup complete!"