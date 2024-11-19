#some comments here to help me out 

#defining base img
FROM node:20.18-alpine

#setting work dir
WORKDIR /app

#copy package.json file
COPY package*.json ./

#install dependencies
RUN npm install

#copying all the remaining file here
COPY . .

#build the app
RUN npm run build

# Expose the port 
EXPOSE 3000

# Start the app
CMD ["npm", "start"]


