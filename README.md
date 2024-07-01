# HNG Stage One Backend Task

This repository contains a simple Node.js application using Express, Axios, and WeatherAPI to provide weather information based on the client's IP address.

## Table of Contents

**Installation**
**Usage**
**API Endpoints**

### Installation

#### Clone the repository:

```
git clone https://github.com/ObodoakorDavid/HNG-Task-One
```

#### Cd into Folder:

```
cd HNG-Task-One
```

#### Open folder on vscode or any other IDE

```
code .
```

#### Install the dependencies:

```
npm install
```

#### Create a .env file in the root directory and add your WeatherAPI key:

```
WEATHER_API=your_weatherapi_key
```

### Usage

#### To start the server, run:

```
npm start
```

The server will start on http://localhost:3000.

### API Endpoints

#### GET /

**Returns a message directing the user to the /api/hello endpoint.**

Response:

```
"Kindly head to /api/hello to view the task"
```

#### GET /api/hello

**Fetches the weather information based on the client's IP address.**

**Query Parameters**

_visitor_name (optional)_: The name of the visitor.
Response with query:

```
{
"client_ip": "Your IP address",
"location": "Your city",
"greeting": "Hello, Visitor Name!, the temperature is Temperature degrees Celsius in Your City"
}
```

Response without query:

```
{
"client_ip": "Your IP address",
"location": "Your city",
"greeting": "Hello, Anon!, the temperature is Temperature degrees Celsius in Your City"
}
```

**Example Request**

```
curl http://localhost:3000/api/hello?visitor_name=John
```

**Example Response**

```
{
"client_ip": "192.168.1.1",
"location": "New York",
"greeting": "Hello, John!, the temperature is 25 degrees Celsius in New York"
}
```

### Environment Variables

**The application requires the following environment variable:**

**WEATHER_API**: Your WeatherAPI key.

You can visit the [WeatherApi](https://www.weatherapi.com/) website to sign up and get your api key.
