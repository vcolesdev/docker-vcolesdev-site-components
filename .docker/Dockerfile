FROM node:latest

# Install xdg-utils
CMD apt-get install xdg-utils

# Create app directory
WORKDIR /usr/src/app

# Let's give ourselves root permissions while we're at it
# RUN sudo chmod -R 777 /usr/src/app

# Separate the installation of your NPM dependencies from the copying of your
# application files. This will allow Docker to cache the installation of your
# NPM dependencies and only re-run it when your package.json file changes.
VOLUME /usr/src/app

# Install app dependencies
CMD echo "Copying package.json..."
COPY ../package.json .

# Node will now install all the dependencies listed in the package.json file
# This will create a folder called node_modules in your project directory,
# which will contain all our dependencies.
CMD echo "Installing dependencies"
RUN npm install
CMD echo "Dependencies installed successfully!"

# Bundle app source, this will copy all our files to the /usr/src/app directory
# in the container.
CMD echo "Copying local files to container..."
COPY .. .
CMD echo "Files copied to /usr/src/app."

# The CMD instruction specifies what command to run within the container.
CMD echo "Starting Storybook... Lift off!"
CMD [ "npm", "run", "storybook"]